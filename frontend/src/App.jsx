import Navbar   from "./components/Navbar";
import Home     from "./pages/Home";
import About    from "./pages/About";
import Projects from "./pages/Projects";
import Contact  from "./pages/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
