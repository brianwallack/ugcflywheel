import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandMarquee from "@/components/BrandMarquee";
import VideoSection from "@/components/VideoSection";
import Testimonials from "@/components/Testimonials";
import Directors from "@/components/Directors";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <Navbar />
      <main className="flex-1 w-full">
        <Hero />
        <BrandMarquee />
        <VideoSection />
        <Testimonials />
        <Directors />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
