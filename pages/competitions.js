import React from "react";

const MAC2025Opportunities = () => {
  return (
    <div className="bg-gray-50 min-h-screen p-16 mt-6 font-sans text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">

        {/* XSL Antenna Competition */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-blue-700 mb-3">📡 XSL Antenna Competition 2025</h2>
          <p className="mb-3">
            Hosted by Xiangshan Laboratory (China) for MAC 2025 participants. Design-based competition encouraging real-world implementation.
          </p>
          <ul className="list-disc ml-6 mb-3">
            <li>Top 3 designs get free fabrication and testing</li>
            <li>Industry feedback & global recognition</li>
          </ul>
          <p className="mb-2">
            📅 <strong>Dates:</strong><br />
            Register by: <strong>June 10</strong>, Results on: <strong>June 20</strong>
          </p>
          <p>
            🔗 More info:{" "}
            <a
              href="https://xslwireless.net/News/99.html"
              target="_blank"
              rel="noreferrer"
              className="text-blue-600 underline"
            >
              xslwireless.net/News/99.html
            </a>
          </p>
        </div>

        {/* RMGI Grant */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-green-700 mb-3">🎓 Raj Mittra Grant in India (RMGI) 2025</h2>
          <p className="mb-3">
            Travel grant of up to ₹25,000 for Ph.D. students in India attending MAC 2025 in Bhopal.
          </p>
          <ul className="list-disc ml-6 mb-3">
            <li>Train fare, hotel, and registration covered</li>
            <li>Must be first-author on accepted MAC 2025 paper</li>
          </ul>
          <p className="mb-2">
            📅 Apply by: <strong>June 10, 2025</strong><br />
            📧 Email to: <strong>maifuzali@hotmail.com</strong> (Subject: &quot;RMGI&quot;)
          </p>
        </div>

        {/* TaraNG Research Competition */}
        <div className="bg-white shadow-md rounded-xl p-6">
          <h2 className="text-2xl font-bold text-purple-700 mb-3">🛰️ TaraNG Research Competition @ MAC 2025</h2>
          <p className="mb-3">
            Organized by NUMEREGION, this competition supports innovation in antennas, microwaves & computational electromagnetics.
          </p>
          <p className="mb-2"><strong>Tracks:</strong></p>
          <ul className="list-disc ml-6 mb-3">
            <li>Track 1: Antennas & Microwave Engineering</li>
            <li>Track 2: Numerical Techniques in Electromagnetics (AI/ML, GPU, CEM)</li>
          </ul>
          <p className="mb-2"><strong>Prizes:</strong></p>
          <ul className="list-disc ml-6 mb-3">
            <li>Track 1: ₹10,000 / ₹5,000 / ₹2,000 + goodies</li>
            <li>Track 2: ₹25,000 R&D project + collaboration opportunities</li>
          </ul>
          <p className="mb-2"><strong>Important Dates:</strong></p>
          <ul className="list-disc ml-6">
            <li>Registration Deadline: <strong>20 May 2025</strong></li>
            <li>Submission Deadline: <strong>8 June 2025</strong></li>
            <li>Decision Date: <strong>15 June 2025</strong></li>
            <li>Presentation: <strong>27–29 June 2025</strong></li>
          </ul>
        </div>

      </div>
    </div>
  );
};

export default MAC2025Opportunities;
