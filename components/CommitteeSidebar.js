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
            
            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#honchairs")}`}>
              <Link 
                href="/Committee#honchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Honorary Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#genchairs")}`}>
              <Link 
                href="/Committee#genchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                General Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#programchairs")}`}>
              <Link 
                href="/Committee#programchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Program Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#industryintchair")}`}>
              <Link 
                href="/Committee#industryintchair"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Industry Interaction Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#confchairs")}`}>
              <Link 
                href="/Committee#confchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Conference Organising Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#confSecretary")}`}>
              <Link 
                href="/Committee#confSecretary"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Conference Secretary
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#sponsorshipcochair")}`}>
              <Link 
                href="/Committee#sponsorshipcochair"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Sponsorship Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#tpcchairs")}`}>
              <Link 
                href="/Committee#tpcchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Technical Program Committee Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#finchairs")}`}>
              <Link 
                href="/Committee#finchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Finance Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#pubchairs")}`}>
              <Link 
                href="/Committee#pubchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Publication Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#publchairs")}`}>
              <Link 
                href="/Committee#publchairs"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Publicity Chair
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#execcommittee")}`}>
              <Link 
                href="/Committee#execcommittee"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Executive Committee
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#advisorycommittee")}`}>
              <Link 
                href="/Committee#advisorycommittee"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Advisory Committee
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#technicalcommittee")}`}>
              <Link 
                href="/Committee#technicalcommittee"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Technical Program Committee
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#youngprofessionals")}`}>
              <Link 
                href="/Committee#youngprofessionals"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Young Professionals
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#womeninengineering")}`}>
              <Link 
                href="/Committee#womeninengineering"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Women In Engineering
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#sighumanitarian")}`}>
              <Link 
                href="/Committee#sighumanitarian"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Special Interest Group On Humanitarian Technology
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#studentactivity")}`}>
              <Link 
                href="/Committee#studentactivity"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Student Activity
              </Link>
            </li>

            <li className={`rounded-md hover:bg-blue-200 dark:hover:bg-blue-700 ${isActiveTab("#studentcoordinator")}`}>
              <Link 
                href="/Committee#studentcoordinator"
                onClick={() => { if (width < 768) setIsOpen(false); }}
                className="block p-1 pl-2 text-gray-900 dark:text-gray-100"
              >
                Student Co-ordinator
              </Link>
            </li>

          </ul>
        )}
      </div>
    </div>
  );
};

export default CommitteeSidebar;