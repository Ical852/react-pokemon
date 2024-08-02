import React, { useCallback, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "./logo.png";

const Navbar = () => {
  const location = useLocation();
  const [show, setShow] = useState(false);
  const toggle = () => setShow(!show);

  const routerPath = location.pathname;
  const getClass = useCallback(
    (route) => {
      const isRoute = routerPath === route;
      if (isRoute) {
        return "rounded-md bg-red-900 px-3 py-2 text-sm font-medium text-white";
      }
      return "rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-red-700 hover:text-white";
    },
    [routerPath]
  );
  const getMobileClass = useCallback(
    (route) => {
      const isRoute = routerPath === route;
      if (isRoute) {
        return "block rounded-md bg-red-900 px-3 py-2 text-base font-medium text-white";
      }
      return "block rounded-md px-3 py-2 text-base font-medium text-red-300 hover:bg-red-700 hover:text-white";
    },
    [routerPath]
  );

  return (
    <nav className="bg-red-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              onClick={toggle}
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-red-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${show ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                onClick={toggle}
                className={`${show ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img className="h-8 w-auto" src={logo} alt="Your Company" />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link to="/" className={getClass("/")} aria-current="page">
                  Home
                </Link>
                <Link to="/my-pokemons" className={getClass("/my-pokemons")}>
                  My Pokemons
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="sm:hidden"
        id="mobile-menu"
        style={{ display: `${show ? "block" : "none"}` }}
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          <Link to="/" className={getMobileClass("/")} aria-current="page">
            Home
          </Link>
          <Link to="/my-pokemons" className={getMobileClass("/my-pokemons")}>
            My Pokemons
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
