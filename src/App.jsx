import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Technologies from './components/Technologies';
import Contact from './components/Contact';

function App() {
  return (
    <div className="fixed -z-10 min-h-screen w-full bg-slate-950">
      <div className="fixed -z-10 min-h-screen w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
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