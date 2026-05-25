import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
import AboutSection from "@/components/AboutSection";
import LogoMarquee from "@/components/LogoMarquee";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden" >
      
      <Loader />
      <ScrollProgress />
      <MouseGlow />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <LogoMarquee />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}