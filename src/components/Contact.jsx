import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div id="contact" className="flex min-h-[100vh] w-full max-w-[1400px] mx-auto flex-col items-center justify-center gap-4 md:gap-8 text-white pt-36">
      <motion.h1 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ duration: 2 }}
        className="text-4xl opacity-80 md:text-5xl lg:text-6xl"
      >
        Send me an email!
      </motion.h1>
      <motion.form 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="flex flex-col items-right justify-center gap-4 bg-transparent p-10 rounded-lg"
      >
        <motion.input 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          type="text" 
          placeholder="Name" 
          className="bg-transparent border-2 border-white p-2 rounded-lg w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]" 
        />
        <motion.input 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          type="email" 
          placeholder="Email" 
          className="bg-transparent border-2 border-white p-2 rounded-lg w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]" 
        />
        <motion.textarea 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          placeholder="Message" 
          className="bg-transparent border-2 border-white p-2 rounded-lg w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]" 
        />
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 1.7 }}
          type="submit" 
          className="bg-transparent border-2 border-white p-2 rounded-lg w-[300px] sm:w-[450px] md:w-[600px] lg:w-[750px]"
        >
          Send
        </motion.button> 
      </motion.form>
    </div>
  )
}

export default Contact