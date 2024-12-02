import Hero from "./_layout/Home/Hero";
import Works from "./_layout/Home/Works";
import About from "./_layout/Home/About";
import Projects from "./_layout/Home/Projects";
import Contact from "./_layout/Home/Contact";
import Skills from "./_layout/Home/Skills";

export default function Home() {
  return (
    <>
      <Hero />
      <Works />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
