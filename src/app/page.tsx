import Hero from "@/Components/Hero/Hero";
import Navigation from "@/Components/Navigation/Navigation";
import Services from "@/Components/Services/Services";

export default function Home() {
  return (
    <main className="flex bg-white min-h-screen flex-col items-center justify-between">
      <Navigation />
      <Hero />
      <Services />
      <section id="about-us" className="about-us"></section>
      <section id="cta-cards" className="cta-cards"></section>
      <section id="reviews" className="reviews"></section>
      <footer id="footer" className="footer"></footer>
    </main>
  );
}
