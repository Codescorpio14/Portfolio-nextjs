"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header className="flex justify-between items-center px-4 py-4">
      <Image
        src="/image/Logo.png"
        className="w-24 md:w-32 h-auto dark:invert"
        width={504}
        height={128}
        alt="logo"
      />

      <button
        className="bg-inherit text-2xl hover:text-violet-400 lg:hidden"
        onClick={() => setMobileNav((p) => !p)}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

      <nav
        className={`${
          mobileNav && "translate-x-0"
        } fixed inset-0 top-14 transition-transform ease-out translate-x-[200%] lg:translate-x-0 lg:static`}
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
            <Link className="nav-links" href="../#Contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
