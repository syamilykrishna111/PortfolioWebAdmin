import Header from "@/components/default/Header";
import AboutHero from "@/components/default/about/AboutHero";
import AboutSection from "@/components/default/about/AboutSection";
import StatsSection from "@/components/default/about/StatsSection";
// import SkillsSection from "@/components/about/SkillsSection";
// import InterestsSection from "@/components/about/InterestsSection";
import TestimonialsSection from "@/components/default/about/TestimonialsSection";

export default function AboutPage() {
  return (
    <main className="main">
      <Header />
      <AboutHero />
      <AboutSection />
      <StatsSection />
      {/* <SkillsSection />
      <InterestsSection /> */}
      <TestimonialsSection />
    </main>
  );
}