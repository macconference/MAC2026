import React from "react";
import HomeImageGallery from "./HomeImageGallery";
import { MdLocationOn } from "react-icons/md";
import { BsFillCalendarCheckFill } from "react-icons/bs";
import { useRouter } from "next/router";
import Map from "./Map";
import Link from "next/link";
import Sponsors from "../components/Sponsors";
import Sponsors2 from "./Sponsor2";

const HomeMain = () => {
  const router = useRouter();

  const navigate = (dest) => {
    router.push(dest);
  };

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200">
        {/* Hero Section */}
        <div className="relative h-[70vh] md:h-[90vh] mt-[80px] overflow-hidden">
          <HomeImageGallery />

          {/* Transparent Text on Image */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col lg:flex-row items-center justify-center text-center lg:text-left px-4 sm:px-12 z-10 gap-8">
            {/* Left Content */}
            <div className="w-full lg:w-[65%] flex flex-col gap-6 items-center lg:items-start">
              <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-5xl text-blue-50 leading-tight max-w-5xl">
                4th International Conference on <br />
                Microwave, Antenna and Communication 2026
              </h1>

              <div className="flex flex-col sm:flex-row sm:gap-10 gap-4 mt-4 text-white font-medium items-center lg:items-start">
                <div className="flex items-center gap-3">
                  <Link href="/registration">
                    <span className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                      <BsFillCalendarCheckFill className="w-5 h-5 text-lime-300" />
                    </span>
                  </Link>
                  <span className="text-sm sm:text-base">
                    October 23-25, 2026
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <Link href="/#venue">
                    <span className="bg-white/30 backdrop-blur-sm p-3 rounded-full">
                      <MdLocationOn className="w-6 h-6 text-blue-300" />
                    </span>
                  </Link>
                  <span className="text-sm sm:text-base">
                    MNNIT Allahabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="w-full sm:w-[60%] md:w-[40%] lg:w-[30%] flex flex-col items-center gap-4">
              <a
                href="#"
                download
                className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center"
              >
                Call For Papers <br />
                (Announcing soon)
              </a>
              <a
                href=""
                className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center"
              >
                Submit Papers <br />
                (Announcing soon)
              </a>
              <Link href="/registration">
                <span className="w-[80%] sm:w-[60%] text-blue-900 bg-white/80 hover:bg-orange-400 font-semibold rounded-full text-sm md:text-base px-5 py-2.5 text-center cursor-pointer">
                  Registration <br />
                  (Announcing soon)
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* About Section */}
        <section className="py-12 px-6">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="md:w-1/2 text-blue-900">
              <h1 className="text-4xl md:text-6xl font-bold border-b-4 border-cyan-600 pb-4 mb-4">
                <span className="text-orange-500">MAC</span>2026
              </h1>
              <h2 className="text-lg font-semibold mb-2">Organised By</h2>
              <p className="text-xl font-bold text-orange-600">
                DEPARTMENT OF ELECTRONICS AND COMMUNICATION ENGINEERING,
MNNIT ALLAHABAD
              </p>
              <p className="mt-6 leading-relaxed text-lg text-justify font-medium">
                Welcome to the 4th International Conference on Microwave, Antenna, and Communication (MAC2026)! Join us in the scenic city of Prayagraj, Uttar Pradesh, India, from October 23-24, 2026, for
an enriching experience of knowledge, research and innovation. 
MAC 2026 is being organized Department of Electronics and Communication Engineering, MNNIT
Allahabad. MAC-2026 serves as a dynamic platform, bringing together researchers,
academicians, industry professionals, and startups to showcase their cutting-edge research,
share innovative ideas, and explore the emerging trends of Microwave, Antenna and
Communication technologies. The conference will feature keynote speeches, invited talks, panel
discussions, technical sessions, poster presentations and exhibitions. MAC-2026 is an opportunity
to you for collaboration and networking with international experts. We invite you to join us at MAC2026 and be a part of this exciting event!
              </p>
            </div>
            <div className="md:w-1/2">
              <img src="/conf.webp" alt="conference" className="w-full rounded-xl shadow-lg" />
            </div>
          </div>
        </section>

        {/* Call for Papers */}
        <section id="callforpaper" className=" px-6 py-12">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 px-10 order-last md:order-first">
              <img src="/hp.png" alt="Call for Papers" />
            </div>
            <div className="md:w-1/2 text-blue-900">
              <h1 className="text-4xl lg:text-6xl font-bold border-b-4 border-cyan-600 pb-4 mb-4">
                Call For Papers <br />
                (Announcing soon)
              </h1>
              <h2 className="text-orange-600 font-bold text-xl mb-6">
                MICROWAVE , ANTENNA AND COMMUNICATION
              </h2>
              <p className="text-lg font-medium mb-6">
               The accepted and presented papers of the conference by duly registered authors will be submitted to IEEE Xplore Digital Library for possible publication after quality check.
              </p>

              <p className="text-lg font-medium mb-4">
                  The technical sessions will have four tracks covering recent
                  and emerging research topics in the field of Microwave,
                  Antenna and Communication. Every track will have the following
                  events:
                </p>
              <ul className="pl-6 list-disc space-y-2 text-lg font-semibold">
                <li>Paper Presentations and Best Paper Awards</li>
                <li>Keynote Lectures</li>
                <li>Special Sessions</li>
                <li>Panel Discussions</li>
                <li>Technical/Industrial Workshops</li>
              </ul>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold mb-2">Submission Link</h3>
                <p className="text-lg mb-2">To be submitted via Microsoft CMT:</p>
                <a
                  href="https://cmt3.research.microsoft.com/MAC2025/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-700 underline hover:text-rose-500"
                >
                  To be announced soon
                </a>
                <br/>
                <h2 className="font-medium">* The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.</h2>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <Map />

        {/* Sponsors Sections */}
        <section className="p-6">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-2xl text-blue-900 md:text-4xl font-bold border-b-4 pb-4 border-cyan-600 w-full md:w-[60%] mb-4">
              Technical Co-Sponsors
            </h1>
            <Sponsors />
          </div>
        </section>

        <section className="p-6">
          <div className="container mx-auto flex flex-col">
            <h1 className="text-2xl text-blue-900  md:text-4xl font-bold border-b-4 pb-4 border-cyan-600 w-full md:w-[60%] mb-4">
              Industrial Sponsors
            </h1>
            <Sponsors2 />
          </div>
        </section>
      </div>
    </>
  );
};

export default HomeMain;
