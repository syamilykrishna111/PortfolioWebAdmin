import ServicesPageTitle from "@/components/default/services/ServicesPageTitle";
import ServicesSection from "@/components/default/services/ServicesSection";
import Header from "@/components/default/Header";
import Footer from "@/components/default/Footer";
import ScrollTop from "@/components/default/ScrollTop";

export default function ServicesPage() {
  return (
    <main className="main">
    <Header/>
      <ServicesPageTitle />
      <ServicesSection/>
      <Footer/>
    <ScrollTop />
    </main>
  );
}