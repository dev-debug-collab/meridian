import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Services from "@/components/services";
import Industries from "@/components/industries";
import WhyChooseUs from "@/components/why-choose-us";
import Process from "@/components/process";
import Stats from "@/components/stats";
import Projects from "@/components/projects";
import Testimonials from "@/components/testimonials";
import FAQ from "@/components/faq";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Industries />
      <WhyChooseUs />
      <Process />
      <Stats />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
