import React from "react";

const OtherAuthButtons = ({ icon, title, handleSignIn }) => {
  return (
    <div className="border-2 border-dark-green text-dark-green w-full h-[45px] my-5">
      <button
        className="w-full h-full flex items-center justify-center gap-2 text-lg cursor-pointer"
        onClick={handleSignIn}
      >
        {icon} {title}
      </button>
    </div>
  );
};

export default OtherAuthButtons;
