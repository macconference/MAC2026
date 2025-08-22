import React from "react";
import Link from "next/link";
import SponsorFix from "../components/SponsorFix";
import NoticeMarquee from "../components/NoticeMarquee";

const Registration = () => {
  return (
    <>
      {/* <div className="bg-gray-800  p-4">
 <NoticeMarquee />
</div> */}

      <div className="mt-14 py-8  bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-black dark:text-gray-100">
        <NoticeMarquee />
        {/* ... */}

        <div id="registration" className="h-12 w-full"></div>
        <h1 className="text-center text-lg sm:text-xl md:text-3xl font-bold mt-12 dark:text-gray-100">
          <span className="border-b-4 border-blue-500 dark:border-blue-400 px-4 pb-4">
            Registration Fee (Including GST) 
          </span>
        </h1>
        <div className="flex justify-center mt-16">
          <div className="p-1 md:p-4 border-2 border-stone-800 dark:border-gray-600 overflow-x-scroll">
            <h1 className="text-[20px] sm:text-[25px] md:text-2xl text-red-700 dark:text-red-400 font-bold p-1 pb-2 text-center underline">
              Indian Delegates
            </h1>
            <table className="text-left text-[12px] md:text-lg lg:text-lg w-[85rem]">
              <tbody>
                <tr className="h-12">
                  <th></th>
                  <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                    Category
                  </th>
                  <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                    <div>
                      Early Bird
                      <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                        (Till September 20, 2026)
                      </div>
                    </div>
                  </th>
                  <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                    <div>
                      Regular Registration
                      <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                        (21 September–10 October, 2026)
                      </div>
                    </div>
                  </th>
                  <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                    <div>
                      On Spot Registration
                      <div className="text-[10px] sm:text-[12px] md:text-[14px]">
                        (After 11 October, 2026)
                      </div>
                    </div>
                  </th>
                </tr>

                {/* Student */}
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td
                    className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-800 dark:border-gray-600 dark:text-gray-200"
                    rowSpan={3}
                  >
                    <div className="flex justify-center items-center">
                      <span className="text-red-700 dark:text-red-400 font-bold">Student</span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200">IEEE</td>
                  <td className="py-2 dark:text-gray-200">INR 5,900</td>
                  <td className="py-2 dark:text-gray-200">INR 7,900</td>
                  <td className="py-2 dark:text-gray-200">INR 9,900</td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200">Non-IEEE</td>
                  <td className="py-2 dark:text-gray-200">INR 8,400</td>
                  <td className="py-2 dark:text-gray-200">INR 10,400</td>
                  <td className="py-2 dark:text-gray-200">INR 11,400</td>
                </tr>

                {/* Professional */}
                <tr>
                  <td rowSpan={3} className="font-semibold dark:text-gray-200">
                    <div className="flex justify-center items-center">
                      <span className="text-red-700 dark:text-red-400 font-bold">
                        Professional
                      </span>
                    </div>
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200">IEEE</td>
                  <td className="py-2 dark:text-gray-200">INR 9,900</td>
                  <td className="py-2 dark:text-gray-200">INR 13,900</td>
                  <td className="py-2 dark:text-gray-200">INR 16,900</td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200">Non-IEEE</td>
                  <td className="py-2 dark:text-gray-200">INR 12,900</td>
                  <td className="py-2 dark:text-gray-200">INR 16,900</td>
                  <td className="py-2 dark:text-gray-200">INR 18,900</td>
                </tr>

                {/* Online Presentation */}
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td
                    className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-800 dark:border-gray-600 dark:text-gray-200"
                    rowSpan={3}
                  >
                    <div className="flex justify-center items-center">
                      <span className="text-red-700 dark:text-red-400 font-bold">
                        Online Presentation**
                      </span>
                    </div>
                    <div className="text-[10px] sm:text-[12px] text-center text-black dark:text-gray-300 italic ">
                      (in unavoidable circumstances)
                    </div>
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200"></td>
                  <td
                    colSpan={3}
                    className="text-center py-2 text-black dark:text-gray-200"
                  >
                    <div className="flex justify-center gap-5">
                    <p className="font-semibold">For Students-</p>
                    <p>INR 9,900</p>
                  </div>
                  </td>
                </tr>
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td className="py-2 dark:text-gray-200"></td>
                  <td
                    colSpan={3}
                    className="text-center py-2 text-black dark:text-gray-200"
                  >
                  <div className="flex justify-center gap-5">
                    <p className="font-semibold">For Professionals-</p>
                    <p>INR 16,900</p>
                  </div>
                  </td>
                </tr>

                {/* Poster Presentation */}
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td colSpan={2} className="font-bold text-red-700 dark:text-red-400 pl-4">
                    For Poster Presentation
                  </td>
                  <td
                    colSpan={3}
                    className="text-center font-semibold text-black dark:text-gray-200 py-2"
                  >
                    INR 2,900
                  </td>
                </tr>

                {/* Attendees without Paper */}
                <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                  <td colSpan={2} className="font-bold text-red-700 dark:text-red-400 pl-4">
                    Attendees without Paper
                  </td>
                  <td
                    colSpan={3}
                    className="text-center font-semibold text-black dark:text-gray-200 py-2"
                  >
                    INR 2,900
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex flex-col items-center ">
          <p className="md:mb-3 leading-relaxed font-semibold text-lg mt-4 dark:text-gray-200">
        *Each registration in Professional Category is valid for two papers(Not
        applicable in Student Cartegory).
      </p>
      <p className="md:mb-8 leading-relaxed font-semibold text-lg  mt-4 dark:text-gray-200">
        **Decided by conference committee upon multiple requests by the participants.        
      </p>
        </div>
      
      <div className="flex justify-center mt-16">
        <div className="p-1 md:p-4 border-2 border-stone-800 dark:border-gray-600 overflow-x-scroll">
          <h1 className="text-[20px] sm:text-[25px] md:text-2xl text-red-700 dark:text-red-400 font-bold p-1 pb-2 text-center underline">
            Foreign Delegates
          </h1>
          <table className="text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]">
            <tbody>
              <tr className="h-12">
                <th></th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                  Category
                </th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                  <tr>
                    Early Bird
                    <tr className="text-[10px] sm:text-[12px] md:text-[14px]">
                      (Till September 20, 2026)
                    </tr>
                  </tr>
                </th>

                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                  <tr>
                    Regular Registration
                    <tr className="text-[10px] sm:text-[12px] md:text-[14px]">
                      (21 September-10 October, 2026)
                    </tr>
                  </tr>
                </th>
                <th className="text-[13px] sm:text-[15px] md:text-xl p-1 pb-2 dark:text-gray-200">
                  <tr>
                    On Spot Registration
                    <tr className="text-[10px] sm:text-[12px] md:text-[14px]">
                      (After 21 October, 2026)
                    </tr>
                  </tr>
                </th>
              </tr>
              <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                <td
                  className="w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-800 dark:border-gray-600 dark:text-gray-200"
                  rowSpan={3}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-700 dark:text-red-400 font-bold">Student</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                <td className="py-2 dark:text-gray-200">IEEE</td>
                <td className="py-2 dark:text-gray-200">USD 100</td>
                <td className="py-2 dark:text-gray-200">USD 160</td>
                <td className="py-2 dark:text-gray-200">USD 220</td>
              </tr>
              <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                <td className="py-2 dark:text-gray-200">Non-IEEE</td>
                <td className="py-2 dark:text-gray-200">USD 150</td>
                <td className="py-2 dark:text-gray-200">USD 200</td>
                <td className="py-2 dark:text-gray-200">USD 250</td>
              </tr>
              <tr>
                <td rowSpan={3} className="font-semibold dark:text-gray-200">
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <span className="text-red-700 dark:text-red-400 font-bold">Professional</span>
                  </div>
                </td>
              </tr>
              <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                <td className="py-2 dark:text-gray-200">IEEE</td>
                <td className="py-2 dark:text-gray-200">USD 210</td>
                <td className="py-2 dark:text-gray-200">USD 240</td>
                <td className="py-2 dark:text-gray-200">USD 270</td>
              </tr>
              <tr className="border-b-2 border-stone-800 dark:border-gray-600">
                <td className="py-2 dark:text-gray-200">Non-IEEE</td>
                <td className="py-2 dark:text-gray-200">USD 250</td>
                <td className="py-2 dark:text-gray-200">USD 300</td>
                <td className="py-2 dark:text-gray-200">USD 400</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p className="md:mb-8 leading-relaxed font-semibold text-lg text-center mt-4 dark:text-gray-200">
        *Each registration in Professional Category is valid for two papers(Not
        applicable in Student Cartegory).
      </p>

      <h1 className="text-center text-3xl font-bold mt-12 mb-8 dark:text-gray-100">
        <span className="border-b-4 border-blue-500 dark:border-blue-400 px-4 pb-4">
          Bank Details
        </span>
      </h1>

      <div className="flex justify-center">
  <div className="md:mx-28 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 max-w-[700px] w-[90%] md:w-[70%] lg:w-[50%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-800 rounded-2xl">
    <div className="w-full flex justify-between py-2">
      <span className="text-black">Account Name</span>
      <span className="text-right text-black">
        NON FORMAL CONTINUING OF EDU
      </span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span className="text-black">Account Number</span>
      <span className="text-right text-black">10424975574</span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span className="text-black">IFSC Code</span>
      <span className="text-right text-black">SBIN0002580</span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span className="text-black">Swift Code {'(for Foreign Authors only)'}</span>
      <span className="text-right text-black">SBININBB828</span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span className="text-black">Bank Name</span>
      <span className="text-right text-black">SBI, MNNIT Allahabad</span>
    </div>
    <div className="w-full flex justify-between py-2">
      <span className="text-black">Branch</span>
      <span className="text-right text-black">
        MNNIT Allahabad
      </span>
    </div>
    <h1 className="text-2xl font-bold mb-4 text-black">Scan this QR Code</h1>
    <img
      src="/qr.png"
      alt="QR Code"
      className="w-70 h-70 rotate-[-1.05deg]"
    />
  </div>
</div>


      <div className="text-center mt-12 ">
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdzTqSzAu1tzNuCPVM4q70jUbzFW2bw9Elgc8JGSC6JBegPoQ/viewform?usp=sharing">
          <span className=" rounded-xl cursor-pointer font-semibold text-lg border-2 px-8 border-stone-800 dark:border-gray-600 btn btn-success dark:text-gray-200">
            Registration Form
          </span>
        </a>
      </div>

      <div className="h-12 w-full"></div>
    </div>
    </>
  );
};

export default Registration;
