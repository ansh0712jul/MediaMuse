import Home from "@/pages/Home";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element = { <SignUp/> }/>
            <Route path="/sign-in" element = { <SignIn/> }/>
            <Route path="/home" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes