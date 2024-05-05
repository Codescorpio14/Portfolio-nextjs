"use client";

import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <header>
      <Image
        src="/image/Logo.png"
        className="logo"
        width={504}
        height={128}
        alt="logo"
      />

      <button className="hamburger" onClick={() => setMobileNav((p) => !p)}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className={`${mobileNav && "nav-toggle"}`}>
        <ul className="nav" onClick={() => setMobileNav(false)}>
          <li>
            <a className="nav-link" href="#hero">
              Home
            </a>
          </li>
          <li>
            <a className="nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="nav-link" href="#Contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
