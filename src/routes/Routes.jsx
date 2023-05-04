import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../components/Home/Home";
import ChefDetails from "../components/Chefs/ChefDetails";
import Blog from "../components/Blog/Blog";
import Contact from "../components/Contact/Contact";
import About from "../components/About/About";
import Login from "../components/Login/Login";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/chef-details/:chefId',
                loader: ({ params }) => fetch(`https://pachfhoron-server-site-sourav-barua.vercel.app/chefs/${params.chefId}`),
                element: <ChefDetails></ChefDetails>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/login',
                element: <Login />
            },
        ]
    }
])