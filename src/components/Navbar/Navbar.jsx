import React, { useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaRobot } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import { FaLanguage } from "react-icons/fa6";

const Navbar = () => {
  const featuresRef = useRef();

  return (
    <>
      <header>
        <nav className="bg-[#1a1a2e] border-gray-200 px-4 lg:px-6 py-2.5">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <Link to="/" className="flex items-center">
              <img
                src="src/assets/logo (1).png"
                alt="BookAI logo"
                className="mr-3 h-12"
              />
              <span className="text-white text-lg font-semibold">BookAI</span>
            </Link>

            <div className="flex items-center space-x-5">
              <div className="flex-grow lg:order-1 lg:flex lg:justify-center lg:ml-8">
                <ul className="flex flex-col mt-4 font-medium md:flex-row md:space-x-8 md:mt-0">
                  <li>
                    <button
                      // to="/#features"
                      className="text-gray-400 hover:text-white"
                      onClick={() => {
                        // document
                        //   .querySelector("#features")
                        //   .scrollIntoView({ behavior: "smooth" });

                        featuresRef.current?.scrollIntoView({
                          behavior: "smooth",
                        });
                      }}
                    >
                      Features
                    </button>
                  </li>
                  <li>
                    <NavLink
                      to="/How it works"
                      className="text-gray-400 hover:text-white"
                    >
                      How It Works
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Roadmap"
                      className="text-gray-400 hover:text-white"
                    >
                      Roadmap
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/API"
                      className="text-gray-400 hover:text-white"
                    >
                      API
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Price"
                      className="text-gray-400 hover:text-white"
                    >
                      Price
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/Models"
                      className="text-gray-400 hover:text-white"
                    >
                      Models
                    </NavLink>
                  </li>
                </ul>
              </div>

              <div className="flex items-center lg:order-2 ml-4">
                <Link
                  to="#"
                  className="text-white bg-blue-600 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 focus:outline-none"
                >
                  Login / Sign Up
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <div className="text-center bg-[#1a1a2e] py-16">
        <h1 className="text-5xl text-white font-bold mb-4">
          Explore the Possibilities of{" "}
          <span className="text-purple-500">AI Book Writing</span> with{" "}
          <span className="text-white">BookAI</span>
        </h1>
        <p className="text-gray-400 text-lg mb-8">
          Unleash the power of AI to create captivating books in minutes.
          Download, Distribute wherever you want. Generate unlimited free books.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="p-3 bg-blue-600 text-white rounded-lg font-medium text-lg">
            Get Started
          </button>
          <button className="p-3 bg-blue-600 text-white rounded-lg font-medium text-lg">
            Get API Access
          </button>
        </div>
        <p className="text-yellow-400 mt-8">
          Attention: TryBookAI has been acquired by Indicus AI. Indicus LLM will
          be used for text and image generation.
        </p>
      </div>

      <div>
        <img src="src\assets\book2.png" alt="book" className="w-auto h-auto" />
      </div>
      <section
        ref={featuresRef}
        className="flex justify-around pt-5 flex-wrap bg-[#1a1a2e] text-white"
      >
        <div className="text-center basis-2 mb-5">
          <div className="w-16 h-16 bg-[#6C3AD6] rounded-full mb-4 mx-auto flex justify-center items-center text-2xl">
            <FaRobot />
          </div>
          <h3 className="font-semibold">AI-Powered Writing</h3>
          <p className="text-sm">
            Generate high-quality content with advanced AI technology.
          </p>
        </div>
        <div className="text-center basis-2 mb-5">
          <div className="w-16 h-16 bg-[#6C3AD6] rounded-full mb-4 mx-auto flex justify-center items-center text-2xl">
            <FaBook />
          </div>
          <h3 className="font-semibold">Custom Genres</h3>
          <p className="text-sm">
            Create stories in any genre or blend multiple styles.
          </p>
        </div>
        <div className="text-center basis-2 mb-5">
          <div className="w-16 h-16 bg-[#6C3AD6] rounded-full mb-4 mx-auto flex justify-center items-center text-2xl">
            <FaDownload />
          </div>
          <h3 className="font-semibold">Instant Download</h3>
          <p className="text-sm">
            Get your completed book in various formats instantly.
          </p>
        </div>
        <div className="text-center basis-2 mb-5">
          <div className="w-16 h-16 bg-[#6C3AD6] rounded-full mb-4 mx-auto flex justify-center items-center text-2xl">
            <FaLanguage />
          </div>
          <h3 className="font-semibold">Multilingual</h3>
          <p className="text-sm">
            Generate content in multiple languages effortlessly.
          </p>
        </div>
      </section>
    </>
  );
};

export default Navbar;
