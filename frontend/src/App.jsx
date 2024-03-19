import Layout from "./Layout/Layout";

import { Contact } from "./pages/Contact";
import { createBrowserRouter } from "react-router-dom";
import { SignIn } from "./pages/Signin";
import { SignUp } from "./pages/Signup";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/login", element: <SignIn /> },
      { path: "/register", element: <SignUp /> },
      { path: "/contact", element: <Contact /> },
    ],
    errorElement: <h1>You are Lost</h1>,
  },
]);

export default router;
