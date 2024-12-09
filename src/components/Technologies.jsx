import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";
import { SiFramer } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiWebrtc } from "react-icons/si";
import { SiTrello } from "react-icons/si";

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex min-h-[70vh] w-full max-w-[800px] mx-auto flex-col items-center justify-center gap-8 md:gap-16 text-white"
    >
      <h1 className="text-4xl opacity-80">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <BiLogoPython />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiJavascript />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiReact />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiTailwindcss />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiBootstrap />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiFramer />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiFigma />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiWebrtc />
        </div>
        <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-300">
          <SiTrello />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
