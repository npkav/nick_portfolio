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
    <div id="technologies" className="flex min-h-[70vh] w-full max-w-[800px] mx-auto flex-col items-center justify-center gap-16 md:gap-32 text-white">
      <h1 className="text-4xl opacity-80">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-10 p-5">
      <div>
          <BiLogoPython className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiJavascript className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiReact className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiTailwindcss className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiBootstrap className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiFramer className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiFigma className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiWebrtc className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
        <div>
          <SiTrello className="cursor-pointer text-[100px] opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-300"/>
        </div>
      </div>
    </div>
  )
}

export default Technologies 