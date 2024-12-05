import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaFolder } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 flex w-full items-center justify-between border-b border-b-gray-700 bg-black/70 px-16 py-6 text-white backdrop-blur-md md:justify-evenly">
      <a href="#home" className="bg-gradient-to-r from-blue-500 from-20% via-yellow-500 via-50% to-pink-500 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100">npkav.dev</a>
      <ul className="hidden md:flex gap-10">
        <li>
          <a href="#technologies" className="transition-all duration-300 opacity-40 hover:opacity-100 text-lg">Technologies</a>
        </li>
        <li>
          <a href="#projects" className="transition-all duration-300 opacity-40 hover:opacity-100 text-lg">Projects</a>
        </li>
        <li>
          <a href="#contact" className="transition-all duration-300 opacity-40 hover:opacity-100 text-lg">Contact</a>
        </li>
      </ul>
      <ul className="hidden md:grid grid-cols-2 gap-4">
        <li>
          <a href="https://github.com/npkav" target="_blank" className="transition-all duration-300 opacity-40 hover:opacity-100"><FaGithub /></a>
        </li>
        <li>
          <a href="https://npkav.dev/resume.pdf" target="_blank" className="transition-all duration-300 opacity-40 hover:opacity-100"><FaFolder /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/npkav/" target="_blank" className="transition-all duration-300 opacity-40 hover:opacity-100"><FaLinkedin /></a>
        </li>
        <li>
          <a href="https://bsky.app/profile/npkav.bsky.social" target="_blank" className="transition-all duration-300 opacity-40 hover:opacity-100"><FaBluesky /></a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar