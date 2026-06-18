import Header from "@/components/default/Header";
import Footer from "@/components/default/Footer";
import ScrollTop from "@/components/default/ScrollTop";
import BlogSection from "@/components/default/blog/BlogSection";
import BlogPageTitle from "@/components/default/blog/BlogPageTitle";

export default function BlogPage() {
  return (
    <main className="main">
      <Header />
      <BlogPageTitle />
      <BlogSection />
      <Footer />
      <ScrollTop />
    </main>
  );
}