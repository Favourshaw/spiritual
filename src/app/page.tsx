import MusicPlayer from "@/components/music-player";
import Navbar from "@/components/nav";
import Hero from "./home/hero";
import Testimonials from "@/components/testimonial";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main className="pt-20">
        {" "}
        <MusicPlayer />
        <Hero />
        <section id="services"> {/* Your services section here */}</section>
        <section id="testimonials">
          <Testimonials />
        </section>
      </main>
    </>
  );
}
