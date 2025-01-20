import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element = { <SignUp/> }/>
            <Route path="/sign-in" element = { <SignIn/> }/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes