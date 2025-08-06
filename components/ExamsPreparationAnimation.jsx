import React from "react";
import Lottie from "lottie-react";
import examsPreparation from "../lottieFiles/examsPreparation.json";

const ExamsPreparationAnimation = () => {
  return <Lottie animationData={examsPreparation} loop={true} />;
};

export default ExamsPreparationAnimation;
