import { About } from "@/components/main/About";
import { Contacts } from "@/components/main/Contacts";
import { Hero } from "@/components/main/Hero";
import { Projects } from "@/components/main/Projects";
import { Questions } from "@/components/main/Questions";
import { Stack } from "@/components/main/Stack";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Stack />
      <Projects />
      <Questions />
      <Contacts />
    </main>
  );
}
