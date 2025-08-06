import React, { useState } from "react";
import fonts from "../styles/customFont.module.css";
import Sidebar from "./Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import Gallery from "./../pages/Gallery";

const Navbar = () => {
  const router = useRouter();
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-black flex h-[72px] items-center p-6">
      <div className={`flex-1 font-bold text-3xl`}>
        <div className=" flex flex-start">
          <Link href="/">
            <p className=" cursor-pointer font-extrabold">
              <span className="text-orange-400">MAC</span>
              <span className="text-white">2026</span>
            </p>
          </Link>
        </div>
      </div>

      <div className="hidden lg:flex lg:gap-2 text-lg font-semibold">
        <Link href="/">
          <span
            className={`${
              router.pathname == "/" ? "  text-orange-400 " : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            About
          </span>
        </Link>
        <Link href="/Committee">
          <span
            className={`${
              router.pathname == "/Committee"
                ? " text-orange-400"
                : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Committee
          </span>
        </Link>
        <span
          className={` text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 `}
        >
          <label
            tabIndex={0}
            className=" hover:text-orange-400 m-1 relative text-white"
          >
            Program{" "}
          </label>
          <div className="absolute top-[42px] -left-10 dropdown-content p-4">
            <ul
              tabIndex={0}
              className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start"
            >
              <Link href="/keynote1">
                <li
                  className={`${
                    router.pathname == "/keynote1"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Keynotes
                </li>
              </Link>
              <Link href="/workshop">
                <li
                  className={`${
                    router.pathname == "/workshop"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Workshop
                </li>
              </Link>
              <Link href="/yp">
                <li
                  className={`${
                    router.pathname == "/yp"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  YP
                </li>
              </Link>
              <Link href="/wie">
                <li
                  className={`${
                    router.pathname == "/wie"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  WIE
                </li>
              </Link>
              <Link href="/sight">
                <li
                  className={`${
                    router.pathname == "/sight"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  SIGHT
                </li>
              </Link>
              <Link href="/conferenceSchedule">
                <li
                  className={`${
                    router.pathname == "/conferenceSchedule"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Conference Schedule
                </li>
              </Link>
            </ul>
          </div>
        </span>
        <Link href="/tracks">
          <span
            className={`${
              router.pathname == "/tracks" ? " text-orange-400" : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Tracks
          </span>
        </Link>
        <span
          className={` text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 `}
        >
          <label
            tabIndex={0}
            className=" hover:text-orange-400 m-1 relative text-white"
          >
            Authors{" "}
          </label>
          <div className="absolute top-[42px] -left-10 dropdown-content p-4">
            <ul
              tabIndex={0}
              className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start"
            >
              <Link href="/PaperSubmission">
                <li
                  className={`${
                    router.pathname == "/PaperSubmission"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Paper Submission
                </li>
              </Link>
              <Link href="/dates">
                <li
                  className={`${
                    router.pathname == "/dates"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Important Dates
                </li>
              </Link>
              <Link href="/tracks" scroll={false}>
                <li
                  className={`${
                    router.pathname == "/tracks"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Call For Papers
                </li>
              </Link>
              {/*<a href='/MAC_2023_SCHEDULE.pdf' download={true}>
    <li className='hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2'>Download Schedule</li>
  </a>*/}
            </ul>
          </div>
        </span>
        <span
          className={` text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 `}
        >
          <label
            tabIndex={0}
            className=" hover:text-orange-400 m-1 relative text-white"
          >
            Awards{" "}
          </label>
          <div className="absolute top-[42px] -left-10 dropdown-content p-4">
            <ul
              tabIndex={0}
              className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start"
            >
              <Link href="/awards">
                <li
                  className={`${
                    router.pathname == "/PaperSubmission"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Best Paper Award
                </li>
              </Link>
              <Link href="/competitions">
                <li
                  className={`${
                    router.pathname == "/dates"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                 Competitions
                </li>
              </Link>
             
              {/*<a href='/MAC_2023_SCHEDULE.pdf' download={true}>
    <li className='hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2'>Download Schedule</li>
  </a>*/}
            </ul>
          </div>
        </span>
        
        {/* <Link href="/awards">
          <span
            className={`${
              router.pathname == "/tuned" ? " text-orange-400" : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Awards
            
          </span>
          
        </Link> */}
        <Link href="/Sponsor">
          <span
            className={`${
              router.pathname == "/Sponsor" ? " text-orange-400" : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Sponsors
          </span>
        </Link>
        <Link href="/registration">
          <span
            className={`${
              router.pathname == "/registration"
                ? " text-orange-400"
                : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Registration
          </span>
        </Link>

        <span
          className={` text-orange-400 hover:border-orange-400 dropdown dropdown-hover dropdown-end cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 `}
        >
          <label
            tabIndex={0}
            className=" hover:text-orange-400 m-1 relative text-white"
          >
            Accommodation{" "}
          </label>
          <div className="absolute top-[42px] -left-10 dropdown-content p-4">
            <ul
              tabIndex={0}
              className="text-white text-[17px] font-semibold menu p-2 shadow bg-stone-800 rounded-xl w-52 flex flex-col items-start"
            >
              <Link href="/Venue">
                <li
                  className={`${
                    router.pathname == "/tuned"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300 hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Conference venue
                </li>
              </Link>
              <Link href="/Accommodation">
                <li
                  className={`${
                    router.pathname == "/tuned"
                      ? " hover:border-orange-400 text-orange-400"
                      : ""
                  } hover:bg-orange-300  hover:text-black rounded-lg w-full text-left p-2`}
                >
                  Accommodation
                </li>
              </Link>
            </ul>
          </div>
        </span>
        <Link href="/Gallery">
          <span
            className={`${
              router.pathname == "/Gallery" ? " text-orange-400" : "text-white"
            }  cursor-pointer w-32 px-4 text-center py-2 hover:font-bold border-b-2 border-black hover:border-b-2 hover:text-orange-400 hover:border-orange-400`}
          >
            Gallery
          </span>
        </Link>
      </div>

      <span
        className="block lg:hidden"
        onClick={() => setIsOpenSidebar((prev) => !prev)}
      >
        <GiHamburgerMenu className="w-6 h-6 text-white" />
      </span>
      <AnimatePresence>
        {isOpenSidebar && <Sidebar setIsOpenSidebar={setIsOpenSidebar} />}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
