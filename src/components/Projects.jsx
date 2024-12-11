import { motion } from "framer-motion";
import dicepti_logo from "../assets/dicepti_logo.png";
import mpms_logo from "../assets/mpms_logo.png";
import pupper_logo from "../assets/pupper_logo.png";
import stacks_logo from "../assets/stacks_logo.svg";

const projectsData = [
  {
    title: "Monike Porter Music Studio",
    description: "A music lessons studio run by my wife and I. Website built in Wix with some custom HTML/CSS. Update soon!",
    technologies: ["Wix", "HTML", "CSS"],
    image: mpms_logo,
    indexNo: 0,
    url: "https://www.mpms.ca"
  },
  {
    title: "DiCepti Luxury Automotives",
    description: "A mock automotive dealership website built for a class project.",
    technologies: ["Bootstrap", "JavaScript"],
    image: dicepti_logo,
    indexNo: 1,
    url: ""
  },
  {
    title: "PupperPicker",
    description: "A dog picture gallery website using the Dog CEO API.",
    technologies: ["React", "JavaScript"],
    image: pupper_logo,
    indexNo: 2,
    url: ""
  },
  {
    title: "Stacks",
    description: "A mock trading card game storefront made alongside Evan Kavanagh and Vanessa Maher.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image: stacks_logo,
    indexNo: 3,
    url: ""
  },
];

const ProjectCard = ({ project, indexNo }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{
      duration: 1,
      delay: 0.8 + indexNo * 0.4
    }}
    onClick={() => window.open(project.url, '_blank')}
    className="flex flex-col items-center group w-[300px] h-[400px] bg-slate-800 rounded-lg p-6 cursor-pointer hover:scale-105 transition-all duration-300"
  >
    <div className="w-full h-1/2 flex items-center justify-center mb-4">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-auto h-auto max-h-[150px] max-w-[150px] object-contain rounded-lg opacity-60 group-hover:opacity-100 transition-all duration-300"
      />
    </div>
    <div className="w-full space-y-4 text-center">
      <h2 className="text-2xl font-bold">{project.title}</h2>
      <p className="text-sm opacity-80 line-clamp-3">{project.description}</p>
      <div className="flex flex-wrap gap-2 justify-center">
        {project.technologies.map((tech, index) => (
          <span key={index} className="px-3 py-1 bg-slate-700 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-[100vh] w-full max-w-[1400px] mx-auto flex-col items-center justify-center gap-4 md:gap-8 text-white pt-36">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ 
          duration: 2,
        }}
        className="text-4xl opacity-80"
      >
        Projects
      </motion.h1>
      <div className="flex flex-wrap items-center justify-center gap-12 p-5">
        {projectsData.map((project, index) => (
          <ProjectCard key={index} project={project} indexNo={index} />
        ))}
      </div>
    </div>
  );
};

export default Projects;