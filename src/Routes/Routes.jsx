import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import Authentication from "../Layouts/Authentication";
import Signin from "../Pages/Authentication/Signin/Signin";
import Signup from "../Pages/Authentication/Signup/Signup";

const router =createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'/account',
        element:<Authentication></Authentication>,
        children:[
            {
                path:'/account/signin',
                element:<Signin></Signin>
            },
            {
                path:'/account/signup',
                element:<Signup></Signup>
            }
        ]
    }
])
export default router