import React from "react";
import Logo from "../../assets/logo.png";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from "./DarkMode";

const Menu = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Predict",
    link: "/predict",
  },
  {
    id: 3,
    name: "Breed",
    link: "/breed",
  },
];

const Navbar = () => {
  return (
    <>
      <style>
        {`
          .navbar {
            height: 90px; /* Increased navbar height */
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
            background-color: #ffffff; /* White background for light mode */
            transition: background-color 0.3s, color 0.3s; /* Transition for dark mode */
          }

          .dark .navbar {
            background-color: #1a202c; /* Dark background for dark mode */
            color: #ffffff; /* White text for dark mode */
          }

          .container {
            max-width: 1500px; /* Increased maximum width of the container */
            margin: auto; /* Center the container */
            padding: 1.5rem; /* Padding for the navbar */
          }

          .flex {
            display: flex;
            justify-content: space-between; /* Space between logo and menu items */
            align-items: center; /* Center items vertically */
          }

          .logo {
            display: flex;
            align-items: center; /* Center the logo */
            font-weight: bold; /* Bold font for the brand name */
            font-size: 1.5rem; /* Font size for the brand name */
          }

          .logo img {
            width: 60px; /* Logo width */
            margin-right: 0.5rem; /* Spacing between logo and brand name */
          }

          .menu {
            display: flex; /* Flexbox for menu items */
            align-items: center; /* Center items vertically */
            gap: 1.5rem; /* Spacing between menu items */
            font-weight: bold; /* Bold font for the brand name */
            font-size: 1.5rem;
          }

          .menu-item {
            position: relative; /* Position relative for hover effects */
          }

          .menu-link {
            padding: 0.5rem 1rem; /* Padding for menu links */
            color: inherit; /* Inherit color from parent */
            text-decoration: none; /* Remove underline from links */
            transition: color 0.2s; /* Transition for color on hover */
          }

          .menu-link:hover {
            color: blue; /* Change color on hover */
          }

          .login-button {
            background: linear-gradient(to right, #4c00b4, #6f00f9); /* Gradient background */
            color: white; /* White text */
            font-weight: bold; /* Bold font for the brand name */
            font-size: 1.2rem;
            padding: 0.5rem 2rem; /* Padding for button */
            border-radius: 30px; /* Rounded corners */
            display: flex; /* Flex for icon and text */
            align-items: center; /* Center icon and text */
            transition: transform 0.2s; /* Transition for scaling effect */
          }

          .login-button:hover {
            transform: scale(1.05); /* Scale up on hover */
          }

          .icon {
            margin-left: 0.5rem; /* Space between text and icon */
          }

          @media (max-width: 640px) {
            .menu {
              display: none; /* Hide menu on smaller screens */
            }
          }
        `}
      </style>
      
      <div className="navbar">
        <div className="container">
          <div className="flex">
            <div className="logo">
              <a href="#" className="font-bold text-2xl sm:text-4xl flex gap-4">
                <img src={Logo} alt="Logo" />
                DBreed
              </a>
            </div>
            <div className="flex justify-between items-center gap-4">
              <div>
                <DarkMode />
              </div>
              <ul className="menu">
                {Menu.map((menu) => (
                  <li key={menu.id} className="menu-item">
                    <a href={menu.link} className="menu-link">
                      {menu.name}
                    </a>
                  </li>
                ))}
              </ul>
            
              <a href="/login" className="inline-block">
                <button className="login-button flex items-center">
                  Login
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
