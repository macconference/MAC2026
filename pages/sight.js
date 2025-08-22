import React from "react";

const Sight = () => {
  return (
    <section className="bg-gradient-to-r from-indigo-200 via-blue-300 to-blue-200 dark:from-gray-900 dark:via-gray-800 dark:to-black text-gray-800 dark:text-gray-200 body-font mx-4 sm:mx-6 md:mx-12 pb-16">
      <div className="px-0 sm:px-5 py-2 mt-8">
        {/* Section Heading */}
        <div className="mt-8 pb-4 flex flex-col items-center justify-center">
          <h1 className="title-font text-center font-bold text-2xl sm:text-3xl md:text-4xl text-gray-900 dark:text-gray-100 border-b-4 border-blue-500 dark:border-blue-400 pb-2">
            IEEE SIGHT
          </h1>
        </div>

        {/* Intro Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center px-4 md:px-16 lg:px-24 my-10">
          <div className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-500 dark:text-blue-400 mb-2">
              Special Interest Group on Humanitarian Technology
            </h2>
            <p>
              A global network of IEEE volunteers partnering with underserved
              communities & local organizations to leverage technology for
              sustainable development.
            </p>
          </div>
          <img
            src="/group-photo-ieee-sight-group.jpg"
            alt="IEEE SIGHT"
            className="w-full rounded-xl bg-white dark:bg-gray-700 p-2 dark:opacity-90"
          />
        </div>

        {/* IEEE SIGHT Groups Section */}
        <div className="px-4 md:px-16 lg:px-24 mb-12 text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-400 mb-4">
            IEEE SIGHT Groups
          </h2>
          <p>
            SIGHT Groups consist of at least six IEEE members who come together to learn about
            sustainable development, foster relationships with their local communities, and
            leverage technology to address key issues in their local communities. Non-IEEE members
            are also invited and encouraged to participate in their local SIGHT Group. Each Group
            must be affiliated with an existing IEEE organizational unit, such as a Section or
            Student Branch.
          </p>
        </div>

        {/* Section Header */}
        <h2 className="text-center text-xl sm:text-2xl font-bold text-blue-600 dark:text-blue-400 mt-12 mb-6">
          Get Involved with IEEE SIGHT
        </h2>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-12 lg:px-24">
          {/* Card 1 */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/70 transition duration-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
              Become a Member
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Become a SIGHT Member – Add SIGHT to your IEEE membership for
              free and join the IEEE community dedicated to technology for
              impact. Both students and professionals are welcome.
            </p>
            <a
              href="https://sight.ieee.org/get-involved/"
              className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:underline"
            >
              Get Involved
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/70 transition duration-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
              Find a SIGHT Group
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Join SIGHT Groups from around the world as they collaborate with
              communities and local organizations to harness technology for
              sustainable development.
            </p>
            <a
              href="https://sight.ieee.org/groups/find-a-sight-group/"
              className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:underline"
            >
              Find a Group
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/70 transition duration-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
              Start a SIGHT Group
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              If there is no SIGHT group affiliated with your IEEE Section or
              Student Branch, click below to learn about the steps involved in
              creating a new SIGHT Group.
            </p>
            <a
              href="https://sight.ieee.org/groups/start-a-sight-group/"
              className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:underline"
            >
              Start a Group
            </a>
          </div>

          {/* Card 4 */}
          <div className="bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-900/50 rounded-xl p-6 border border-gray-200 dark:border-gray-600 hover:shadow-lg dark:hover:shadow-gray-900/70 transition duration-200">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-700 dark:text-blue-400">
              Opportunities
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm sm:text-base">
              Explore how SIGHT members and Groups can engage with IEEE
              Humanitarian Technologies. Apply for Tech4Good funding, request
              event sponsorship, or participate in programs.
            </p>
            <a
              href="https://sight.ieee.org/get-involved/types-of-opportunities/"
              className="text-sm font-semibold text-orange-500 dark:text-orange-400 hover:underline"
            >
              View Opportunities
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sight;
