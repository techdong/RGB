import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeSection from "@/sections/Home";
import ProjectsSection from "@/sections/Projects";
import SkillsSection from "@/sections/Skills";
import AboutSection from "@/sections/About";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <HomeSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
}
