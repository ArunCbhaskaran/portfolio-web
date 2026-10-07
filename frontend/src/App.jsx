import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";
import ParticleDrift from "./components/originkit/ui/particle-drift";

export default function App() {
  return (
    <>
      <div className="fixed top-0 left-0 w-screen h-screen z-[-1] overflow-hidden pointer-events-none">
        <ParticleDrift 
          baseColor="#E8DFC9" 
          accentColor="#FFBD2E" 
          density={100} 
          style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }} 
          background="#0B0B0B"
        />
      </div>

      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
