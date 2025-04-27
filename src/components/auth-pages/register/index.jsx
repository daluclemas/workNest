"use client";
import AuthButton from "@/components/shared-components/buttons/AuthButton";
import OtherAuthButtons from "@/components/shared-components/buttons/OtherAuthButtons";
import PrimaryInput from "@/components/shared-components/inputs/PrimaryInput";
import { FcGoogle } from "react-icons/fc";
import { FaAngleLeft, FaSquareGithub, FaSquareGitlab } from "react-icons/fa6";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import Link from "next/link";
import React, { useState } from "react";

const RegisterPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isOtherLoginOptions, setIsOtherLoginOptions] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-white rounded-4xl p-6 md:p-8">
      <article className="w-full">
        <h3 className="w-full text-center text-2xl leading-normal">
          Hi there, welcome to <span className="text-[#122620]">WorkNest</span>{" "}
          !
        </h3>

        <p className="text-base text-center mt-2">
          Your team is waiting. Register now.
        </p>
      </article>

      {!isOtherLoginOptions && (
        <form className=" w-full" onSubmit={handleSubmit}>
          <PrimaryInput
            type="text"
            label="full name"
            name="fullName"
            placeholder="Enter your first name"
          />
          <PrimaryInput
            type="text"
            label="username"
            name="userName"
            placeholder="Enter your user name"
          />
          <PrimaryInput
            type="text"
            label="company name"
            name="companyName"
            placeholder="Enter your company name"
          />
          <PrimaryInput
            type="text"
            label="email"
            name="email"
            placeholder="Enter your email address"
          />
          <PrimaryInput
            isPassword={true}
            label="password"
            name="password"
            placeholder="Enter your password"
            setIsPasswordVisible={setIsPasswordVisible}
            isPasswordVisible={isPasswordVisible}
          />

          <AuthButton title="register" marginTop="my-5" />
        </form>
      )}

      {isOtherLoginOptions && (
        <section className="w-full py-4">
          <div className="w-full">
            <button
              className="w-full max-w-[200px] cursor-pointer text-base capitalize flex items-center gap-3"
              onClick={() => setIsOtherLoginOptions(false)}
            >
              <FaAngleLeft /> Continue with email
            </button>
          </div>
          <OtherAuthButtons icon={<FcGoogle />} title="Register with Google" />
          <OtherAuthButtons
            icon={<FaSquareGithub />}
            title="Register with Github"
          />
          <OtherAuthButtons
            icon={<TfiMicrosoftAlt />}
            title="Register with Microsoft"
          />
          <OtherAuthButtons
            icon={<FaSquareGitlab />}
            title="Register with Gitlab"
          />
        </section>
      )}

      <div className="mt-3 w-full">
        {!isOtherLoginOptions && (
          <div className="max-w-[200px] w-full mx-auto">
            <button
              className="cursor-pointer w-full  text-dark-green underline"
              onClick={() => setIsOtherLoginOptions(true)}
            >
              Other Register Options
            </button>
          </div>
        )}
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link href="/register" className="text-dark-green tex-base underline">
            Login.
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
