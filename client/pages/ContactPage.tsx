import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <main className="pt-24">
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
