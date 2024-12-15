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
import { motion } from "framer-motion";

const techData = [
  {
    icon: BiLogoPython,
    name: "Python",
    indexNo: 0
  },
  {
    icon: SiJavascript,
    name: "JavaScript",
    indexNo: 1
  },
  {
    icon: SiReact,
    name: "React",
    indexNo: 2
  },
  {
    icon: SiTailwindcss,
    name: "Tailwind CSS",
    indexNo: 3
  },
  {
    icon: SiBootstrap,
    name: "Bootstrap",
    indexNo: 4
  },
  {
    icon: SiWebrtc,
    name: "WebRTC",
    indexNo: 5
  },
  {
    icon: SiGit,
    name: "Git",
    indexNo: 6
  },
  {
    icon: SiFigma,
    name: "Figma",
    indexNo: 7
  },
  {
    icon: SiTrello,
    name: "Trello",
    indexNo: 8
  },
  {
    icon: SiAffinityphoto,
    name: "Affinity Photo",
    indexNo: 9
  }
];

const TechnologyCard = ({ Icon, name, indexNo }) => (
  <motion.div
    initial={{ y: -100, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{
      duration: 1,
      delay: indexNo * 0.2,
    }}
    className="flex flex-col items-center group"
  >
    <div className="text-[50px] sm:text-[75px] md:text-[100px] cursor-pointer opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">
      <Icon />
    </div>
    <span className="opacity-0 group-hover:opacity-100 transition-all duration-300 text-sm mt-2">
      {name}
    </span>
  </motion.div>
);

const Technologies = () => {
  return (
    <div
      id="technologies"
      className="flex min-h-[100vh] w-full max-w-[800px] mx-auto flex-col items-center justify-center gap-4 md:gap-8 text-white pt-20"
    >
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.8 }}
        transition={{ 
          duration: 1,
          delay: 2
        }}
        className="text-4xl opacity-80 md:text-5xl lg:text-6xl"
      >
        Technologies
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 md:gap-12 p-5">
        {techData.map((tech) => (
          <TechnologyCard key={tech.indexNo} Icon={tech.icon} name={tech.name} indexNo={tech.indexNo} />
        ))}
      </div>
    </div>
  );
};

export default Technologies;
