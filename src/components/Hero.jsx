import { motion } from "framer-motion";
import profilePicture from "../assets/profilePicture.jpg";

const Hero = () => {
  return (
    <div
      id="home"
      className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32"
    >
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.66, delay: 0.2 }}
        >
          <img
            src={profilePicture}
            alt=""
            className="w-[150px] h-[150px] cursor-pointer rounded-full shadow-xl hover:-translate-y-5 hover:scale-105 hover:shadow-2xl transition-all duration-300 md:w-[250px] md:h-[250px] object-cover mt-10"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.66, delay: 0.2 }}
          className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
        >
          <h1 className="text-4xl opacity-80">Hi, I'm Nick.</h1>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.66, delay: 0.2 }}
            className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center"
          >
            <p className="text-lg opacity-60">
              I'm a student software developer and audio engineer with a passion
              for audio interfacing software. I am experienced in various
              technologies such as Python, React, Tailwind, and Motion as well as
              audio technologies such as FL Studio, Web Audio API, and WebRTC.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
