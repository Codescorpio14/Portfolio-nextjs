"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import NavBarLinks from "@/app/_components/animations/NavBarLinks";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header
      id="header"
      className="flex lg:container justify-between items-center px-4 py-4"
    >
      <Image
        src="/image/Logo.png"
        className="w-24 md:w-32 h-auto dark:invert"
        width={504}
        height={128}
        alt="logo"
      />

      <button
        className="bg-inherit text-2xl hover:text-violet-400 lg:hidden"
        onClick={() => setMobileNav((prev) => !prev)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <NavBarLinks
        className={`${
          mobileNav ? "translate-x-0" : "translate-x-[200%]"
        } fixed inset-4 top-14 transition-transform duration-500 ease-out lg:translate-x-0 lg:static`}
      >
        <ul
          className="bg-neutral-900 text-sky-50 text-center py-8 space-y-2 font-semibold lg:bg-inherit items-center lg:py-0 lg:space-y-0 lg:flex lg:gap-4 lg:text-neutral-900 lg:dark:text-sky-100"
          onClick={() => setMobileNav(false)}
        >
          <li>
            <Link className="nav-links" href="../#hero">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="../#about">
              About
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="../#projects">
              Projects
            </Link>
          </li>
          <li>
            <Link className="nav-links" href="../#contact">
              Contact
            </Link>
          </li>
        </ul>
      </NavBarLinks>
    </header>
  );
};

export default Header;
