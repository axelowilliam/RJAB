import Navbar from "@/components/test/TestNavbar";
import Hero from "@/components/test/TestHero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <WhyUs />
        <FAQ />
        <Contact />
      </main>
      <Footer />

    </>
  );
}
