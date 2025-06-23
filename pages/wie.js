import React from "react";

const Wie = () => {
  return (
    <section className="text-gray-600 body-font mx-4 sm:mx-6 md:mx-12 pb-16">
      <div className="px-0 sm:px-5 py-2 mt-8">
        {/* Section Heading */}
        <div className="mt-8 pb-4 flex flex-col items-center justify-center">
          <h1 className="title-font text-center font-bold text-3xl sm:text-4xl text-gray-100 border-b-4 border-pink-500 pb-2">
            IEEE Women in Engineering (WIE)
          </h1>
        </div>

        {/* About Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 md:px-16 lg:px-24 mb-10">
          <div className="text-gray-100 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">About IEEE WIE</h2>
            <p>
              IEEE Women in Engineering (WIE) is a global network of IEEE members and
              volunteers dedicated to promoting women engineers and scientists and
              inspiring girls around the world to follow their academic interests in a
              career in engineering and science.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/wie1.webp"
              alt="WIE Logo"
              className="w-[180px] sm:w-[200px] rounded-xl bg-white p-2"
            />
          </div>
        </div>

        {/* About IEEE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 md:px-16 lg:px-24 mb-10">
          <div className="text-gray-100 text-base sm:text-lg leading-relaxed">
            <h2 className="text-2xl font-bold text-pink-400 mb-2">About IEEE</h2>
            <p>
              IEEE is the world’s largest technical professional organization dedicated to
              advancing technology for the benefit of humanity.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="/IEEE-Logo-250.webp"
              alt="IEEE Logo"
              className="w-[180px] sm:w-[200px] rounded-xl bg-white p-2"
            />
          </div>
        </div>

        {/* Mission */}
        <div className="px-4 md:px-16 lg:px-24 mb-10">
          <h2 className="text-2xl font-bold text-pink-400 mb-2">The WIE Mission</h2>
          <p className="text-gray-100 text-base sm:text-lg leading-relaxed">
            To connect, support, and inspire women and girls worldwide, and facilitate their
            recruitment and retention in STEM fields, fostering technological innovation and
            excellence for the benefit of humanity.
          </p>
        </div>

        {/* IEEE WIE Strives To */}
        <div className="px-4 md:px-16 lg:px-24 mb-12">
          <h2 className="text-2xl font-bold text-pink-400 mb-4">IEEE WIE Strives To</h2>
          <ul className="list-disc pl-6 text-gray-100 text-base sm:text-lg space-y-2">
            <li>Assist with forming new IEEE WIE Affinity Groups and support ongoing activities.</li>
            <li>
              Recognize the outstanding achievements of its members in electrical and electronics
              engineering through IEEE Awards nominations.
            </li>
            <li>
              Organize workshops at major technical conferences to enhance networking and to
              promote membership in IEEE WIE.
            </li>
            <li>
              Advocate leadership roles for its members in IEEE governance and career advancement.
            </li>
            <li>
              Promote member grade advancement to Senior Member and Fellow.
            </li>
            <li>
              Facilitate the development of programs that promote the entry and retention of
              members in engineering programs.
            </li>
            <li>
              Administer the IEEE STAR Program to mentor young women in junior high and high
              schools.
            </li>
          </ul>
        </div>

        {/* About Heading */}
        <div className="flex justify-center mt-8 mb-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-400 text-center">
            About IEEE WIE
          </h1>
        </div>

        {/* 2x2 Grid Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 md:px-16 lg:px-24">
          {/* Card 1 */}
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-700 mb-2">Governance</h3>
            <p className="text-gray-800 mb-3">
              The IEEE Women in Engineering Committee (WIEC) is a committee of the IEEE Member and
              Geographic Activities (MGA) Board, reporting through the MGA Member Engagement and
              Life Cycle Committee (MELCC), as defined in the IEEE MGA Operations Manual. The
              structure of the WIEC, and its responsibilities, may be found in the MGA Operations
              Manual Section 4.20.
            </p>
            <a href="https://wie.ieee.org/about/governance/" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-700 mb-2">WIE Committee</h3>
            <p className="text-gray-800 mb-3">
              The IEEE Women in Engineering Committee (WIEC) is a committee of the IEEE Member and
              Geographic Activities (MGA) Board, reporting through the MGA Member Engagement and
              Life Cycle Committee (MELCC).
            </p>
            <a href="https://wie.ieee.org/about/wie-committee/" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-700 mb-2">FAQ&apos;s</h3>
            <p className="text-gray-800 mb-3">
              Got a question about WIE? Find answers to the most commonly asked questions.
            </p>
            <a href="https://wie.ieee.org/about/faqs/" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-pink-50 rounded-xl p-6 border border-pink-200 shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-pink-700 mb-2">IEEE WIE Brand</h3>
            <p className="text-gray-800 mb-3">
              In order to maximize the ability for the IEEE Women in Engineering (WIE) brand to
              effectively reach all audiences, we must ensure that all materials maintain a
              consistent “look” and “theme.”
            </p>
            <a href="https://wie.ieee.org/about/ieee-wie-brand/" className="text-blue-600 font-semibold hover:underline">
              Read More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Wie;
