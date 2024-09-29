import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./component/Home";
import StudentLife from "./Student Life/Student Life";
import Login from "./Registration/Login/Login";
import Signup from "./Registration/Sign up/Sign up";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: 'Home',
                element: <Home />
            },
            {
                path: 'About',
                element: <Home />
            },
            {
                path: 'Academics',
                element: <Home />
            },
            {
                path: 'Student Life',
                element: <StudentLife />
            },
            {
                path:'login',
                element: <Login />
            },
            {
                path:'Signup',
                element: <Signup />
            }

        ]
    }

])  