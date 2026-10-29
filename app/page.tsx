import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import ProductCategories from "@/components/ProductCategories";
import VisitUs from "@/components/VisitUs";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Marquee />
      <Services />
      <WhyChooseUs />
      <ProductCategories />
      <VisitUs />
      <Footer />
    </main>
  );
}
