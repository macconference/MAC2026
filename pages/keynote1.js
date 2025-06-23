import React from "react";

const keynotes = [
  {
    number: "Keynote Talk 1",
    date: "27 June 2025",
    time: "11:30 AM - 12:30 PM",
    speaker: "Dr. D. C. Pande, DRDO LRDE, R&D Lab, Bangalore",
  },
  {
    number: "Keynote Talk 2",
    date: "27 June 2025",
    time: "12:30 PM - 1:30 PM",
    speaker: "Dr. Bharat Rawal, Grambling State University, USA",
  },
  {
    number: "Keynote Talk 3",
    date: "27 June 2025",
    time: "2:30 PM - 3:30 PM",
    speaker: "Mr. Preet Yadav (NXP India)",
  },
  {
    number: "Keynote Talk 4 (Online)",
    date: "27 June 2025",
    time: "4:00 PM - 5:00 PM",
    speaker: "Prof. C. J. Reddy, Altair Engineering Inc",
  },
  {
    number: "Keynote Talk 5",
    date: "28 June 2025",
    time: "9:30 AM - 10:30 AM",
    speaker: "Dr. Shankar Prakriya, IIT Delhi",
  },
  {
    number: "Keynote Talk 6",
    date: "28 June 2025",
    time: "10:30 AM - 11:30 AM",
    speaker: "Ravi Gangwar, IIT (ISM) Dhanbad",
  },
  {
    number: "Keynote Talk 7",
    date: "28 June 2025",
    time: "2:30 PM - 3:30 PM",
    speaker: "Dr. Sudhan Majhi, IISc Bangalore",
  },
  {
    number: "Keynote Talk 8",
    date: "28 June 2025",
    time: "3:30 PM - 4:30 PM",
    speaker: "Mr. Nikhil Mitaliya, Tabor Electronics Ltd.",
  },
  {
    number: "Keynote Talk 9 (Online)",
    date: "29 June 2025",
    time: "7:30 AM - 8:30 AM",
    speaker: "Prof. Satish Sharma, SDSU",
  },
  {
    number: "Keynote Talk 10",
    date: "29 June 2025",
    time: "9:30 AM - 10:15 AM",
    speaker: "Dr. Ravi Arya, Xiangshan Lab, ZICST China",
  },
  {
    number: "Keynote Talk 11",
    date: "29 June 2025",
    time: "10:15 AM - 11:00 AM",
    speaker: "Mr. Prakash Kumar, MeitY",
  },
  {
    number: "Keynote Talk 12",
    date: "29 June 2025",
    time: "11:15 AM - 12:00 PM",
    speaker: "Dr. Prabhat Sharma, VNIT Nagpur",
  },
  {
    number: "Keynote Talk 13",
    date: "29 June 2025",
    time: "2:30 PM - 3:15 PM",
    speaker: "Dr. Girish Tripathi, Tejas Networks",
  },
];

const KeynoteSchedule = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      {/* Section Heading */}
      <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12 mb-16">
        <span className="border-b-4 border-blue-500 px-4 pb-4">Keynote Schedule</span>
      </h1>

      {/* Table Section */}
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

export default KeynoteSchedule;
