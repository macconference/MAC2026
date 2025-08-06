import React from "react";
import gradients from "../styles/customGradient.module.css";
import cool from "../styles/track.module.css";
import SponsorFix from "../components/SponsorFix";
import Sponsors from "../components/Sponsors";
import SponsorSlider from "../components/sponserSlider";

const Sponsor = () => {
  return (
    <div
      className={`py-20 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 text-black`}
      style={{ fontFamily: "Cambria" }}
    >
      <div className="mt-6 p-2">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold">
          <span className="border-b-4 border-orange-400 pb-2 px-2 md:px-8">
            Welcome
          </span>
        </h2>
        <div
          className="p-2 pt-8 lg:text-lg lg:px-16"
          style={{ fontSize: "20px" }}
        >
          <p className="text-justify">
            On behalf of the Executive Committee of MAC 2026, it is my great pleasure to invite you to be
            a valued sponsor at the event. We believe that your organization has the expertise and
            resources to make a significant contribution to the success of MAC 2026. We offer a variety of
            sponsorship levels, including Spotlight, Diamond, Platinum, Gold, Silver, and Start-UPs tiers.
            Each level provides unique benefits tailored to your specific marketing objectives. Looking
            forward to see you in the MAC 2026, at MNNIT Allahabad, Uttar Pradesh, India.
          </p>

          {/* ------ SPONSORSHIP TIERS SECTION ADDED HERE ------- */}
          <div
            className="my-8 p-6 rounded-lg shadow-xl"
            style={{
              background: "linear-gradient(135deg, #eef2fb 0%, #c7e0fa 100%)",
              color: "#122044",
              fontFamily: "Cambria, Segoe UI, Arial, sans-serif",
            }}
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1d4ed8" }}>
              MAC 2026 Sponsorship Tiers & Benefits
            </h2>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Signature Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white border-l-8 border-pink-600 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#de2455" }}>
                  Signature Sponsor <span className="text-blue-700 font-bold">INR 3.0 Lakh</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>Ten Complimentary delegate passes</li>
                  <li>Twenty-minute Banquet Keynote presentation</li>
                  <li>One hour dedicated workshop slot</li>
                  <li>Acknowledgement during Inaugural, Awards, Banquet &amp; Valedictory functions</li>
                  <li>Exhibit booth at Ultra Prime Location</li>
                </ul>
              </div>
              {/* Platinum Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white border-l-8 border-purple-700 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#a04fbe" }}>
                  Platinum Sponsor <span className="text-blue-700 font-bold">INR 2.0 Lakh</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>Five Complimentary delegate passes</li>
                  <li>Fifteen-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth at Prime Location</li>
                </ul>
              </div>
              {/* Diamond Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white border-l-8 border-orange-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#f17839" }}>
                  Diamond Sponsor <span className="text-blue-700 font-bold">INR 1.5 Lakh</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>Four Complimentary delegate passes</li>
                  <li>Ten-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth at Prime Location</li>
                </ul>
              </div>
              {/* Gold Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white border-l-8 border-yellow-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#eeb427" }}>
                  Gold Sponsor <span className="text-blue-700 font-bold">INR 1.0 Lakh</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>Three Complimentary delegate passes</li>
                  <li>Five-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth</li>
                </ul>
              </div>
              {/* Silver Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white border-l-8 border-blue-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#5581c9" }}>
                  Silver Sponsor <span className="text-blue-700 font-bold">INR 50 Thousand</span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md">
                  <li>Two Complimentary delegate passes</li>
                  <li>Two-minute pre-recorded video presentation</li>
                  <li>Acknowledgement during Valedictory function</li>
                  <li>Exhibit booth</li>
                  <li className="font-medium text-pink-800">Exclusive: Fifteen-minute interaction session for Startups</li>
                </ul>
              </div>
            </div>
            {/* Shared Benefits */}
            <div className="mt-8 bg-indigo-50 rounded p-4">
              <h4 className="font-bold text-pink-700 mb-2">All Sponsors Receive:</h4>
              <ul className="list-disc list-inside">
                <li>Prominent display of Name/Logo on printed materials, event backdrops, and the official website.</li>
                <li>Company brochure placement in registration kit.</li>
              </ul>
            </div>
          </div>
          {/* ------ END SPONSORSHIP TIERS SECTION ------- */}

          <br />
          {/* <p className="text-justify">
            We offer a variety of sponsorship levels, including{" "}
            <span className="font-semibold">
              Spotlight, Diamond, Platinum, Gold, Silver, and Start-UPs
            </span>{" "}
            tiers. Each level provides unique benefits tailored to your specific
            marketing objectives.
          </p> */}
          <br />
          <p className="text-center italic">
            Looking forward to seeing you in the MAC 2026, at Prayagraj.
          </p>
        </div>
      </div>
      <div className="mt-6 p-2 flex justify-center">
        <img
          src="/Industry-2.png" // Update with your actual image path
          alt="Sponsorship Levels"
          className="w-full max-w-screen-lg h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* <div className="mt-6 p-2">
        <h1 className="font-extrabold text-2xl md:text-3xl text-center">
          <span
            className=" border-b-4  px-0 md:px-8 pb-2"
            style={{ borderColor: "#0000FF" }}
          >
            Level Of <span style={{ color: "#0000FF" }}>Sponsorships</span>
          </span>
        </h1>

        <div className="lg:px-16 flex flex-col items-center">
          <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
            <h2 className="text-xl lg:text-2xl font-bold p-2">
              <span style={{ color: "#0000FF" }}>Organizing</span> Partner:{" "}
              <span style={{ color: "#0000FF" }}>INR 3.0 Lakh</span>
            </h2>
            <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
              <li>
                Elevate your brand become Partner with Institutes of National
                Importance
              </li>
              <li>
                Be seen by the leaders you want to meet & Get prominent
                recognition.
              </li>
              <li>
                Network with key decision-makers with 10 Complimentary passes.
              </li>
              <li>
                Shine a spotlight on your contributions during Key Events.
              </li>
              <li>
                Maximize your brand exposure by displaying of your Name/Logo on
                all printed materials, backdrop, and website.
              </li>
            </ul>
          </div>

          <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Signature</span> sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 2.5 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>10 Complimentary delegate passes</li>
                <li>
                  20 minutes Banquet Keynote presentation slot and 1 Hour
                  Workshop Slot
                </li>
                <li>
                  Acknowledgement during Inaugural, Awards, Banquet and
                  Valedictory functions
                </li>
                <li>Complimentary exhibit booths at Ultra Prime Location</li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>

            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Diamond</span> sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 2.0 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>5 Complimentary delegate passes</li>
                <li>15 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>Complimentary exhibit booths at Prime Location</li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Platinum</span> sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 1.5 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>4 Complimentary delegate passes</li>
                <li>10 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>Complimentary exhibit booths at Prime Location</li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Gold</span> sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 1.0 Lakh</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>3 Complimentary delegate passes</li>
                <li>5 minutes presentation slot</li>
                <li>Acknowledgement during Awards and Valedictory functions</li>
                <li>Complimentary exhibit booths </li>
                <li>
                  Prominent display of logo on all printed material, backdrop
                  and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>
          </div>
          <div className={`px-2 card shadow-xl mt-8 pt-4 ${cool.coolHover}`}>
            <h2 className="text-xl lg:text-2xl font-bold p-2">
              <span style={{ color: "#0000FF" }}>Silver</span> sponsor:{" "}
              <span style={{ color: "#0000FF" }}>INR 50 Thousand</span>
            </h2>
            <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
              <li>2 Complimentary delegate passes</li>
              <li>2 minutes pre-recorded video presentation slot</li>
              <li>Acknowledgement during Valedictory functions</li>
              <li>Complimentary exhibit booth</li>
              <li>
                Display of logo on all printed material, backdrop and website
              </li>
              <li>Permission to keep Company brochure in registration Kit</li>
              <li>
                15-minute Interaction Session slot especially for Start-UPs
              </li>
            </ul>
          </div>
          <div className="w-full flex flex-col lg:flex-row gap-8 justify-between">
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Silver</span> sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 50 Thousand</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>2 Complimentary delegate passes</li>
                <li>2 minutes pre-recorded video presentation slot</li>
                <li>Acknowledgement during Valedictory functions</li>
                <li>Complimentary exhibit booth</li>
                <li>
                  Display of logo on all printed material, backdrop and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
                <li>
                  15-minute Interaction Session slot especially for Start-UPs
                </li>
              </ul>
            </div>
            <div
              className={`px-2 card lg:w-[50%] shadow-xl mt-8 pt-4 ${cool.coolHover}`}
            >
              <h2 className="text-xl lg:text-2xl font-bold p-2">
                <span style={{ color: "#0000FF" }}>Bronze</span> Sponsor:{" "}
                <span style={{ color: "#0000FF" }}>INR 50 Thousand</span>
              </h2>
              <ul className="list-disc pl-4 lg:px-8 lg:pb-6 py-4 text-md lg:text-lg">
                <li>1 Complimentary delegate passes</li>
                <li>2 minutes pre-recorded video presentation slot</li>
                <li>Acknowledgement during Valedictory functions </li>
                <li>Complimentary exhibit booth</li>
                <li>
                  Display of logo on all printed material, backdrop and website
                </li>
                <li>Permission to keep Company brochure in registration Kit</li>
              </ul>
            </div>
          </div>
        </div>
      </div> */}
      <div>
        <SponsorSlider />

        {/* <div
          className={`mt-16 bg-stone-100 shadow-inner rounded-lg flex flex-col justify-center items-center ${cool.coolHover}`}
        >
          <h1 className="text-center font-extrabold text-2xl tracking-wide leading-relaxed md:text-3xl pt-2 text-cyan-600">
            Platinum
          </h1>
          <img
            src="/serb.webp"
            alt="logo"
            className="text-center px-4 pb-8 md:pb-12 pt-2 md:pt-6 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
          />
          <p className="px-2 text-center text-xl md:text-2xl font-semibold pb-4">
            Science and Engineering Research Board, DST, GOI
          </p>
        </div> */}

        <div
          className={`text-center mt-8 bg-stone-100 shadow-inner rounded-lg ${cool.coolHover}`}
        >
          {/* <h2>*Will be announced soon</h2>
          <div className="inline-flex ">
            <h1 className="text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
              Gold{" "}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex flex-col items-center">
              <img
                src="/Logo-JV-Micronics.png"
                alt="logo"
                className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                JV Micronics
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/apc.png"
                alt="logo"
                className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                APC Technologies
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/SciMic.png"
                alt="logo"
                className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                Scientific Microwave
              </p>
            </div>
          </div> */}
        </div>

        <div
          className={`text-center mt-8 bg-stone-100 shadow-inner rounded-lg ${cool.coolHover}`}
        >
          {/* <div className="inline-flex ">
            <h1 className=" text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
              Silver{" "}
            </h1>
          </div>
          <div className=" flex flex-col md:flex-row justify-around items-center ">
            <div>
              <img
                src="/agmatel.png"
                alt="logo"
                className="w-80 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform over:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                Agmatel
              </p>
            </div>
          </div> */}
        </div>

        <div
          className={` text-center mt-8 bg-stone-100 shadow-inner rounded-lg ${cool.coolHover}`}
        >
          {/* <div className="inline-flex ">
            <h1 className="text-center font-extrabold text-3xl tracking-wide leading-relaxed md:text-4xl pt-2 text-cyan-600">
              Bronze{" "}
            </h1>
          </div>
          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="flex flex-col items-center">
              <img
                src="/electro.png"
                alt="logo"
                className="w-40 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                Icon Electromatic Private Limited
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/6_Bronze.jpeg"
                alt="logo"
                className="w-40 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                NUMEREGION&apos;s TaraNG
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/bronze_logo_1.jpeg"
                alt="logo"
                className="w-40 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                Mmrfic technology pvt ltd
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/bronze_logo_2.jpeg"
                alt="logo"
                className="w-40 text-center px-4 pb-8 md:pb-12 pt-2 md:pt-8 ease-in-out transition transform hover:-translate-y-1 hover:scale-110 md:hover:scale-125 duration-700 delay-75"
              />
              <p className="text-xl md:text-2xl font-semibold -mt-8 pb-4">
                Synergy telecom pvt ltd
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
