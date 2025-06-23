import React from "react";

const YoungProfessionals = () => {
  return (
    <section className="bg-white text-gray-800 body-font mx-4 sm:mx-6 md:mx-12 pb-16">
      <div className="px-0 sm:px-5 py-2 mt-8">
        {/* Section Heading */}
        <div className="mt-8 pb-4 flex flex-col items-center justify-center">
          <h1 className="title-font text-center font-bold text-3xl sm:text-4xl text-gray-900 border-b-4 border-blue-500 pb-2">
            IEEE Young Professionals
          </h1>
        </div>

        {/* About Description */}
        <div className="text-justify text-base sm:text-lg text-gray-700 px-4 md:px-16 lg:px-24 leading-relaxed mb-12">
          <p className="mb-6">
            IEEE Young Professionals (YP) is a vibrant global community for early-career
            engineers and technologists. It connects enthusiastic innovators through mentorship,
            professional events, and leadership development opportunities, empowering the next
            generation of technology leaders.
          </p>
        </div>

        {/* 3 Column Text Cards with Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-4 md:px-6 mb-16 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white border-4 border-orange-400 rounded-full mb-4 overflow-hidden">
              <img src="/yp wiki.webp" alt="Wiki" className="w-full h-full object-contain p-2" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">YP Leadership Wiki</h2>
            <p className="text-gray-600 mb-4 px-2">
              Plug into one of the most powerful networks within IEEE. This wiki incorporates
              suggestions from Society/Council YP reps, Technical Activities Staff, and YP Committee Members.
            </p>
            <a
              href="https://kb.ieee.org/yp/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm font-semibold"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white border-4 border-orange-400 rounded-full mb-4 overflow-hidden">
              <img src="/yp directory.webp" alt="Directory" className="w-full h-full object-contain p-2" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">YP Volunteers Directory</h2>
            <p className="text-gray-600 mb-4 px-2">
              Make great connections with IEEE Volunteers from your home country and around
              the world. Discover opportunities to collaborate and grow with a diverse network of professionals.
            </p>
            <a
              href="https://yp.ieee.org/contact-us/ieee-young-professionals-volunteers-directory/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm font-semibold"
            >
              LEARN MORE
            </a>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 bg-white border-4 border-orange-400 rounded-full mb-4 overflow-hidden">
              <img src="/yp executive.webp" alt="Executive" className="w-full h-full object-contain p-2" />
            </div>
            <h2 className="text-xl font-bold text-gray-800 mb-2">YP Executive Committee</h2>
            <p className="text-gray-600 mb-4 px-2">
              The executive team collaborates with volunteer leaders across IEEE regions and
              societies to ensure consistent and high-quality YP programs worldwide.
            </p>
            <a
              href="https://yp.ieee.org/2025-executive-team/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition text-sm font-semibold"
            >
              LEARN MORE
            </a>
          </div>
        </div>

        {/* 3 Circular Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 md:px-6">
          <div className="rounded-full overflow-hidden shadow-md border border-gray-200 w-[80%] mx-auto aspect-square">
            <img
              src="/yp3.jpg"
              alt="YP Event 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-full overflow-hidden shadow-md border border-gray-200 w-[80%] mx-auto aspect-square">
            <img
              src="/yp1.jpg"
              alt="YP Event 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-full overflow-hidden shadow-md border border-gray-200 w-[80%] mx-auto aspect-square">
            <img
              src="/yp2.jpeg"
              alt="YP Event 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoungProfessionals;
