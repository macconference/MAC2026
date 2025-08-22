import React from "react";
import gradients from "../styles/customGradient.module.css";
import cool from "../styles/track.module.css";
import SponsorFix from "../components/SponsorFix";
import Sponsors from "../components/Sponsors";
import SponsorSlider from "../components/sponserSlider";

const Sponsor = () => {
  return (
    <div
      className={`py-20 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-black dark:text-gray-100`}
      style={{ fontFamily: "Cambria" }}
    >
      <div className="mt-6 p-2">
        <h2 className="text-center text-2xl md:text-3xl font-extrabold dark:text-gray-100">
          <span className="border-b-4 border-orange-400 dark:border-orange-400 pb-2 px-2 md:px-8">
            Welcome
          </span>
        </h2>
        <div
          className="p-2 pt-8 lg:text-lg lg:px-16"
          style={{ fontSize: "20px" }}
        >
          <p className="text-justify dark:text-gray-200">
            On behalf of the Executive Committee of MAC 2026, it is my great pleasure to invite you to be
            a valued sponsor at the event. We believe that your organization has the expertise and
            resources to make a significant contribution to the success of MAC 2026. We offer a variety of
            sponsorship levels, including Spotlight, Diamond, Platinum, Gold, Silver, and Start-UPs tiers.
            Each level provides unique benefits tailored to your specific marketing objectives. Looking
            forward to see you in the MAC 2026, at MNNIT Allahabad, Uttar Pradesh, India.
          </p>

          {/* ------ SPONSORSHIP TIERS SECTION ADDED HERE ------- */}
          <div
            className="my-8 p-6 rounded-lg shadow-xl dark:shadow-gray-900/50"
            style={{
              background: "linear-gradient(135deg, #eef2fb 0%, #c7e0fa 100%)",
              color: "#122044",
              fontFamily: "Cambria, Segoe UI, Arial, sans-serif",
            }}
          >
            <h2 className="text-center text-2xl md:text-3xl font-bold mb-6" style={{ color: "#1d4ed8" }}>
              MAC 2026 Sponsorship Tiers & Benefits
            </h2>
            {/* 🆕 UPDATED: Smaller, more responsive sponsors image */}
            <div className="mt-6 flex justify-center px-4">
              <img
                src="/sponser.png"
                alt="MAC 2026 Sponsors"
                className="w-full max-w-lg sm:max-w-xl md:max-w-2xl h-auto dark:opacity-90"
              />
            </div>
            <div className="flex flex-wrap gap-6 justify-center">
              {/* Signature Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white dark:bg-gray-800 border-l-8 border-pink-600 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#de2455" }}>
                  Signature Sponsor <span className="text-blue-700 font-bold"></span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md dark:text-gray-300">
                  <li>Ten Complimentary delegate passes</li>
                  <li>Twenty-minute Banquet Keynote presentation</li>
                  <li>One hour dedicated workshop slot</li>
                  <li>Acknowledgement during Inaugural, Awards, Banquet &amp; Valedictory functions</li>
                  <li>Exhibit booth at Ultra Prime Location</li>
                </ul>
              </div>
              {/* Platinum Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white dark:bg-gray-800 border-l-8 border-purple-700 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#a04fbe" }}>
                  Platinum Sponsor <span className="text-blue-700 font-bold"></span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md dark:text-gray-300">
                  <li>Five Complimentary delegate passes</li>
                  <li>Fifteen-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth at Prime Location</li>
                </ul>
              </div>
              {/* Diamond Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white dark:bg-gray-800 border-l-8 border-orange-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#f17839" }}>
                  Diamond Sponsor <span className="text-blue-700 font-bold"></span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md dark:text-gray-300">
                  <li>Four Complimentary delegate passes</li>
                  <li>Ten-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth at Prime Location</li>
                </ul>
              </div>
              {/* Gold Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white dark:bg-gray-800 border-l-8 border-yellow-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#eeb427" }}>
                  Gold Sponsor <span className="text-blue-700 font-bold"></span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md dark:text-gray-300">
                  <li>Three Complimentary delegate passes</li>
                  <li>Five-minute presentation slot</li>
                  <li>Acknowledgement during Awards &amp; Valedictory functions</li>
                  <li>Exhibit booth</li>
                </ul>
              </div>
              {/* Silver Sponsor */}
              <div className="flex-1 min-w-[270px] max-w-xs bg-white dark:bg-gray-800 border-l-8 border-blue-500 rounded-md px-6 py-4 shadow hover:shadow-lg transition">
                <h3 className="text-lg font-semibold mb-2" style={{ color: "#5581c9" }}>
                  Silver Sponsor <span className="text-blue-700 font-bold"></span>
                </h3>
                <ul className="list-disc list-inside space-y-1 text-md dark:text-gray-300">
                  <li>Two Complimentary delegate passes</li>
                  <li>Two-minute pre-recorded video presentation</li>
                  <li>Acknowledgement during Valedictory function</li>
                  <li>Exhibit booth</li>
                  <li className="font-medium text-pink-800 dark:text-pink-400">Exclusive: Fifteen-minute interaction session for Startups</li>
                </ul>
              </div>
            </div>

            {/* Shared Benefits */}
            <div className="mt-8 bg-indigo-50 dark:bg-gray-700 rounded p-4">
              <h4 className="font-bold text-pink-700 dark:text-pink-400 mb-2">All Sponsors Receive:</h4>
              <ul className="list-disc list-inside dark:text-gray-300">
                <li>Prominent display of Name/Logo on printed materials, event backdrops, and the official website.</li>
                <li>Company brochure placement in registration kit.</li>
              </ul>
            </div>
          </div>
          {/* ------ END SPONSORSHIP TIERS SECTION ------- */}

          <br />
          <br />
          <p className="text-center italic dark:text-gray-200">
            Looking forward to seeing you in the MAC 2026, at Prayagraj.
          </p>
        </div>
      </div>

      <div>
        <SponsorSlider />

        <div
          className={`text-center mt-8 bg-stone-100 dark:bg-gray-800 shadow-inner rounded-lg ${cool.coolHover}`}
        >
        </div>

        <div
          className={`text-center mt-8 bg-stone-100 dark:bg-gray-800 shadow-inner rounded-lg ${cool.coolHover}`}
        >
        </div>

        <div
          className={` text-center mt-8 bg-stone-100 dark:bg-gray-800 shadow-inner rounded-lg ${cool.coolHover}`}
        >
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
