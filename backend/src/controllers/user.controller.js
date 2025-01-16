import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import User from "../models/user.model.js";

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
