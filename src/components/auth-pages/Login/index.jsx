"use client";
import AuthButton from "@/components/shared-components/buttons/AuthButton";
import OtherAuthButtons from "@/components/shared-components/buttons/OtherAuthButtons";
import PrimaryInput from "@/components/shared-components/inputs/PrimaryInput";
import { FcGoogle } from "react-icons/fc";
import { FaAngleLeft, FaSquareGithub, FaSquareGitlab } from "react-icons/fa6";
import { TfiMicrosoftAlt } from "react-icons/tfi";
import Link from "next/link";
import React, { useState } from "react";

const LoginPage = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isOtherLoginOptions, setIsOtherLoginOptions] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="w-full shadow-[0px_0px_10px_rgba(0,0,0,0.1)] bg-white rounded-4xl p-6 md:p-8">
      <article className="w-full">
        <h3 className="w-full text-center text-2xl leading-normal">
          Welcome back to <span className="text-[#122620]">WorkNest</span> !
        </h3>

        <p className="text-base text-center mt-2">
          Log in to your workspace to continue.
        </p>
      </article>

      {!isOtherLoginOptions && (
        <form className=" w-full" onSubmit={handleSubmit}>
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

          <div className="w-full flex items-center gap-3 justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                name="remember-me"
                id="rememberMe"
                className="accent-dark-green"
              />

              <label htmlFor="rememberMe">Remember me?</label>
            </div>

            <Link
              href="/forgot-password"
              className="text-sm text-dark-green underline"
            >
              Forgot Password?
            </Link>
          </div>

          <AuthButton />
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
          <OtherAuthButtons icon={<FcGoogle />} title="Login with Google" />
          <OtherAuthButtons
            icon={<FaSquareGithub />}
            title="Login with Github"
          />
          <OtherAuthButtons
            icon={<TfiMicrosoftAlt />}
            title="Login with Microsoft"
          />
          <OtherAuthButtons
            icon={<FaSquareGitlab />}
            title="Login with Gitlab"
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
              Other Login Options
            </button>
          </div>
        )}
        <p className="text-center mt-3">
          No account?{" "}
          <Link href="/register" className="text-dark-green tex-base underline">
            Create One
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
