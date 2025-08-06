import React from "react";
import SponsorFix from "../components/SponsorFix";

const Accommodation = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <section
        id="venue"
        className="text-gray-600 body-font relative mx-6 pb-16 "
      >
        <div className=" px-0 sm:px-5 py-2 mt-8 md:mx-4 lg:mx-12 ">
          <div className="mt-8 pb-4 flex flex-col items-center justify-center">
            <h1 className="title-font text-center font-bold text-3xl sm:text-4xl  text-gray-900 border-b-4 border-blue-500 pb-1 md:pb-2">
              Venue
            </h1>
          </div>
          <div className="w-full h-[400px] md:h-[580px] bg-gray-300 rounded-lg overflow-hidden  p-10 flex items-end justify-start relative ">
            <iframe
              width="100%"
              height="100%"
              className="absolute inset-0 contrast-125  grayscale-0 brightness-75"
              frameBorder="0"
              title="map"
              marginHeight="0"
              marginWidth="0"
              scrolling="no"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.630879498129!2d81.86363567520296!3d25.493047722149165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3985323dfd8c5e9d%3A0xf0de3a2730b4d24f!2sMotilal%20Nehru%20National%20Institute%20of%20Technology%20(MNNIT)%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211004!5e0!3m2!1sen!2sin!4v1717886560000!5m2!1sen!2sin"
            ></iframe>
            <div className="bg-white hover:bg-gray-50 relative py-6 rounded shadow-lg ">
              <div className=" px-6">
                <h2 className="title-font text-base font-bold text-gray-900 tracking-widest">
                  ADDRESS
                </h2>
                <p className="mt-1 font-medium text-gray-900">
                  MNNIT Allahabad, U.P. India{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <SponsorFix /> */}
    </div>
  );
};

export default Accommodation;