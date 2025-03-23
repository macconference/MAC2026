import React, { useState } from "react";
import { useRouter } from "next/router";
import { useScrollLock } from "@mantine/hooks";
import Link from "next/link";
import hovers from "../styles/track.module.css";
import { FaArrowCircleDown, FaArrowCircleUp } from "react-icons/fa";

const CommitteeSidebar = ({ width, isOpen, setIsOpen }) => {
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const [activeAccord, setActiveAccord] = useState(0);
  const router = useRouter();

  // Function to check if a tab is active
  const isActiveTab = (route) => {
    return router.asPath.includes(route) ? "active-tab" : "";
  };

  return (
    <div className="md:sticky top-16  md:w-[30%] lg:w-[25%] h-full">
      <div className="md:bg-stone-100  h-full md:pt-8">
        <div className="justify-between ">
          <h1
            onClick={() => {
              if (width < 768) {
                setIsOpen((prev) => !prev);
                // setScrollLocked((prev) => !prev);
              }
            }}
            className="bg-stone-100 pt-6 md:pt-0 fixed md:static z-20 text-2xl font-bold w-full  text-center pb-2 border-b-2 border-cyan-600 cursor-pointer"
          >
            Organising Committee
            {width < 768 &&
              (isOpen == false ? (
                width < 768 ? (
                  <span>
                    <FaArrowCircleDown className="ml-2 text-right animate-bounce inline-block text-3xl" />
                  </span>
                ) : (
                  ""
                )
              ) : (
                <span>
                  <FaArrowCircleUp className="ml-2 text-right  inline-block text-3xl " />
                </span>
              ))}
          </h1>
        </div>
        {isOpen && (
          <ul className="fixed md:static top-16 overflow-auto h-[90vh] md:h-[85vh] md:pb-12 bg-white z-10 px-4 py-16 md:py-2 text-lg lg:text-xl flex flex-col gap-2 w-full ">
            {/* <li
              onClick={() => {
                router.push("/Committee#chiefpatron");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/#chiefpatron"
              )}`}
            >
              Chief Patron
            </li> */}
            <li
              onClick={() => {
                router.push("/Committee#patron");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/#patron"
              )}`}
            >
              Patron
            </li>
            <li
              onClick={() => {
                router.push("/Committee#honchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/#honchairs"
              )}`}
            >
              Honorary Chair
            </li>
            {/* <li
              onClick={() => {
                router.push("/Committee#orgChair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/#patron"
              )}`}
            >
              Organizing Chair
            </li> */}
            <li
              onClick={() => {
                router.push("/Committee#genchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#genchairs"
              )}`}
            >
              General Chair
            </li>
            <li
              onClick={() => {
                router.push("/Committee#programchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#programchairs"
              )}`}
            >
              Program Chair
            </li>
            <li
              onClick={() => {
                router.push("/Committee#industryintchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#industryintchair"
              )}`}
            >
              Industry Interaction Chair
            </li>
            <li
              onClick={() => {
                router.push("/Committee#confchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#confchairs"
              )}`}
            >
              Conference Organising Chair
            </li>
            <li
               onClick={() => {
               router.push("/Committee#confSecretary");
               if (width < 768) {
               setIsOpen(false);
              }
             }}
            className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
              "/Committee#confSecretary"
           )}`}
            >
             Conference Secretary
           </li>

            <li
              onClick={() => {
                router.push("/Committee#sponsorshipcochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#sponsorshipcochair"
              )}`}
            >
              Sponsorship Chair
            </li>

            {/* <li
              onClick={() => {
                router.push("/Committee#keynotechair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#keynotechair"
              )}`}
            >
              Keynote Chair
            </li>  */}
            {/* <li
              onClick={() => {
                router.push("/Committee#eventmanagechair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#eventmanagechair"
              )}`}
            >
              Event Management Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#eventmanagecochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#eventmanagecochair"
              )}`}
            >
              Event Management Co-Chair
            </li> */}

            {/* <li
              onClick={() => {
                router.push("/Committee#hospitalitychair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#hospitalitychair"
              )}`}
            >
              Hospitality Chair
            </li>*/}
            {/* <li
              onClick={() => {
                router.push("/Committee#academicout");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#academicout"
              )}`}
            >
              Academic Outreach Chair
            </li> */}
            <li
              onClick={() => {
                router.push("/Committee#tpcchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#pubchairs"
              )}`}
            >
              Technical Program Committee Chair
            </li>
            <li
              onClick={() => {
                router.push("/Committee#finchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#finchairs"
              )}`}
            >
              Finance Chair
            </li>

            <li
              onClick={() => {
                router.push("/Committee#pubchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#publchairs"
              )}`}
            >
              Publication Chair
            </li>
            <li
              onClick={() => {
                router.push("/Committee#publchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#publchairs"
              )}`}
            >
              Publicity Chair
            </li>

            {/*<li
              onClick={() => {
                router.push("/Committee#industryintcochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#industryintcochair"
              )}`}
            >
              Industry Interaction Co-Chair
            </li>*/}

            {/* <li
              onClick={() => {
                router.push("/Committee#sponsorshipchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#sponsorshipchair"
              )}`}
            >
              Sponsorship Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#marketingchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#marketingchair"
              )}`}
            >
              Marketing Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#socialmdchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#socialmdchair"
              )}`}
            >
              Social Media Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#websitechair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#websitechair"
              )}`}
            >
              Website Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#workshopchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#workshopchair"
              )}`}
            >
              Workshop Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#workshopcochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#workshopcochair"
              )}`}
            >
              Workshop Co-Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#regchair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#regchair"
              )}`}
            >
              Registration Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#regcochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#regcochair"
              )}`}
            >
              Registration Co-Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#localarrangechair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#localarrangechair"
              )}`}
            >
              Local Arrangements Chair
            </li> */}
            {/* <li
              onClick={() => {
                router.push("/Committee#localarrangecochair");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#localarrangecochair"
              )}`}
            >
              Local Arrangements Co-Chair
            </li> */}

            <li
              onClick={() => {
                router.push("/Committee#executiveCommittee");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#executiveCommittee"
              )}`}
            >
              Executive Committee
            </li>

            <li
              onClick={() => {
                router.push("/Committee#advisoryCommittee");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#advisoryCommittee"
              )}`}
            >
              Advisory Committee
            </li>

            <li
              onClick={() => {
                router.push("/Committee#technicalProgramCommittee");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#technicalProgramCommittee"
              )}`}
            >
              Technical Program Committee
            </li>

            {/* <li
              onClick={() => {
                router.push("/Committee#pubchairs");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#pubchairs"
              )}`}
            >
              Publication Co-Chair
            </li> */}

            <li
              onClick={() => {
                router.push("/Committee#youngProfessionals");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#youngProfessionals"
              )}`}
            >
              Young Professionals
            </li>
            <li
              onClick={() => {
                router.push("/Committee#womenInEngineering");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#womenInEngineering"
              )}`}
            >
              Women In Engineering
            </li>
            <li
              onClick={() => {
                router.push(
                  "/Committee#SpecialInterestGroupOnHumanitarianTechnology"
                );
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#SpecialInterestGroupOnHumanitarianTechnology"
              )}`}
            >
              Special Interest Group On Humanitarian Technology
            </li>
            <li
              onClick={() => {
                router.push("/Committee#studentActivity");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#studentActivity"
              )}`}
            >
              Student Activity
            </li>
            <li
              onClick={() => {
                router.push("/Committee#studentCoodinator");
                if (width < 768) {
                  setIsOpen(false);
                }
              }}
              className={`p-1 pl-2 cursor-pointer rounded-md hover:bg-purple-200 ${isActiveTab(
                "/Committee#studentCoodinator"
              )}`}
            >
              Student Co-ordinator
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default CommitteeSidebar;
