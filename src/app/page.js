import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero.jsx";
import CapabilitiesStrip from "@/components/CapabilitiesStrip";
import About from "@/components/About.jsx";
import Videos from "@/components/videos.jsx";
import Experience from "@/components/Experience";
import Campaigns from "@/components/Campaigns";
import OurCases from "@/components/OurCases";
import AutomationShowcase from "@/components/AutomationShowcase";
import Stats from "@/components/Stats";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export default function Portfolio() {
  return (
    <main className="bg-[var(--bg)]">
      <Navbar />
      <Hero />
      <CapabilitiesStrip />
      <About />
      <Videos />
      <Experience />
      <Campaigns />
      <OurCases />
      <AutomationShowcase />
      <Stats />
      <Benefits />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
