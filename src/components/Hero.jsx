import { motion } from "framer-motion";
import profile from "../assets/profile.png";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <img
            src={profile}
            alt=""
            className="w-[150px] h-[150px] cursor-pointer hover:scale-105 transition-all duration-300 md:w-[250px] md:h-[250px] lg:w-[300px] lg:h-[300px] object-cover mt-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.66, delay: 0.2 }}
          className="flex max-w-[800px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="text-4xl opacity-80 md:text-5xl lg:text-6xl">Hi, I'm Nick.</h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 0.5 }}
            className="flex max-w-[800px] flex-col items-center justify-center gap-3 text-center"
          >
            <p className="text-lg opacity-60 md:text-xl lg:text-2xl">
              I'm a student software developer and multimedia engineer with a passion
              for audio interfacing software. I am experienced in various
              technologies such as Python, React, Tailwind, and Motion as well as
              audio/video technologies such as FL Studio, Affinity Photo, and WebRTC.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
