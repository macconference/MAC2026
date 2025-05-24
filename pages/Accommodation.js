import React from "react";
import SponsorFix from "../components/SponsorFix";

const Accommodation = () => {
  const hotels = [
    {
      id: 1,
      name: "Hotel Ranjeet Legacy",
      category:
        "139, Malviya Nagar, Opp. Apex Bank, TT Nagar, Bhopal, Madhya Pradesh, 462001, India",
      distance: "2.1 KM",
    },
    {
      id: 2,
      name: "Hotel Centre Park",
      category:
        "B-Block, GTB Complex, near Rangmahal Road, Bhopal, Madhya Pradesh, 462003, India",
      distance: "2.3 KM",
    },
    {
      id: 3,
      name: "The Vincent Inn",
      category:
        "New Market Main Rd Behind, Panchanan Building, T.T. Nagar, Malviya Nagar, Bhopal, Madhya Pradesh, 462002, India",
      distance: "2.4 KM",
    },
    {
      id: 4,
      name: "MPT Palash Residency Resort",
      category:
        "Near 45 Bungalow, T.T. Nagar, Bhopal, Madhya Pradesh, 462003, India",
      distance: "3.2 KM",
    },

    {
      id: 5,
      name: "Taj Lakefront",
      category:
        "Link Road No. 3, Prempura, Bhadbhada Chouraha, Bhopal, Madhya Pradesh, 462003, India",
      distance: "3.9 KM",
    },
    {
      id: 6,
      name: "Enrise by Sayaji",
      category:
        "Near Sair Sapata, Van Vihar Road, Prempura, Bhopal, Madhya Pradesh, 462003, India",
      distance: "4.3 KM",
    },
    {
      id: 7,
      name: "Jehan Numa Palace",
      category: "157, Shamla Hills, Bhopal, Madhya Pradesh, 462013, India",
      distance: "4.3 KM",
    },
    {
      id: 8,
      name: "Hotel Ranjit’s Lakeview",
      category:
        "Van Vihar Road, Shyamla Hills, near CM House, Bhopal, 462001, India",
      distance: "4.4 KM",
    },
    {
      id: 9,
      name: "Jehan Numa Retreat",
      category:
        "Near Van Vihar, Dr. Salim Ali Road, Prempura, Bhopal, Madhya Pradesh, 462002, India",
      distance: "4.5 KM",
    },
    {
      id: 10,
      name: "Lemon Tree Hotel",
      category:
        "10	Lemon Tree Hotel	240, Zone-1, M.P. Nagar, Opposite DB Mall, Bhopal, Madhya Pradesh, 462011, India	5.2 kms",
      distance: "5.2 KM",
    },
    {
      id: 11,
      name: "Courtyard by Marriott",
      category:
        "DB City Mall, Zone-I, Arera Hills, Bhopal, Madhya Pradesh, 462011, India",
      distance: "5.6 KM",
    },
  ];

  return (
    <div className="mt-14 py-8 bg-slate-200 text-black">
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4 md:mb-6">
          Accommodation inside MANIT Campus
        </h1>

        <div className="overflow-x-auto space-y-6">
          {/* Faculty Section */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              For Faculty
            </h2>
            <p className="text-gray-700 mb-2">
              Limited guest house accommodation will be available on a
              first-come, first-serve basis.
            </p>
            <a
              href="https://forms.gle/XRsYg4acq1GuX8SL7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Click here to fill the faculty accommodation form
            </a>
            <p className="text-gray-700 mb-2">
              *Filling this form does not ensure that accommodation will be
              provided.
            </p>
          </div>

          {/* Student Section */}
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              For Students
            </h2>
            <p className="text-gray-700 mb-2">
              Hostel accommodation will be provided to all the students.
            </p>
            <a
              href="https://forms.gle/D7Ya1s4tNN2CNwXs7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Click here to fill the student hostel form
            </a>
          </div>
        </div>
      </div>
      <div className="p-4 md:p-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center text-red-500 mb-4 md:mb-6">
          Accommodation outside MANIT Campus
        </h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="text-left bg-gray-100">
                <th className="px-2 md:px-4 py-2 border">S.No.</th>
                <th className="px-2 md:px-4 py-2 border">Name of The Hotel</th>
                <th className="px-2 md:px-4 py-2 border">Address</th>
                <th className="px-2 md:px-4 py-2 border">
                  Distance from Conference Hotel (Venue)
                </th>
              </tr>
            </thead>
            <tbody>
              {hotels.map((hotel) => (
                <tr key={hotel.id} className="hover:bg-gray-100">
                  <td className="px-2 md:px-4 py-2 border">{hotel.id}</td>
                  <td className="px-2 md:px-4 py-2 border  hover:underline">
                    {hotel.name}
                  </td>
                  <td className="px-2 md:px-4 py-2 border">{hotel.category}</td>
                  <td className="px-2 md:px-4 py-2 border">{hotel.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <SponsorFix />
    </div>
  );
};

export default Accommodation;