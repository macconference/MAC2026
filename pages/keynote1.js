import React from "react";

/* 
const keynotes = [
  // ... your keynotes array ...
];

const KeynoteSchedule = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12 mb-16">
        <span className="border-b-4 border-blue-500 px-4 pb-4">Keynote Schedule</span>
      </h1>

      <div className="text-center">
        <div className="flex justify-center mt-4">
          <div className="p-1 md:p-4 border-2 border-stone-400 w-full lg:w-3/4 overflow-x-auto">
            <table className="table-auto text-left text-[12px] md:text-lg w-full">
              <thead className="border-b-4 border-stone-600">
                <tr className="h-12 bg-stone-300 text-black">
                  <th className="p-2 text-sm sm:text-base">Talk No.</th>
                  <th className="p-2 text-sm sm:text-base">Date</th>
                  <th className="p-2 text-sm sm:text-base">Time</th>
                  <th className="p-2 text-sm sm:text-base">Speaker</th>
                </tr>
              </thead>
              <tbody className="border-b-4 border-stone-600">
                {keynotes.map((talk, idx) => (
                  <tr key={idx} className="border-b-2 border-stone-400">
                    <td className="py-2 px-2">{talk.number}</td>
                    <td className="py-2 px-2">{talk.date}</td>
                    <td className="py-2 px-2">{talk.time}</td>
                    <td className="py-2 px-2">{talk.speaker}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
*/

const KeynoteSchedule = () => {
  return (
    <div className="mt-14 py-20 bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 text-black flex justify-center items-center">
      <h2 className="text-3xl font-semibold text-gray-700 italic">
        Will be announced soon.
      </h2>
    </div>
  );
};

export default KeynoteSchedule;
