import Hero from "./_layout/Home/Hero";
import Works from "./_layout/Home/Works";
import About from "./_layout/Home/About";
import Projects from "./_layout/Home/Projects";
import Contact from "./_layout/Home/Contact";
import Skills from "./_layout/Home/Skills";
import DarkMode from "./_components/DarkMode";
import PageTransition from "./_components/animations/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <main className="relative">
        <Hero />
        <Works />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <DarkMode />
      </main>
    </PageTransition>
  );
}
