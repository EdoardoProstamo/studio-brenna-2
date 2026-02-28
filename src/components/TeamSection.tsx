import FadeIn from "./FadeIn";

const TeamSection = () => (
  <section id="team" className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Professionisti
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Il Team
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
        </div>
      </FadeIn>

      <FadeIn delay={0.15}>
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-32 h-32 rounded-full bg-muted mx-auto mb-6 flex items-center justify-center border-2 border-accent/30">
            <span className="font-serif text-3xl text-foreground/50">MB</span>
          </div>
          <h3 className="font-serif text-2xl text-foreground mb-1">
            Avv. Marco Brenna
          </h3>
          <p className="text-accent text-sm tracking-[0.15em] uppercase mb-6">
            Fondatore
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Iscritto all'Ordine degli Avvocati di Busto Arsizio, l'Avvocato Marco Brenna esercita la professione forense con dedizione e competenza, assistendo i propri clienti con un approccio rigoroso e orientato alla soluzione. La formazione giuridica solida e l'esperienza maturata negli anni consentono di affrontare con successo le sfide legali più complesse.
          </p>
        </div>
      </FadeIn>
    </div>
  </section>
);

export default TeamSection;
