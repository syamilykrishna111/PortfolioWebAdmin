import Header from "@/components/default/Header";
import ContactPageTitle from "@/components/default/contact/ContactPageTitle";
import ContactInfo from "@/components/default/contact/ContactInfo";
import ContactForm from "@/components/default/contact/ContactForm";

export default function ContactPage() {
  return (
    <main className="main">
      <Header />
      <ContactPageTitle />
      <section id="contact" className="contact section">
        <div className="container">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </main>
  );
}