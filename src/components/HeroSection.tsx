import heroBg from "@/assets/hero-bg.jpg";
import FadeIn from "./FadeIn";

const HeroSection = () => (
  <section className="relative h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroBg})` }}
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-primary/75" />

    <div className="relative z-10 text-center px-6 max-w-3xl">
      <FadeIn>
        <div className="w-16 h-[2px] bg-accent mx-auto mb-8" />
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-medium text-primary-foreground leading-tight tracking-wide">
          Competenza.
          <br />
          Strategia.
          <br />
          Tutela.
        </h1>
        <div className="w-16 h-[2px] bg-accent mx-auto mt-8 mb-6" />
      </FadeIn>
      <FadeIn delay={0.3}>
        <p className="font-serif text-lg md:text-xl text-gold italic">
          Avv. Marco Brenna — Studio Legale
        </p>
      </FadeIn>
      <FadeIn delay={0.5}>
        <a
          href="#studio"
          className="inline-block mt-10 px-8 py-3 border border-accent text-accent text-sm tracking-[0.2em] uppercase hover:bg-accent hover:text-accent-foreground transition-all duration-500"
        >
          Scopri lo Studio
        </a>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
