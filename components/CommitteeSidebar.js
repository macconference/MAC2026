import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollLock } from "@mantine/hooks";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const CommitteeSidebar = ({ width, isOpen, setIsOpen }) => {
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const router = useRouter();

  // Function to check if a tab is active based on route fragment
  const isActiveTab = (route) => {
    return router.asPath.includes(route) ? "active-tab" : "";
  };

  return (
    <div className="md:sticky top-16 md:w-[30%] lg:w-[25%] h-full">
      <div className="md:bg-stone-100 h-full md:pt-8">
        <div className="justify-between">
          <h1
            onClick={() => {
              if (width < 768) setIsOpen((prev) => !prev);
            }}
            className="bg-stone-100 pt-6 md:pt-0 fixed md:static z-20 text-2xl font-bold w-full text-center pb-2 border-b-2 border-cyan-600 cursor-pointer"
          >
            Organising Committee
            {width < 768 &&
              (isOpen === false ? (
                <span>
                  <FaArrowCircleDown className="ml-2 text-right animate-bounce inline-block text-3xl" />
                </span>
              ) : (
                <span>
                  <FaArrowCircleUp className="ml-2 text-right inline-block text-3xl" />
                </span>
              ))}
          </h1>
        </div>

        {isOpen && (
          <ul className="fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12 bg-white z-10 px-4 py-16 md:py-2 text-lg lg:text-xl flex flex-col gap-2 w-full">
            {/* Honorary Chair */}
            <li
              onClick={() => {
                router.push("/Committee#honchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#honchairs"
              )}`}
            >
              Honorary Chair
            </li>

            {/* General Chair */}
            <li
              onClick={() => {
                router.push("/Committee#genchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#genchairs"
              )}`}
            >
              General Chair
            </li>

            {/* Industry Interaction Chair */}
            <li
              onClick={() => {
                router.push("/Committee#industryintchair");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#industryintchair"
              )}`}
            >
              Industry Interaction Chair
            </li>

            {/* Conference Organising Chair */}
            <li
              onClick={() => {
                router.push("/Committee#confchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#confchairs"
              )}`}
            >
              Conference  Chair
            </li>

            {/* Program Chair */}
            <li
              onClick={() => {
                router.push("/Committee#programchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#programchairs"
              )}`}
            >
              Program Chair
            </li>

            {/* Technical Program Committee Chair */}
            <li
              onClick={() => {
                router.push("/Committee#tpcchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#tpcchairs"
              )}`}
            >
              Technical Program Committee Chair
            </li>

            {/* Finance Chair */}
            <li
              onClick={() => {
                router.push("/Committee#finchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#finchairs"
              )}`}
            >
              Finance Chair
            </li>

            {/* Publication Chair */}
            <li
              onClick={() => {
                router.push("/Committee#pubchairs");
                if (width < 768) setIsOpen(false);
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "#pubchairs"
              )}`}
            >
              Publication Chair
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommitteeSidebar;
