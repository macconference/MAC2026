import React, { useState, useEffect } from "react";
import gradients from "../../styles/customGradient.module.css";
import ProfileCard from "../../components/ProfileCard";
import Accordion from "../../components/Accordion";
import {
  cheifpatrons,
  advisorycommittee,
  patrons,
  honChairs,
  genChairs,
  GeneralCoChair,
  ProgramChair,
  FinChairs,
  PublicationChair,
  OrgChair,
  KeynoteChair,
  EventManagementChair,
  EventManagementCoChair,
  HospitalityChair,
  IndustryInteractionChair,
  IndustryInteractionCoChair,
  AcademicOutreachChair,
  SponsorshipChair,
  SponsorshipCoChair,
  MarketingChair,
  SocialMediaChair,
  WebsiteChair,
  WorkshopChair,
  WorkshopCoChair,
  RegistrationChair,
  RegistrationCoChair,
  LocalArrangementsChair,
  LocalArrangementsCoChair,
  TPC,
  PublicityChairs,
  PublicityCoChair,
  execCommittee,
  InternationalChair,
  InvitedTalks,
  youngProfessional,
  womenInEngineering,
  mentorMentee
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

  // Helper function to render sections only if they have data
  const renderSection = (data, title, id) => {
    if (!data || data.length === 0) return null;
    
    return (
      <div>
        <div id={id} className="h-20 mb-16 md:mb-0"></div>
        <h1 className="mb-6 text-xl md:text-3xl font-bold text-center dark:text-blue-100">
          {title}
        </h1>
        <div className="flex gap-8 flex-wrap justify-center items-center">
          {data.map((chair, index) => (
            <ProfileCard
              key={`${chair.fullName}-${index}`}
              fullName={chair.fullName}
              post=""
              profileImage={chair.profileImage || null}
              organisation={chair.organisation}
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <>
      <div className="mt-14 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-blue-900 dark:via-blue-700 dark:to-blue-800 text-black dark:text-blue-100">
        <div className="relative md:flex">
          <CommitteeSidebar
            width={width}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />

          <div className="md:w-[70%] lg:w-[75%] pb-8">
            <div className="mt-2 mx-2 p-8 rounded-box flex flex-col gap-2 items-center">

              {/* Only render sections that have data */}
             
              {renderSection(patrons, "Patrons", "patrons")}
              {renderSection(honChairs, "Honorary Chair", "honchairs")}
              {renderSection(genChairs, "General Chairs", "genchairs")}
              {renderSection(GeneralCoChair, "General Co-Chairs", "gencochair")}
               {renderSection(TPC, "Technical Program Committee Chairs", "TPC")}
              {renderSection(ProgramChair, "Program Chair", "programchairs")}
               {renderSection(FinChairs, "Finance Chair/ Treasurer", "finchairs")}
                {renderSection(advisorycommittee, "Advisory Committee", "advisorycommittee")}
                     {renderSection(execCommittee, "Executive Committee", "execcommittee")}
                {renderSection(PublicationChair, "Publication Chair", "publicationchairs")}
              {renderSection(IndustryInteractionChair, "Industry Outreach Chairs", "industryintchair")}
              {renderSection(AcademicOutreachChair, "Academic Outreach Chairs", "academicoutreach")}
              {renderSection(SponsorshipChair, "Sponsorship Chairs", "sponsorshipchair")}
              {renderSection(SocialMediaChair, "Web and Social Media Chairs", "socialmediachair")}
              {renderSection(PublicityChairs, "Publicity Chairs", "publchairs")}
              {renderSection(InternationalChair, "International Chair", "intchair")}
               {renderSection(InvitedTalks, "Invited Talks & Tutorials", "invchair")}
                {renderSection(youngProfessional, "Young Professionals (YP)", "youngprofessional")}
                 {renderSection(womenInEngineering, "Women in Engineering (WiE)", "womeninengineering")}
                  {renderSection(mentorMentee, "Mentor-Mentee/ Student Activity ", "mentormentee")}


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Committee;
