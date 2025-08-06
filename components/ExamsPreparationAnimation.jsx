import React from "react";
import dynamic from "next/dynamic";

// Dynamically import lottie-react with SSR off
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function ExamsPreparationAnimation() {
  // Import JSON inside component to avoid loading it at build time
  const animationData = require("../lottieFiles/examsPreparation.json");

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: "100%", height: "auto" }}
    />
  );
}
