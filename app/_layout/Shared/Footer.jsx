import TextAnimation from "@/app/_components/animations/TextAnimation";
import TextSlideIn from "@/app/_components/animations/TextSlideIn";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-sky-50 ">
      <Link
        href="#header"
        className="bg-neutral-950 flex justify-center items-center py-4 gap-4 hover:text-violet-400 transition-colors duration-300 dark:bg-neutral-800"
      >
        <i className="fa-solid fa-angles-up fa-bounce"></i>
        <p className="uppercase">Go To Top</p>
        <i className="fa-solid fa-angles-up fa-bounce"></i>
      </Link>

      <div className="grid gap-12 lg:grid-cols-3 p-8">
        <div className="lg:text-left space-y-4 lg:pr-4 lg:border-r-2">
          <TextSlideIn>
            <h2 className="text-xl font-bold">
              Alvir Hasan <br />
              <span className="text-sm">Fullstack-Developer</span>
            </h2>
          </TextSlideIn>
          <TextSlideIn>
            <p className="text-md">
              Passionate about creating responsive and interactive web
              experiences, I’m Aminul Hasan Alvir, a full-stack developer
              dedicated to turning ideas into functional designs.
            </p>
          </TextSlideIn>

          <TextAnimation>
            <ul className="flex gap-8 text-2xl">
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="mailto:alvirhasan.dev@gmail.com"
                >
                  <i className="fa-regular hover:text-violet-400  fa-envelope"></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/codescorpio14"
                >
                  <i className="fa-brands  hover:text-violet-400 fa-github"></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://facebook.com/1alvir"
                >
                  <i className="fa-brands  hover:text-violet-400 fa-facebook"></i>
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.linkedin.com/in/1alvir"
                >
                  <i className="fa-brands  hover:text-violet-400 fa-linkedin-in"></i>
                </Link>
              </li>
            </ul>
          </TextAnimation>
        </div>

        <TextSlideIn>
          <h4 className="text-xl font-semibold mb-4">Navigation Links:</h4>

          <ul className="flex lg:flex-col gap-4 lg:gap-2">
            <li>
              <a
                className="hover:text-violet-400 transition-colors"
                href="#hero"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-400 transition-colors"
                href="#about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-400 transition-colors"
                href="#projects"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                className="hover:text-violet-400 transition-colors"
                href="#contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </TextSlideIn>
        <div>
          <h3 className="text-xl font-semibold mb-4">Newsletter:</h3>
          <form className="flex items-end">
            <label htmlFor="newsletter" className="text-sm">
              For Latest Updates
              <input
                type="email"
                className="w-full bg-gray-600 rounded-l-md mt-2 outline-none p-2"
                name="newsletter"
                id="newsletter"
                disabled
              />
            </label>
            <button
              className="bg-yellow-300 rounded-r-md px-4 py-[7px] font-semibold hover:bg-amber-300 text-neutral-900"
              disabled
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <p className="bg-neutral-950  py-4 pl-8 dark:bg-neutral-800">
        2023 © All Rights Reserved by-
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/codescorpio14"
          className="text-blue-400 underline hover:text-violet-400"
        >
          CodeScorpio14(Alvir)
        </Link>
      </p>
    </footer>
  );
};

export default Footer;
