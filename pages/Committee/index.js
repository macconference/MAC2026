import React, { useState, useEffect } from "react";
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

              {/* Program Chair - MOVED TO CORRECT POSITION */}
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
                  Conference Organising Chair
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

              {/* Conference Secretary */}
              <div>
                <div id="confSecretary" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
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

              {/* Sponsorship Chair */}
              <div>
                <div id="sponsorshipcochair" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Sponsorship Chair
                </h1>
                <div className="flex gap-8 flex-wrap justify-center items-center">
                  {SponsorshipCoChair.map((chair) => (
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
                  {PublicChairs.map((chair) => (
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

              {/* Publicity Chair
              <div>
                <div id="publchairs" className="h-20 mb-16 md:mb-0"></div>
                <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
                  Publicity Chair
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
              </div> */}

              {/* Committee Members - FIXED STRUCTURE */}
              {committeeMembers.map((committee) => (
                <div id={committee.name} key={committee.name} className="w-full">
                  <div className="h-20 mb-16 md:mb-0"></div>
                  
                  <div className="w-full max-w-4xl mx-auto">
                    <Accordion
                      heading={committee.title}
                      memberdata={committee.data}
                    />
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;