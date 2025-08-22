import React, { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaMoon, FaSun } from "react-icons/fa";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const router = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage or system preference
 useEffect(() => {
  if (localStorage.theme === "dark") {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light"); // ✅ force default light
    setDarkMode(false);
  }
}, []);


  // Toggle theme
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setDarkMode(true);
    }
  };

  // Reusable NavLink component
  const NavLink = ({ href, label }) => (
    <Link href={href}>
      <span
        className={`${
          router.pathname === href
            ? "text-orange-400"
            : "text-white dark:text-gray-200"
        } cursor-pointer px-3 py-2 w-fit text-center border-b-2 border-transparent hover:font-bold hover:text-orange-400 hover:border-orange-400`}
      >
        {label}
      </span>
    </Link>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50 
      bg-gradient-to-r from-indigo-900 via-blue-700 to-blue-900 
      dark:from-gray-900 dark:via-gray-800 dark:to-black 
      flex h-[72px] items-center px-6">

      {/* Left Side: Dark mode toggle + Logo */}
      <div className="flex items-center gap-4 flex-1">
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-white/20 dark:bg-black/40 
            hover:scale-110 transition text-yellow-300 dark:text-white"
        >
          {darkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
        </button>

        <Link href="/">
          <p className="cursor-pointer font-extrabold text-3xl">
            <span className="text-orange-400">MAC</span>
            <span className="text-white dark:text-gray-200">2026</span>
          </p>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex lg:gap-4 text-base font-semibold items-center">
        <NavLink href="/" label="About" />
        <NavLink href="/Committee" label="Committee" />

        {/* Dropdown: Program */}
        <div className="relative group">
          <span className="cursor-pointer px-3 py-2 text-white dark:text-gray-200 hover:text-orange-400">
            Program ▾
          </span>
          <div className="absolute hidden group-hover:flex flex-col mt-2 p-2 w-56 
            bg-stone-800 dark:bg-gray-900 rounded-xl shadow-md">
            <NavLink href="/keynote1" label="Keynotes" />
            <NavLink href="/workshop" label="Workshop" />
            <NavLink href="/yp" label="YP" />
            <NavLink href="/wie" label="WIE" />
            <NavLink href="/sight" label="SIGHT" />
            <NavLink href="/conferenceSchedule" label="Conference Schedule" />
          </div>
        </div>

        <NavLink href="/tracks" label="Tracks" />

        {/* Dropdown: Authors */}
        <div className="relative group">
          <span className="cursor-pointer px-3 py-2 text-white dark:text-gray-200 hover:text-orange-400">
            Authors ▾
          </span>
          <div className="absolute hidden group-hover:flex flex-col mt-2 p-2 w-56 
            bg-stone-800 dark:bg-gray-900 rounded-xl shadow-md">
            <NavLink href="/PaperSubmission" label="Paper Submission" />
            <NavLink href="/dates" label="Important Dates" />
            <NavLink href="/tracks" label="Call For Papers" />
          </div>
        </div>

        {/* Dropdown: Awards */}
        <div className="relative group">
          <span className="cursor-pointer px-3 py-2 text-white dark:text-gray-200 hover:text-orange-400">
            Awards ▾
          </span>
          <div className="absolute hidden group-hover:flex flex-col mt-2 p-2 w-56 
            bg-stone-800 dark:bg-gray-900 rounded-xl shadow-md">
            <NavLink href="/awards" label="Best Paper Award" />
            <NavLink href="/competitions" label="Competitions" />
          </div>
        </div>

        <NavLink href="/Sponsor" label="Sponsors" />
        <NavLink href="/registration" label="Registration" />

        {/* Dropdown: Accommodation */}
        <div className="relative group">
          <span className="cursor-pointer px-3 py-2 text-white dark:text-gray-200 hover:text-orange-400">
            Accommodation ▾
          </span>
          <div className="absolute hidden group-hover:flex flex-col mt-2 p-2 w-56 
            bg-stone-800 dark:bg-gray-900 rounded-xl shadow-md">
            <NavLink href="/Venue" label="Conference Venue" />
            <NavLink href="/Accommodation" label="Accommodation" />
          </div>
        </div>

        <NavLink href="/Gallery" label="Gallery" />
      </div>

      {/* Mobile Sidebar Toggle */}
      <span
        className="block lg:hidden"
        onClick={() => setIsOpenSidebar((prev) => !prev)}
      >
        <GiHamburgerMenu className="w-6 h-6 text-white dark:text-gray-200" />
      </span>

      {/* Sidebar for mobile */}
      <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
