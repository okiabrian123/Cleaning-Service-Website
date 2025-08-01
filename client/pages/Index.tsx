import { useEffect } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import YourNeeds from "../components/YourNeeds";
import PricesVary from "../components/PricesVary";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Index() {
  useEffect(() => {
    // Smooth scrolling for the page
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-white font-montserrat">
      <Header />
      <Hero />
      <Services />
      <YourNeeds />
      <PricesVary />
      <Contact />
      <Footer />
    </div>
  );
}
