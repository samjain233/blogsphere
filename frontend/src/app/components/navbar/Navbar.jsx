"use client";
import React, { useEffect, useState } from "react";
import style from "./navbar.module.css";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [navItems, setNavItems] = useState([]);

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
      const navs = [
        { nav: "Home", route: "/" },
        { nav: "Categories", route: "/categories" },
        { nav: "profile", route: "/profile" },
        { nav: "dashboard", route: "/dashboard" },
        { nav: "Logout", route: "/logout" },
      ];
      setNavItems(navs);
    } else {
      const navs = [
        { nav: "Home", route: "/" },
        { nav: "Categories", route: "/categories" },
        { nav: "LogIn", route: "/auth" },
      ];
      setNavItems(navs);
    }
  }, []);
  return (
    <>
      <nav className="w-full bg-[#184E77] shadow-lg sticky top-0">
        <div className="w-full flex flex-row justify-between p-4">
          {/* logo  */}
          <div className={style.font_lily}>
            <h2 className="text-3xl text-[#D9ED92]">Blogsphere</h2>
          </div>
          <div className="hidden md:block">
            <ul className="h-full font-semibold flex flex-row items-center justify-center text-white">
              {navItems.map((item) => (
                <li
                  key={item.nav}
                  className="px-2 mx-4 hover:text-[#D9ED92] relative  before:content-[''] before:absolute before:bg-[#D9ED92] before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full"
                >
                  <Link href={item.route}>{item.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div
            className="text-white md:cursor-pointer flex items-center md:hidden text-4xl"
            onClick={() => {
              handleClick();
            }}
          >
            <HiMenu />
          </div>
        </div>
        <div
          className={`fixed md:hidden top-0 ${
            !toggle ? "right-[-80vw]" : "right-0"
          } shadow-md transition-all duration-300`}
        >
          <div className="w-[80vw] h-screen bg-[#184E77] opacity-90">
            <div
              className="text-white md:cursor-pointer flex items-center md:hidden text-4xl"
              onClick={() => {
                handleClick();
              }}
            >
              <IoClose />
            </div>
            <ul className="h-full font-semibold flex flex-col items-start justify-start text-white">
              {navItems.map((item) => (
                <li
                  key={item.nav}
                  className="hover:text-[#D9ED92] relative  before:content-[''] before:absolute before:bg-[#D9ED92] before:h-[3px] before:w-0 before:left-0 before:bottom-[-8px] before:transition-[0.3s] before:duration-300 hover:before:w-full"
                >
                  <Link href={"/" + item.route}>{item.nav}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
