import React from "react";

const PrimaryInput = ({
  name,
  label = "email",
  isPassword = false,
  type = "text",
  placeholder,
  isPasswordVisible,
  setIsPasswordVisible,
}) => {
  return (
    <div className="my-3 w-full ">
      <label htmlFor={name} className="text-base capitalize">
        {label}
      </label>

      <div
        className={`mt-3 w-full border-2 border-dark-green h-[45px] overflow-hidden ${
          isPassword && "relative"
        }`}
      >
        {isPassword ? (
          <input
            type={isPasswordVisible ? "text" : "password"}
            className="w-full h-full px-3"
            placeholder={placeholder}
          />
        ) : (
          <input
            type={type}
            className="w-full h-full px-3"
            placeholder={placeholder}
          />
        )}

        {isPassword && (
          <button
            className="absolute top-1/2 -translate-y-1/2 right-1 cursor-pointer  bg-[#edf0f2] px-4 py-1 capitalize text-sm rounded-2xl"
            type="button"
            onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            show
          </button>
        )}
      </div>
      <p className="text-red-400 text-sm mt-1 hidden">An error occurred</p>
    </div>
  );
};

export default PrimaryInput;
