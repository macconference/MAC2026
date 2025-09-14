import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollLock } from "@mantine/hooks";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";
import Link from "next/link";

const CommitteeSidebar = ({ width, isOpen, setIsOpen }) => {
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const router = useRouter();

  const isActiveTab = (route) => {
    return router.asPath.includes(route) ? "active-tab" : "";
  };

  // Helper function to handle link clicks and close sidebar on mobile
  const handleLinkClick = (href) => {
    // Close sidebar on mobile
    if (width < 768) {
      setIsOpen(false);
    }
    
    // Navigate to the section
    router.push(href);
  };

  return (
    <div className="md:sticky top-16 md:w-[30%] lg:w-[25%] h-full">
      <div className="md:bg-stone-100 dark:md:bg-gray-800 h-full md:pt-8">
        <div className="justify-between">
          <h1
            onClick={() => {
              if (width < 768) setIsOpen((prev) => !prev);
            }}
            className="bg-stone-100 dark:bg-gray-800 pt-6 md:pt-0 fixed md:static z-20 text-2xl font-bold w-full text-center pb-2 border-b-2 border-cyan-600 dark:border-cyan-400 cursor-pointer text-gray-900 dark:text-gray-100"
          >
            Organising Committee
            {width < 768 &&
              (isOpen === false ? (
                <span>
                  <FaArrowCircleDown className="ml-2 text-right animate-bounce inline-block text-3xl text-gray-900 dark:text-gray-100" />
                </span>
              ) : (
                <span>
                  <FaArrowCircleUp className="ml-2 text-right inline-block text-3xl text-gray-900 dark:text-gray-100" />
                </span>
              ))}
          </h1>
        </div>

        {isOpen && (
          <ul className="fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12 bg-white dark:bg-gray-900 z-10 px-4 py-16 md:py-2 text-lg lg:text-xl flex flex-col gap-2 w-full">
            
            {/* <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#patrons")}`}
              onClick={() => handleLinkClick("/Committee#patrons")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Patrons
              </div>
            </li> */}

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#honchairs")}`}
              onClick={() => handleLinkClick("/Committee#honchairs")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Honorary Chair
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#genchairs")}`}
              onClick={() => handleLinkClick("/Committee#genchairs")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                General Chair
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#gencochair")}`}
              onClick={() => handleLinkClick("/Committee#gencochair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                General Co-Chairs
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#programchairs")}`}
              onClick={() => handleLinkClick("/Committee#programchairs")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Technical Program Committee Chair
              </div>
            </li>

              <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#publicitycochair")}`}
              onClick={() => handleLinkClick("/Committee#publicitycochair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
               Program Chair
              </div>
            </li>
             
             <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#finchairs")}`}
              onClick={() => handleLinkClick("/Committee#finchairs")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Finance Chair
              </div>
            </li>
             
             <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#advisorycommittee")}`}
              onClick={() => handleLinkClick("/Committee#advisorycommittee")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Advisory Committee
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#execcommittee")}`}
              onClick={() => handleLinkClick("/Committee#execcommittee")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Executive Committee
              </div>
            </li>

             
            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#academicoutreach")}`}
              onClick={() => handleLinkClick("/Committee#Publicationchair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Publication Chair
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#industryintchair")}`}
              onClick={() => handleLinkClick("/Committee#industryintchair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Industry OutreachChair
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#academicoutreach")}`}
              onClick={() => handleLinkClick("/Committee#academicoutreach")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Academic Outreach Chair
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#sponsorshipchair")}`}
              onClick={() => handleLinkClick("/Committee#sponsorshipchair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Sponsorship Chairs
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#socialmediachair")}`}
              onClick={() => handleLinkClick("/Committee#socialmediachair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Web and Social Media Chairs
              </div>
            </li>

           

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#publchairs")}`}
              onClick={() => handleLinkClick("/Committee#publchairs")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                Publicity Chairs
              </div>
            </li>

            <li 
              className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 cursor-pointer ${isActiveTab("#intchair")}`}
              onClick={() => handleLinkClick("/Committee#intchair")}
            >
              <div className="block p-1 pl-2 text-gray-900 dark:text-gray-100">
                International Chair
              </div>
            </li>

            
            
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommitteeSidebar;
