import Nav from "@/components/Nav";
import TerminalHero from "@/components/TerminalHero";
import About from "@/components/About";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Nav />
      <TerminalHero />
      <About />
      <Stack />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
