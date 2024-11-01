import React from "react";

const ProfileCard = ({ title, fullName, post, organisation, profileImage }) => {
  return (
    <div className="card w-72 md:w-[285px] ">
      <figure className="">
        {profileImage && (
          <img
            src={profileImage}
            alt=""
            className="h-56 mx-8 mt-4 w-full object-cover object-top rounded-full"
          />
        )}
      </figure>
      <div className="card-body text-black font-semibold">
        <div className="text-2xl font-bold ">
          {/* <h1>{title}</h1> */}
          <h1>{fullName}</h1>
        </div>
        <h1>{post}</h1>
        <h1>{organisation}</h1>
      </div>
    </div>
  );
};

export default ProfileCard;
