import { Background } from "@/components/layout/Background";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { Contact } from "@/components/sections/Contact";
import { Education } from "@/components/sections/Education";
import { Experience } from "@/components/sections/Experience";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Hero } from "@/components/sections/Hero";
import { Skills } from "@/components/sections/Skills";
import { Videos } from "@/components/sections/Videos";

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      <main>
        <Hero />
        <Experience />
        <FeaturedProjects />
        <Videos />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
