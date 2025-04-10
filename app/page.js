// app/home/page.js
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import ResearchHighlights from "@/components/home/ResearchHighlights";
import InternshipCTA from "@/components/home/InternshipCTA";
import InfrastructurePreview from "@/components/home/InfrastructurePreview";
import ContactCTA from "@/components/home/ContactCTA";
import ProjectsPreview from "@/components/home/ProjectsPreview";

export default function HomePage() {
  return (
    <main className="min-h-screen w-full">
      <HeroSection />
      <AboutSection />
      <ResearchHighlights />
      {/* <ProjectsPreview /> */}
      <InternshipCTA />
      <InfrastructurePreview />
      <ContactCTA />
    </main>
  );
}
