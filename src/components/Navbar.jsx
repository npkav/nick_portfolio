import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md">
      <div className="flex w-full items-center justify-between md:justify-evenly">
        <a
          href="#home"
          className="bg-gradient-to-r from-sky-500 from-20% via-yellow-500 via-50% to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
        >
          npkav.dev
        </a>

        {/* regular navigation */}
        <ul className="hidden md:flex gap-10">
          <li>
            <a
              href="#technologies"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
            >
              technologies
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
            >
              projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
            >
              contact
            </a>
          </li>
        </ul>

        {/* social icons */}
        <ul className="hidden md:grid grid-cols-2 gap-4">
          <li>
            <a
              href="https://github.com/npkav"
              target="_blank"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://npkav.dev/resume.pdf"
              target="_blank"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
            >
              <FaFolder />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/npkav/"
              target="_blank"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="https://bsky.app/profile/npkav.bsky.social"
              target="_blank"
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
            >
              <FaBluesky />
            </a>
          </li>
        </ul>

        {/* mobile menu button */}
        <button className="text-xl md:hidden" onClick={toggleMenu}>
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
              <a
                href="#technologies"
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                technologies
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                projects
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
                onClick={toggleMenu}
              >
                contact
              </a>
            </li>
            {/* mobile social icons */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <a
                href="https://github.com/npkav"
                target="_blank"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
              >
                <FaGithub />
              </a>
              <a
                href="https://npkav.dev/resume.pdf"
                target="_blank"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
              >
                <FaFolder />
              </a>
              <a
                href="https://www.linkedin.com/in/npkav/"
                target="_blank"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://bsky.app/profile/npkav.bsky.social"
                target="_blank"
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
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