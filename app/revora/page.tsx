import Header from "@/components/revora/Header";
import Hero from "@/components/revora/Hero";
import DashboardPreview from "@/components/revora/DashboardPreview";
import Features from "@/components/revora/Features";
import HowItWorks from "@/components/revora/HowItWorks";
import Industries from "@/components/revora/Industries";
import Pricing from "@/components/revora/Pricing";
import FAQ from "@/components/revora/FAQ";
import CTA from "@/components/revora/CTA";
import Footer from "@/components/revora/Footer";
export const metadata = {
  title: "Revora AI | AI Powered Google Review Management",
  description:
    "Collect more Google Reviews with AI, QR Codes and smart reputation management.",
};
export default function RevoraPage() {
  return (
    <>
      <Header />
      <Hero />
      <DashboardPreview />
      <Features />
      <HowItWorks />
      <Industries />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}
