import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustStrip } from "@/components/TrustStrip";
import { WhoWeAre } from "@/components/WhoWeAre";
import { CoreCapabilities } from "@/components/CoreCapabilities";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ControlTower } from "@/components/ControlTower";
import { OwnedFleet } from "@/components/OwnedFleet";
import { Industries } from "@/components/Industries";
import { Testimonials } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <WhoWeAre />
        <CoreCapabilities />
        <ServicesGrid />
        <ControlTower />
        <OwnedFleet />
        <Industries />
        <Testimonials />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
