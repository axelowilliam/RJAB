import TestNavbar from "@/components/test/TestNavbar";
import TestHero from "@/components/test/TestHero";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function TestPage() {
  return (
    <>
      <TestNavbar />
      <main>
        <TestHero />
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
