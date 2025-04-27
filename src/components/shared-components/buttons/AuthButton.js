import React from "react";

const AuthButton = ({ title = "login", marginTop = "my-3" }) => {
  return (
    <div
      className={`${marginTop} w-full h-[45px] border-2 border-dark-green  bg-dark-green hover:bg-transparent text-white hover:text-dark-green`}
    >
      <button className="w-full h-full bg-transparent text-base capitalize cursor-pointer">
        {title}
      </button>
    </div>
  );
};

export default AuthButton;
