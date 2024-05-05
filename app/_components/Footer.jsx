import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <a href="#hero" className="back-top">
        <i className="fa-solid fa-angles-up fa-bounce"></i>
        <p>Go To Top</p>
        <i className="fa-solid fa-angles-up fa-bounce"></i>
      </a>
      <ul className="social">
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="mailto:alvirhasan.dev@gmail.com"
          >
            <i className="fa-regular fa-envelope"></i>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/codescorpio14"
          >
            <i className="fa-brands fa-github"></i>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://facebook.com/1alvir"
          >
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </li>
        <li>
          <Link
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/1alvir"
          >
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
        </li>
      </ul>
      <p>2023 © All Rights Reserved by Alvir.</p>
    </footer>
  );
};

export default Footer;
