import { motion } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen w-full overflow-y-auto bg-slate-900">
      <motion.div
        className="fixed inset-0 min-h-screen w-full bg-[linear-gradient(to_right,#87CEEB33_1px,transparent_1px),linear-gradient(to_bottom,#87CEEB15_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
        animate={{
          x: [14, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 0.3,
          ease: "linear",
        }}
      />
      <main className="relative z-10 flex flex-col items-center px-4 md:px-8 lg:px-16">
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/technologies" element={<Technologies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  )
}

export default App;