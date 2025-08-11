import Navbar from "@/components/Navbar";
import "./section-animations.css";
import Hero from "@/components/Hero";
import AboutUmunhzinLink from "@/components/AboutUmunhzinLink";
import WhoWeServe from "@/components/WhoWeServe";
import PlatformFeatures from "@/components/PlatformFeatures";
import HowItWorks from "@/components/HowItWorks";
import IntuitiveDashboards from "@/components/IntuitiveDashboards";
import ImpactStories from "@/components/ImpactStories";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white">
      <section id="home" className="section-fade-up section-delay-1">
        <Navbar />
        <Hero />
      </section>
      <section id="features" className="section-fade-up section-delay-2">
        <AboutUmunhzinLink/>
        <WhoWeServe/>
        <PlatformFeatures/>
      </section>
      <section id="agribusiness" className="section-fade-up section-delay-3">
        <HowItWorks/>
        <IntuitiveDashboards/>
      </section>
      <section id="lenders" className="section-fade-up section-delay-4">
        <ImpactStories/>
      </section>
      <section id="contact" className="section-fade-up section-delay-5">
        <CallToAction/>
        <Footer/>
      </section>
      
    </main>
  );
}
