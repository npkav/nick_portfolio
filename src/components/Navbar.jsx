import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col items-center justify-between bg-slate-950/90 px-16 py-6 text-white backdrop-blur-md">
      <div className="flex w-full items-center justify-between md:justify-evenly">
        <Link
          to="/"
          className="bg-gradient-to-r from-sky-500 from-20% via-yellow-500 via-50% to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100 hover:scale-105"
        >
          [npkav.dev]
        </Link>

        {/* regular navigation */}
        <ul className="hidden md:flex gap-10">
          <li>
            <Link
              to="/technologies"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500 hover:scale-105"
            >
              [technologies]
            </Link>
          </li>
          <li>
            <Link
              to="/projects"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500 hover:scale-105"
            >
              [projects]
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-pink-500 hover:scale-105"
            >
              [contact]
            </Link>
          </li>
        </ul>

        {/* social icons */}
        <ul className="hidden md:grid grid-cols-2 gap-4">
          <li>
            <a
              href="https://github.com/npkav"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://npkav.dev/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500 hover:scale-110"
            >
              <FaFolder />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/npkav/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-110"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/npkav.bsky.social"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500 hover:scale-110"
            >
              <FaBluesky />
            </a>
          </li>
        </ul>

        {/* mobile menu button */}
        <button className="text-xl md:hidden opacity-40 transition-all duration-300 hover:opacity-100" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* mobile navigation */}
      <div className={`md:hidden w-full overflow-hidden transition-all duration-300 ease-in-out ${
        isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="mt-4">
          <ul className="flex flex-col items-center gap-4">
            <li>
              <Link
                to="/technologies"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-105"
              >
                [technologies]
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-105"
              >
                [projects]
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={() => setIsMenuOpen(false)}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-105"
              >
                [contact]
              </Link>
            </li>
            {/* mobile social icons */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <a
                href="https://github.com/npkav"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-110"
              >
                <FaGithub />
              </a>
              <a
                href="https://npkav.dev/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500 hover:scale-110"
              >
                <FaFolder />
              </a>
              <a
                href="https://www.linkedin.com/in/npkav/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:scale-110"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://bsky.app/profile/npkav.bsky.social"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500 hover:scale-110"
              >
                <FaBluesky />
              </a>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;