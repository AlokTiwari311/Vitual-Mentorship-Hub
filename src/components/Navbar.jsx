import React, { useState } from "react";
import logo from "../assets/logo vmh.png";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = props.isLoggedIn;
  const setIsLoggedIn = props.setIsLoggedIn;

  return (
    <nav className="bg-[#2BB17A]">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/">
          <img src={logo} alt="Logo" width={80} height={22} loading="lazy" />
        </Link>

        <div className="hidden md:flex items-center gap-x-8">
          <ul className="text-[#ffffff] flex gap-x-8 text-xl">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li></li>
          </ul>
        </div>

        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="block text-white focus:outline-none md:hidden"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden absolute top-10 right-0 w-full bg-[#2BB17A] py-4 z-30">
            <ul className="text-[#ffffff] flex flex-col items-center gap-y-4 ">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
              <li>
                {isLoggedIn && (
                  <Link to="/dashboard">
                    <button className="nav-btn">Dashboard</button>
                  </Link>
                )}
              </li>
              <li>
                {!isLoggedIn && (
                  <Link to="/login">
                    <button className="nav-btn">Log in</button>
                  </Link>
                )}
              </li>

              <li>
                {isLoggedIn && (
                  <Link to="/">
                    <button
                      onClick={() => {
                        setIsLoggedIn(false);
                        toast.success("Logged Out");
                      }}
                      className="nav-btn"
                    >
                      Log Out
                    </button>
                  </Link>
                )}
              </li>
              <li>
                {!isLoggedIn && (
                  <Link to="/signup">
                    <button className="nav-btn">Sign up</button>
                  </Link>
                )}
              </li>

            </ul>
          </div>
        )}

        <div className="md:flex items-center gap-x-4 hidden">
          {/* Login - SignUp - LogOut - Dashboard */}
          {!isLoggedIn && (
            <Link to="/login">
              <button className="nav-btn">Log in</button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link to="/signup">
              <button className="nav-btn">Sign up</button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="nav-btn"
              >
                Log Out
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/dashboard">
              <button className="nav-btn">Dashboard</button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
