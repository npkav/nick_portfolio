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
  
  /* scroll to section function */
  const scrollToSection = (sectionId) => {
    const targetElement = document.getElementById(sectionId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-10 flex w-full flex-col items-center justify-between border-b border-b-gray-700 bg-slate-950/90 px-16 py-6 text-white backdrop-blur-md">
      <div className="flex w-full items-center justify-between md:justify-evenly">
        <button
          onClick={() => scrollToSection('home')}
          className="bg-gradient-to-r from-sky-500 from-20% via-yellow-500 via-50% to-pink-500 bg-clip-text text-3xl font-semibold text-transparent opacity-80 transition-all duration-300 hover:opacity-100"
        >
          [npkav.dev]
        </button>

        {/* regular navigation */}
        <ul className="hidden md:flex gap-10">
          <li>
            <button
              onClick={() => scrollToSection('technologies')}
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
            >
              [technologies]
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('projects')}
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
            >
              [projects]
            </button>
          </li>
          <li>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-lg opacity-40 transition-all duration-300 hover:opacity-100 hover:text-pink-500"
            >
              [contact]
            </button>
          </li>
        </ul>

        {/* social icons */}
        <ul className="hidden md:grid grid-cols-2 gap-4">
          <li>
            <button
              onClick={() => window.open('https://github.com/npkav', '_blank')}
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
            >
              <FaGithub />
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open('https://npkav.dev/resume.pdf', '_blank')}
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
            >
              <FaFolder />
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open('https://www.linkedin.com/in/npkav/', '_blank')}
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
            >
              <FaLinkedin />
            </button>
          </li>
          <li>
            <button
              onClick={() => window.open('https://bsky.app/profile/npkav.bsky.social', '_blank')}
              className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
            >
              <FaBluesky />
            </button>
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
              <button
                onClick={() => scrollToSection('technologies')}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
              >
                [technologies]
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('projects')}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
              >
                [projects]
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-lg opacity-40 transition-all duration-300 hover:opacity-100"
              >
                [contact]
              </button>
            </li>
            {/* mobile social icons */}
            <div className="grid grid-cols-4 gap-4 mt-4">
              <button
                onClick={() => window.open('https://github.com/npkav', '_blank')}
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
              >
                <FaGithub />
              </button>
              <button
                onClick={() => window.open('https://npkav.dev/resume.pdf', '_blank')}
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-yellow-500"
              >
                <FaFolder />
              </button>
              <button
                onClick={() => window.open('https://www.linkedin.com/in/npkav/', '_blank')}
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100"
              >
                <FaLinkedin />
              </button>
              <button
                onClick={() => window.open('https://bsky.app/profile/npkav.bsky.social', '_blank')}
                className="text-xl opacity-40 transition-all duration-300 hover:opacity-100 hover:text-sky-500"
              >
                <FaBluesky />
              </button>
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;