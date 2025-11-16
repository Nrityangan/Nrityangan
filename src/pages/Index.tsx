import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import DancePrograms from "@/components/DancePrograms";
import Teacher from "@/components/Teacher";
import Reviews from "@/components/Reviews";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <DancePrograms />
      <Teacher />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
