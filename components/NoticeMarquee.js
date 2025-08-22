import React from "react";

const NoticeMarquee = () => {
  const message1 = "Registrations are open for attendees without paper.";
  const message2 = "Participants can present online with a fee of INR 9900 (students) / INR 16900 (professionals).";

  const combinedText = `${message1}     ${message2}     `;

  return (
    <div className="w-full overflow-hidden border py-2 ">
      <div className="relative whitespace-nowrap flex animate-marquee-track hover:[animation-play-state:paused] text-lg font-medium text-black">
        <span className="mr-10">{combinedText.repeat(2)}</span>
        <span className="mr-10">{combinedText.repeat(2)}</span>
      </div>
    </div>
  );
};

export default NoticeMarquee;
