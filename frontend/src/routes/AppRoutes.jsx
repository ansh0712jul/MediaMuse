import Home from "@/pages/Home";
import PricingPage  from "@/pages/PricingPage";
import SignIn from "@/pages/SignIn";
import SignUp from "@/pages/SignUp";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/sign-up" element = { <SignUp/> }/>
            <Route path="/sign-in" element = { <SignIn/> }/>
            <Route path="/" element={<Home/>}/>
            <Route path="/pricing-page" element={<PricingPage/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes