import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <header>
        <nav className="bg-black border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl bg-black">
            <Link to="/" className="flex items-center">
              <img
                src="src\assets\logo (1).png"
                alt="BookAI logo"
                className="mr-3 h-12"
              />
              <span className="text-white text-lg font-semibold">BookAI</span>
            </Link>

            <div className="flex-grow lg:order-1 lg:flex lg:justify-center lg:ml-8">
              <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink to="/Features" className="text-white">
                    Features
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/How it works" className="text-white">
                    How It Works
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Roadmap" className="text-white">
                    Roadmap
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/API" className="text-white">
                    API
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Price" className="text-white">
                    Price
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/Models" className="text-white">
                    Models
                  </NavLink>
                </li>
              </ul>
            </div>

            <div className="flex items-center lg:order-2 ml-4">
              <Link
                to="#"
                className="text-white bg-blue-600 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
              >
                Login/Signup
              </Link>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
