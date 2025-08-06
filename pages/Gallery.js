import React from "react";
import SponsorFix from "../components/SponsorFix";

const Gallery = () => {
  return (
    <div className="mt-14 py-8 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 text-black">
      <h1 class="flex justify-center text-4xl font-bold text-blue-600 p-2 m-2">
        Glimpse of MAC2023 at MNNIT Allahabad
      </h1>

      <div className="py-10 md:py-8 justify-center mx-auto max-w-screen-lg px-2 pt-8">
        <div className="w-full flex justify-center">
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_4923.JPG"
            alt=""
          />
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 py-4 md:py-8 flex-wrap">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_4870.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_4862.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_4895.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_4923.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5076.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5130.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5189.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5171.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5187.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5192.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5460.JPG"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="DSC_5461 (1).JPG"
            alt=""
          />
        </div>
      </div>
      {/* <SponsorFix /> */}
    </div>
  );
};

export default Gallery;
