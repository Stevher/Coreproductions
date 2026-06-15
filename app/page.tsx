import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Clients } from "@/components/Clients";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Assurance } from "@/components/Assurance";
import { Process } from "@/components/Process";
import { MidCTA } from "@/components/MidCTA";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Clients />
      <About />
      <Services />
      <Assurance />
      <Process />
      <MidCTA />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
