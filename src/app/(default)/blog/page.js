import BlogPageTitle from "@/components/default/blog/BlogPageTitle";
// import AboutSection from "@/components/about/AboutSection";
// import StatsSection from "@/components/about/StatsSection";
// import SkillsSection from "@/components/about/SkillsSection";
// import InterestsSection from "@/components/about/InterestsSection";
// import TestimonialsSection from "@/components/about/TestimonialsSection";
import Header from "@/components/default/Header";
import Footer from "@/components/default/Footer";
import ScrollTop from "@/components/default/ScrollTop";

export default function AboutPage() {
  return (
    <main className="main">
    <Header/>
      <BlogPageTitle />
      {/* <AboutSection />
      <StatsSection />
      <SkillsSection />
      <InterestsSection />
      <TestimonialsSection /> */}
      <Footer/>
    <ScrollTop />
    </main>
  );
}