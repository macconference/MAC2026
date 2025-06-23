import React from "react";

const sessions = [
  {
    time: "11:45 AM - 12:15 PM",
    company: "JV Micronics",
    logo: "/Logo-JV-Micronics.png",
  },
  {
    time: "12:20 PM - 12:50 PM",
    company: "NUMEREGION’s Tarang",
    logo: "/6_Bronze.jpeg",
  },
  {
    time: "12:55 PM - 1:15 PM",
    company: "VVDN Technologies",
    logo: "/vvdn-logo.png",
  },
  {
    time: "1:20 PM - 1:30 PM",
    company: "Mine Instruments Pvt Ltd",
    logo: "/mine-electronics.jpeg",
  },
];

const Workshop = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      {/* Section Heading */}
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12 mb-12">
        <span className="border-b-4 border-blue-500 px-4 pb-4">
          Industry Session / WIE Workshop
        </span>
      </h1>

      {/* Session Description */}
      <div className="text-center px-6 sm:px-12 md:px-32 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
        The <strong>Industry Session / WIE Workshop</strong> is scheduled on{" "}
        <strong>28 June 2025</strong> from <strong>11:45 AM to 1:30 PM</strong>. Representatives
        from four industry partners will present during this session.
      </div>

      {/* Table Section */}
      <div className="flex justify-center">
        <div className="p-1 md:p-4 border-2 border-stone-400 w-full lg:w-3/4 text-[13px] md:text-lg bg-white rounded-lg overflow-x-auto">
          <table className="table-auto w-full text-left">
            <thead className="border-b-4 border-stone-600 bg-stone-300">
              <tr className="h-12">
                <th className="p-2 w-[35%]">Time</th>
                <th className="p-2 w-[65%]">Sponsor</th>
              </tr>
            </thead>
            <tbody className="border-b-4 border-stone-600">
              {sessions.map((session, idx) => (
                <tr key={idx} className="border-b-2 border-stone-400 align-middle">
                  <td className="py-2 px-2">{session.time}</td>
                  <td className="py-2 px-2 flex items-center gap-4">
                    <img
                      src={session.logo}
                      alt={session.company}
                      className="w-12 h-12 object-contain bg-white rounded-md border border-gray-300 p-1"
                    />
                    <span>{session.company}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Note */}
          <div className="mt-6 text-center text-sm md:text-base">
            Timings and order may vary slightly during the event.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workshop;
