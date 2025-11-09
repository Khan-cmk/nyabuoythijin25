 import HeroSection from "./components/Sections/HeroSection";
import StatsSection from "./components/Sections/StatsSection";
import AboutSection from "./components/Sections/AboutSection";
import NewInStoreSection from "./components/Sections/NewsInStoreSection";
import ProductsSection from "./components/Sections/ProductsSection";
import TestimonialsSection from "./components/Sections/TestimonialsSection";
import NewsletterSection from "./components/Sections/NewsletterSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <NewInStoreSection />
      <ProductsSection />
      <TestimonialsSection />
      <NewsletterSection />
      <Footer />
    </>
  );
}
