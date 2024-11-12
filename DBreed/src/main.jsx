import React from "react";
import ReactDOM from "react-dom/client";


import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import "./index.css";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import App from "./App";
import Prediction from "./pages/prediction";
import Login from "./components/LoginSignup/Login";
import Breed from "./pages/Breed/Breed";
import SingleDog from "./pages/Breed/SingleDog";

const router = createBrowserRouter([

  {
    path: "/", 
    element: <App/>, 
  },
  {
    path: "/predict", 
    element: <Prediction/>, 
  },
  {
    path: "/login", 
    element: <Login/>, 
  },
  {
    path: "/breed", 
    element: <Breed/>, 
  },
  {
    path: "/:name", 
    element: <SingleDog/>, 
  },


]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
