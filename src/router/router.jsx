import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../components/Home";
import About from "../components/About";
import Blog from "../components/Blog";
import SingIn from "../firebase/pages/SingIn";
import SingUp from "../firebase/pages/SingUp";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                path: '/',
                Component: Home
            },
            {
                path: 'about',
                Component: About
            },
            {
                path: 'blog',
                Component: Blog,
            },
            {
                path: 'singIn',
                Component: SingIn
            },
            {
                path: 'singUp',
                Component: SingUp
            }
        ]
        
    }
])