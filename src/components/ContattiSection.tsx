import { Phone, Mail, MapPin } from "lucide-react";
import FadeIn from "./FadeIn";

const ContattiSection = () => (
  <section id="contatti" className="section-padding bg-primary">
    <div className="max-w-4xl mx-auto text-center">
      <FadeIn>
        <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
          Parliamo del tuo caso
        </p>
        <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-2">
          Contatti
        </h2>
        <div className="w-12 h-[2px] bg-accent mx-auto mt-4 mb-14" />
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-10">
        <FadeIn delay={0.1}>
          <div className="flex flex-col items-center">
            <Phone className="text-gold mb-4" size={24} strokeWidth={1.5} />
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
              Telefono
            </p>
            <a
              href="tel:+390292622526"
              className="text-primary-foreground hover:text-gold transition-colors"
            >
              +39 02 9622526
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="flex flex-col items-center">
            <Mail className="text-gold mb-4" size={24} strokeWidth={1.5} />
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
              Email
            </p>
            <a
              href="mailto:avv.marcobrenna@studiolegalebpr.it"
              className="text-primary-foreground hover:text-gold transition-colors text-sm"
            >
              avv.marcobrenna@studiolegalebpr.it
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <a
            href="https://www.google.com/maps/place/Viale+Rimembranze+16,+21047+Saronno+VA"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            <MapPin className="text-gold mb-4" size={24} strokeWidth={1.5} />
            <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">
              Indirizzo
            </p>
            <p className="text-primary-foreground text-sm leading-relaxed text-center">
              Viale Rimembranze 16
              <br />
              21047 – Saronno (VA)
            </p>
          </a>
        </FadeIn>
      </div>
    </div>
  </section>
);

export default ContattiSection;
