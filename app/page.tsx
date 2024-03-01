import Events from "@/components/Events";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Contact from "@/components/Contact";
import Schedule from "@/components/Schedule";
import FAQ from "@/components/FAQ";
import Accomodation from "@/components/Accomodation";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Events />
        <Schedule />
        {/* <Accomodation /> */}
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
