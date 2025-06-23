import React from "react";

const Schedule = () => {
  return (
    <section
      id="venue"
      className="text-gray-600 body-font relative mx-4 sm:mx-6 md:mx-12 pb-16"
    >
      <div className="px-0 sm:px-5 py-2 mt-8">
        {/* Heading */}
        <div className="mt-8 pb-4 flex flex-col items-center justify-center">
          <h1 className="title-font text-center font-bold text-3xl sm:text-4xl text-gray-100 border-b-4 border-blue-500 pb-2">
            Conference Schedule
          </h1>
        </div>

        {/* Image of the schedule */}
        <div className="w-full flex justify-center">
          <img
            src="/MAC_2025_Schedule[1]updated[1]-1.png"
            alt="Conference Schedule"
            className="rounded-lg w-full max-w-4xl shadow-lg"
          />
        </div>

        {/* Download Button */}
        <div className="flex justify-center mt-10">
          <a
            href="/MAC_2025_Schedule[1]updated[1].pdf"
            download
            className="w-[70%] sm:w-[40%] md:w-[20%] text-white bg-orange-400 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-4 py-2 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 transition"
          >
            Download Conference Schedule
          </a>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
