import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";



// helper function to generate access and refresh token 

export const generateAccessAndRefreshToken = async (userId) =>{
    try {
        const user = await User.findById(userId)

        if(!user){
            throw new ApiError(400 , "user not found");
        }

        const accessToken = user.generateAccessToken();
        const refreshToken = user.generateRefreshToken();

        user.refreshToken = refreshToken;
        await user.save({validateBeforeSave : false});

        return { accessToken , refreshToken } ;
        
    } catch (error) {
        throw new ApiError(400 , error?.message || "something went wrong while generating access and refresh tokens ");
    }
}


// endpoint to register user
export const registerUser = asyncHandler( async(req , res ) =>{

    const { username , email , password } = req.body;

    if(
        [username , email , password].some((value) => value?.trim() === "")
    ){
        throw new ApiError(400 , "all fields are required");
    }

    const existingUser = await User.findOne({
        $or : [{ email } , { username }]
    })

    if(existingUser){
        throw new ApiError(400 , "user already exists");
    }

    const user = await User.create({
        username,
        email,
        password
    })
    await user.save();

    const loggedInUser = await User.findOne(user._id).select("-passwprd -refreshToken");

    if(!loggedInUser){
        throw new ApiError(400 , "user not found");
    }

    return res
    .status(201)
        .json(
            new ApiResponse(201 , 
                {
                    loggedInUser
                },
                "user registerd succesfully"
            )
        )

})


// endpoint to login user

export const loginUser = asyncHandler( async(req , res ) =>{

    const { username , email , password } = req.body;

    if(!username && !email){
        throw new ApiError(400 , "username or email is required");
    }

    const user = await User.findOne({
        $or : [{ email } , { username }]
    })

    if(!user){
        throw new ApiError(400 , "user not found");
    }
    
    const isValidPassword = await user.isPasswordCorrect(password);

    if(!isValidPassword){
        throw new ApiError(400 , "invalid password");
    }

    const { accessToken , refreshToken } = await generateAccessAndRefreshToken(user._id);

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken");

    const options = {
        httpsOnly : true,
        secure : true,
    }

    return res 
    .status(200)
    .cookie("refreshToken" , refreshToken , options)
    .cookie("accessToken" , accessToken , options)
    .json(
        new ApiResponse(
            200,
            {
                user : loggedInUser , accessToken , refreshToken
            },
            "user logged in successfully"
        )
    )
})