/*import React, { useState, useEffect } from "react";
import gradients from "../../styles/customGradient.module.css";
import ProfileCard from "../../components/ProfileCard";
import Accordion from "../../components/Accordion";
import {
  cheifpatrons,
  patrons,
  honChairs,
  genChairs,
  confChairs,
  confSecretary,
  ProgramChair,
  FinChairs,
  PublicChairs,
  OrgChair,
  KeynoteChair,
  EventManagementChair,
  EventManagementCoChair,
  HospitalityChair,
  IndustryInteractionChair,
  IndustryInteractionCoChair,
  AcademicOutreachChair,
  SponsorshipChair,
  MarketingChair,
  SocialMediaChair,
  WebsiteChair,
  WorkshopChair,
  WorkshopCoChair,
  RegistrationChair,
  RegistrationCoChair,
  LocalArrangementsChair,
  LocalArrangementsCoChair,
  SponsorshipCoChair,
  TPC,
  committeeMembers,
  PublicityChairs,
} from "../../data/committee";
import { useScrollLock, useViewportSize } from "@mantine/hooks";
import CommitteeSidebar from "../../components/CommitteeSidebar";
import SponsorFix from "../../components/SponsorFix";

const Committee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const { height, width } = useViewportSize();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(true);
      setScrollLocked(false);
    } else {
      setScrollLocked(false);
    }
  }, [width]);

  return (
    <>
      <div className={`mt-14 ${gradients.homePage} text-black`}>
        <div className="relative md:flex ">
          <CommitteeSidebar
            width={width}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <div className="md:w-[70%] lg:w-[75%] pb-8 ">
            <div className="mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center">
              {/* <div>
                <div id="chiefpatron" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-4 text-xl md:text-3xl font-bold">
                  Chief Patron
                </h1>

                <ProfileCard
                  //title="Dr."
                  fullName="B. K. Das"
                  post="DG (ECS),"
                  organisation="DRDO, India"
                  profileImage="/bkdas.png"
                />
              </div> }
              <div>
                <div id="patron" className="h-20 mb-16 md:mb-0 "></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  Patron
                </h1>
                <div className="flex gap-8 flex-wrap ">
                  {patrons.map((patron) => (
                    <ProfileCard
                      key={patron.fullName}
                      // title={patron.title}
                      fullName={patron.fullName}
                      post=""
                      profileImage={patron.profileImage}
                      organisation={patron.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Commented out "Honorary Chairs" }
              <div>
                <div id="honchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  Honorary Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {honChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
              {/* <div>
                <div id="orgChair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Organizing Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {OrgChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> }
              <div>
                <div id="genchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  General Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {genChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div id="programchairs" className="h-20 mb-16 md:mb-0"></div>
              <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                Program Chair
              </h1>
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {ProgramChair.map((chair) => (
                  <ProfileCard
                    key={chair.fullName}
                    fullName={chair.fullName}
                    post=""
                    profileImage={
                      chair.profileImage ? chair.profileImage : null
                    }
                    organisation={chair.organisation}
                  />
                ))}
              </div>
            </div>

            {/* <div>
                <div id="eventmanagechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Event Management Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {EventManagementChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> }

            {/* <div>
                <div
                  id="eventmanagecochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Event Management Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {EventManagementCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> }

            {/* <div>
                <div id="keynotechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold flex-">
                  {" "}
                  Keynote Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {KeynoteChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

            /* <div>
                <div id="hospitalitychair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Hospitality Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {HospitalityChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

            /* <div>
              <div id="academicout" className="h-20 mb-16 md:mb-0"></div>
              <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                {" "}
                Academic Outreach Chair
              </h1>
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {AcademicOutreachChair.map((chair) => (
                  <ProfileCard
                    key={chair.fullName}
                    // title={chair.title}
                    fullName={chair.fullName}
                    post=""
                    profileImage={
                      chair.profileImage ? chair.profileImage : null
                    }
                    organisation={chair.organisation}
                  />
                ))}
              </div>
            </div> }

            <div>
              <div id="industryintchair" className="h-20 mb-16 md:mb-0"></div>
              <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                {" "}
                Industry Interaction Chair
              </h1>
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {IndustryInteractionChair.map((chair) => (
                  <ProfileCard
                    key={chair.fullName}
                    // title={chair.title}
                    fullName={chair.fullName}
                    post=""
                    profileImage={
                      chair.profileImage ? chair.profileImage : null
                    }
                    organisation={chair.organisation}
                  />
                ))}
              </div>
            </div>

            <div>
              <div id="confchairs" className="h-20 mb-16 md:mb-0"></div>
              <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                Conference Organising Chair
              </h1>
              <div className="flex gap-8 flex-wrap justify-center items-center">
                {confChairs.map((chair) => (
                  <ProfileCard
                    key={chair.fullName}
                    // title={chair.title}
                    fullName={chair.fullName}
                    post=""
                    profileImage={
                      chair.profileImage ? chair.profileImage : null
                    }
                    organisation={chair.organisation}
                  />
                ))}
              </div>

              <div>
                 <div id="confSecretary" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                Conference Secretary
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                {confSecretary.map((sec) => (
                <ProfileCard
                key={sec.fullName}
                fullName={sec.fullName}
                post=""
                profileImage={sec.profileImage ? sec.profileImage : null}
                 organisation={sec.organisation}
                 />
                 ))}
                </div>
              </div>

 
              <div>
                <div
                  id="sponsorshipcochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Sponsorship Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {SponsorshipCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* <div>
                <div
                  id="industryintcochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Industry Interaction Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {IndustryInteractionCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="sponsorshipchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Sponsorship Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {SponsorshipChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="marketingchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Marketing Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {MarketingChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="socialmdchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Social Media Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {SocialMediaChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="websitechair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Website Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WebsiteChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="workshopchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Workshop Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WorkshopChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="workshopcochair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Workshop Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {WorkshopCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /*               
              <div>
                <div id="regchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Registration Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {RegistrationChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */

              /* <div>
                <div id="regcochair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Registration Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {RegistrationCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */
              /* <div>
                <div
                  id="localarrangechair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Local Arrangements Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {LocalArrangementsChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> */
              /* <div>
                <div
                  id="localarrangecochair"
                  className="h-20 mb-16 md:mb-0"
                ></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold">
                  {" "}
                  Local Arrangements Co-Chair
                </h1>
                <div className="flex gap-8 flex-wrap">
                  {LocalArrangementsCoChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div> }
              <div>
                <div id="tpcchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Technical Program Committee Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {TPC.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div id="finchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Finance Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {FinChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              <div>
                <div id="pubchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Publication Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {PublicChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
              <div>
                <div id="publchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center">
                  {" "}
                  Publication Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {PublicityChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      // title={chair.title}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>
              {committeeMembers.map((committee) => (
                <div id={committee.name} key={committee.name}>
                  <div className="md:w-[100%] pb-8 mt-4">
                    <div className="mx-3 md:mx-4">
                      <Accordion
                        heading={committee.title}
                        memberdata={committee.data}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* <SponsorFix /> }
      </div>
    </>
  );
};

export default Committee;*/

import React, { useState, useEffect } from "react";
import gradients from "../../styles/customGradient.module.css";
import ProfileCard from "../../components/ProfileCard";
import Accordion from "../../components/Accordion";
import {
  honChairs,
  genChairs,
  IndustryInteractionChair,
  confChairs,
  ProgramChair,
  TPC,
  FinChairs,
  PublicityChairs,
  // If using PublicationChairs, import accordingly
  // PublicationChairs,
} from "../../data/committee";
import { useScrollLock, useViewportSize } from "@mantine/hooks";
import CommitteeSidebar from "../../components/CommitteeSidebar";
// import SponsorFix from "../../components/SponsorFix";

const Committee = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollLocked, setScrollLocked] = useScrollLock(false);
  const { height, width } = useViewportSize();

  useEffect(() => {
    if (width > 768) {
      setIsOpen(true);
      setScrollLocked(false);
    } else {
      setScrollLocked(false);
    }
  }, [width]);

  return (
    <>
      <div className="mt-14 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-800 text-black dark:text-blue-100">
        <div className="relative md:flex ">
          <CommitteeSidebar
            width={width}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <div className="md:w-[70%] lg:w-[75%] pb-8 ">
            <div className="mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center">

              {/* Honorary Chair */}
              <div>
                <div id="honchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Honorary Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {honChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* General Chair */}
              <div>
                <div id="genchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  General Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {genChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Industry Interaction Chair */}
              <div>
                <div id="industryintchair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Industry Interaction Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {IndustryInteractionChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Conference Organising Chair */}
              <div>
                <div id="confchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Conference Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {confChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Program Chair */}
              <div>
                <div id="programchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Program Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {ProgramChair.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={
                        chair.profileImage ? chair.profileImage : null
                      }
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Technical Program Committee Chair */}
              <div>
                <div id="tpcchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Technical Program Committee Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {TPC.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Finance Chair */}
              <div>
                <div id="finchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Finance Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {FinChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* Publication Chair */}
              <div>
                <div id="pubchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Publication Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {PublicityChairs.map((chair) => (
                    <ProfileCard
                      key={chair.fullName}
                      fullName={chair.fullName}
                      post=""
                      profileImage={chair.profileImage}
                      organisation={chair.organisation}
                    />
                  ))}
                </div>
              </div>

              {/* 
                // All other chair/role sections are commented out below!
                // To restore any, just uncomment. 
              */}

            </div>
          </div>
        </div>
        {/* <SponsorFix /> */}
      </div>
    </>
  );
};

export default Committee;
