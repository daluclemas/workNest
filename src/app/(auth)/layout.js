import Image from "next/image";
import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }) => {
  const date = new Date();
  return (
    <section className="w-full   min-h-screen">
      <figure className="hidden xl:block fixed left-0 bottom-0">
        <Image
          src="/images/login/Team-collab.png"
          width={300}
          height={300}
          alt="logo"
          className="object-contain"
        />
      </figure>

      <figure className="hidden xl:block fixed  right-0 top-0">
        <Image
          src="/images/login/teamCollab.png"
          width={300}
          height={300}
          alt="logo"
          className="object-contain"
        />
      </figure>

      <nav className="w-[90%] mx-auto xl:max-w-[1200px] xl:w-full  flex">
        <Link href="/">
          <Image
            src="/images/WORKNestLogo.png"
            width={100}
            height={100}
            alt="logo"
            className="object-contain"
          />
        </Link>
      </nav>

      <div className="w-[90%] mx-auto sm:max-w-[500px] md:w-full ">
        {children}

        <div className="my-4 w-full">
          <h3 className="text-center text-sm">
            All rights reserved by{" "}
            <span className="text-dark-green">WorkNest</span> &copy;{" "}
            {date.getFullYear()}.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AuthLayout;
