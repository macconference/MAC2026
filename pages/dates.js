import React from "react";
import Link from "next/link";
import SponsorFix from "../components/SponsorFix";

const Dates = () => {
  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <h1 className="text-center text-3xl font-bold mb-6">
        <span className="md:px-8 border-b-4 border-blue-500 pb-4">
          Important Dates
        </span>
      </h1>
      <div class="flex justify-center">
        <div className="flex flex-col w-full items-center justify-center">
          <div className="w-full text-sm md:text-lg mb-4 mt-8 flex flex-col items-center font-bold italic">
            <p className="w-full md:w-auto leading-relaxed font-semibold text-lg text-center md:text-left mt-4 whitespace-nowrap">
              Papers are accepted in multiple stages.
            </p>

            <table class="text-[12px] md:text-lg lg:text-lg w-full max-w-3xl mx-auto">
              <tbody>
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    1.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Paper Submission Starts
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    November 15, 2024
                  </td>
                </tr>
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    2.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Last Date for Paper Submission
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    <s>February 28, 2025</s>
                    <br />
                    <span class="text-red-500">April 6, 2025</span>
                  </td>
                </tr>
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    3.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Acceptance Notification
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    <s>May 1, 2025</s>
                    <br />
                    <span class="text-red-500">May 10, 2025</span>
                  </td>
                </tr>
                {/* <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    3.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Acceptance Notification
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    May 1, 2025
                  </td>
                </tr> */}
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    4.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Early Bird Registration
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    May 15, 2025
                  </td>
                </tr>
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    5.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Registration Deadline
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    June 01, 2025
                  </td>
                </tr>
                <tr>
                  <td class="text-center px-4 py-2 border border-black w-1/12">
                    6.
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-7/12">
                    Camera Ready Paper Submission
                  </td>
                  <td class="text-center px-4 py-2 border border-black w-4/12">
                    June 01, 2025
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* <p class="md:mb-8 leading-relaxed font-semibold text-lg text-center mt-4">
        *10% of Registration fee will be reimbursed (applicable to only
        B.Tech./M.Tech. Students who have registered as first author).
      </p> */}

      {/*
<div className='text-center'>
<div className='mt-24 px-4 md:px-0'>
    <p className='text-[15px] font-semibold md:text-[22px] lg:text-xl'>For Regular Registrations <span className='text-red-500 font-bold'>( After 31 January, 2023, 11 PM-IST)</span></p>
</div>
<div className='flex justify-center mt-4 '>
<div className=' p-1 md:p-4 border-2 border-stone-400 overflow-x-scroll'>
<table className='text-left text-[12px] md:text-lg lg:text-lg w-[39rem] md:w-[59rem] lg:w-[67rem]'>
<tbody>
<tr className='h-12'>
        <th></th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Category</th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Indian Delegates</th>
        <th className=' text-[13px] sm:text-[15px] md:text-xl p-1 pb-2'>Foreign Delegates</th>
    </tr>
    <tr className='border-b-2 border-stone-600'>
    <td className='w-[20%] md:w-72 text-[13px] font-semibold md:text-[20px] lg:text-lg px-[3px] md:px-2 border-b-2 border-stone-400' rowSpan={5}>
    Early Paper Submission Advantage (For Paper Submitted Till <span className='text-red-500 font-bold'>31 October, 2022</span>) </td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2 '>Student (IEEE)</td>
        <td className='py-2'>INR 3900 + 18% = 4602/-</td>
        <td className='py-2'>USD 140 + 18% = 166</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 4900 + 18% = 5782/-</td>
        <td className='py-2'>USD 190 + 18% = 225</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 7900 + 18% = 9322/-</td>
        <td className='py-2'>USD 200 + 18% = 236</td>
    </tr>
    <tr className='border-b-4 border-stone-600'>
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 10900 + 18% = 12862/-</td>
        <td className='py-2'>USD 250 + 18% = 295</td>
    </tr>
    <tr>
        <td rowSpan={5} className='font-semibold'>Regular</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (IEEE)</td>
        <td className='py-2'>INR 4900 + 18% = 5782/-</td>
        <td className='py-2'>USD 160 + 18% = 189</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Student (Non-IEEE)</td>
        <td className='py-2'>INR 5900 + 18% = 6962/-</td>
        <td className='py-2'>USD 210 + 18% = 248</td>
    </tr>
    <tr className='border-b-2 border-stone-400'>
        <td className='py-2'>Faculty</td>
        <td className='py-2'>INR 9900 + 18% = 11682/-</td>
        <td className='py-2'>USD 220 + 18% = 260</td>
    </tr>
    <tr >
        <td className='py-2'>Industry</td>
        <td className='py-2'>INR 12900 + 18% = 15222/-</td>
        <td className='py-2'>USD 290 + 18% = 343</td>
    </tr>
</tbody>
</table>
</div>
</div>
</div>

<h1 className='text-center text-3xl font-bold mt-12 mb-8' >
    <span className='border-b-4 border-blue-500 px-4 pb-4'>
    Bank Details
    </span>
</h1>
<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
<img src="/soon.webp" alt="Coming Soon" />
</div>

<div className='flex justify-center'>
<div className='md:mx-28 bg-red-100 max-w-[700px] w-[90%] md:w-[70%] lg:w-[50%] text-sm md:text-lg p-4 mt-8 flex flex-col items-center border-2 border-stone-400 rounded-2xl'>
<div className='w-full flex justify-between  py-2'>
    <span>Beneficiary Name</span>
    <span className='text-right'>NON FORMAL CONTINUING OF EDU</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Account Number</span>
    <span className='text-right'>10424975574</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>IFSC Code</span>
    <span className='text-right'>SBIN0002580</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Swift Code</span>
    <span className='text-right'>SBININBB828</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Bank</span>
    <span className='text-right'>State Bank of India</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Branch</span>
    <span className='text-right'>MNNIT, Allahabad</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>Institute Name</span>
    <span className='text-right'>Motilal Nehru National Institute of Technology, Allahabad</span>
</div>
<div className='w-full flex justify-between  py-2'>
    <span>GSTN</span>
    <span className='text-right'>09AAAJM1116B2ZR</span>
</div>

</div>
</div>
*/}
      {/*
<div className='text-center mt-12 '>
    <Link href="/tuned" ><span className=' rounded-xl cursor-pointer font-semibold text-lg border-2 px-8 border-stone-100 btn btn-success'>Registration Form</span></Link>
</div>

<div className='h-12 w-full'>

</div>
*/}
      <SponsorFix />
    </div>
  );
};

export default Dates;
