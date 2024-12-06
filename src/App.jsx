import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="fixed -z-10 min-h-screen w-full bg-slate-900">
      <motion.div
        className="fixed -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#87CEEB33_1px,transparent_1px),linear-gradient(to_bottom,#87CEEB15_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        animate={{
          y: [24, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1,
          ease: "linear",
        }}
      />
      <main className="flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Hero />
        <Projects />
        <Technologies />
        <Contact />
      </main>
    </div>
  )
}

export default App;