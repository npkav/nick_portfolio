import { SiJavascript } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoPython } from "react-icons/bi";
import { SiBootstrap } from "react-icons/si";
import { SiGit } from "react-icons/si";
import { SiFigma } from "react-icons/si";
import { SiWebrtc } from "react-icons/si";
import { SiTrello } from "react-icons/si";
import { SiAffinityphoto } from "react-icons/si";

const technologiesData = [
  {
    icon: BiLogoPython,
    name: "Python"
  },
  {
    icon: SiJavascript,
    name: "JavaScript"
  },
  {
    icon: SiReact,
    name: "React"
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS"
  },
  {
    icon: SiBootstrap,
    name: "Bootstrap"
  },
  {
    icon: SiWebrtc,
    name: "WebRTC"
  },
  {
    icon: SiGit,
    name: "Git"
  },
  {
    icon: SiFigma,
    name: "Figma"
  },
  {
    icon: SiTrello,
    name: "Trello"
  },
  {
    icon: SiAffinityphoto,
    name: "Affinity Photo"
  }
];

const TechnologyCard = ({ Icon, name }) => (
  <div className="flex flex-col items-center group">
    <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
      <Icon />
    </div>
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">
      {name}
    </span>
  </div>
);

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex min-h-[70vh] w-full max-w-[800px] mx-auto flex-col items-center justify-center gap-4 md:gap-8 text-white"
    >
      <h1 className="text-4xl opacity-80">Technologies</h1>
      <div className="flex flex-wrap items-center justify-center gap-12 p-5">
        {technologiesData.map((tech, index) => (
          <TechnologyCard key={index} Icon={tech.icon} name={tech.name} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
