import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
// import Features from "./components/Features";
// import Pricing from "./components/Pricing";
// import Testimonials from "./components/Testimonials";
// import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { Scroll } from "lucide-react";
// import { Contact } from "lucide-react";

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 50);
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      <Navbar scrolled={scrolled} />
      <Hero />
      <About/>
      <Services />
      <Contact />
      <ScrollToTop />
      <Footer/>
      {/* <Features />
      <Pricing />
      <Testimonials />
      <Footer />  */}
    </div>
  );
}

export default App;
