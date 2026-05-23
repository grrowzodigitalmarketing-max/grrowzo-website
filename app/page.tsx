import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import PortfolioSection from "@/components/PortfolioSection";
import SmoothScroll from "@/components/SmoothScroll";
import MouseGlow from "@/components/MouseGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Loader from "@/components/Loader";
import WhatsAppButton from "@/components/WhatsAppButton";
import ContactSection from "@/components/ContactSection";
export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden" >
      <Loader />
      <ScrollProgress />
      <SmoothScroll />
      <MouseGlow />
      <WhatsAppButton />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <StatsSection />
      <TestimonialsSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </main>
  );
}