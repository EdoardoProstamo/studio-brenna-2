import FadeIn from "./FadeIn";

const StudioSection = () => (
  <section id="studio" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto text-center">
      <FadeIn>
        <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
          Chi Siamo
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-2">
          Lo Studio
        </h2>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4 mb-10" />
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto text-base md:text-lg">
          Lo Studio Legale dell'Avvocato Marco Brenna opera con sede in Saronno, nel cuore della provincia di Varese, offrendo assistenza legale qualificata a privati, imprese e istituzioni. Fondato su principi di rigore, competenza e riservatezza, lo Studio garantisce un approccio personalizzato e strategico per ogni esigenza giuridica.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto mt-6 text-base md:text-lg">
          L'impegno quotidiano è rivolto alla tutela degli interessi dei propri assistiti, attraverso un'analisi approfondita delle questioni legali e l'elaborazione di strategie mirate, nel rispetto dei più elevati standard professionali ed etici.
        </p>
      </FadeIn>
    </div>
  </section>
);

export default StudioSection;
