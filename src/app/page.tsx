import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { Hobbies } from "@/components/Hobbies";
import { SiteFooter } from "@/components/SiteFooter";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="overflow-x-clip">
      <Hero />
      <About />
      <Hobbies />
      <Experience />
      <Skills />
      <Contact />
      <SiteFooter />
    </main>
  );
}
