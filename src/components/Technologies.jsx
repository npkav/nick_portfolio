import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiWebrtc } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { SiAffinityphoto } from "react-icons/si";

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex min-h-[70vh] w-full max-w-[800px] mx-auto flex-col items-center justify-center gap-8 md:gap-16 text-white"
    >
      <h1 className="text-4xl opacity-80">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <BiLogoPython />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Python</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiJavascript />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">JavaScript</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiReact />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">React</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiTailwindcss />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Tailwind CSS</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiBootstrap />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Bootstrap</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiWebrtc />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">WebRTC</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiFramer />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Framer</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiFigma />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Figma</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiTrello />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Trello</span>
        </div>
        <div className="flex flex-col items-center group">
          <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
            <SiAffinityphoto />
          </div>
          <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">Affinity Photo</span>
        </div>
      </div>
    </div>
  );
};

export default Technologies;
