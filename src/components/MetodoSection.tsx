import { Search, MessageSquare, Target, CheckCircle } from "lucide-react";
import FadeIn from "./FadeIn";

const steps = [
  {
    icon: Search,
    title: "Analisi",
    desc: "Studio approfondito della questione giuridica e raccolta di tutti gli elementi rilevanti.",
  },
  {
    icon: MessageSquare,
    title: "Consulenza",
    desc: "Confronto diretto con il cliente per definire obiettivi e aspettative in modo chiaro e trasparente.",
  },
  {
    icon: Target,
    title: "Strategia",
    desc: "Elaborazione di una strategia legale su misura, valutando rischi e opportunità di ogni percorso.",
  },
  {
    icon: CheckCircle,
    title: "Azione",
    desc: "Esecuzione della strategia con determinazione e precisione, monitorando ogni fase del procedimento.",
  },
];

const MetodoSection = () => (
  <section id="metodo" className="section-padding bg-card">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Il nostro approccio
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            Metodo di Lavoro
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {steps.map((step, i) => (
          <FadeIn key={step.title} delay={i * 0.12}>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-5 rounded-full border border-accent/40 flex items-center justify-center">
                <step.icon className="text-accent" size={24} strokeWidth={1.5} />
              </div>
              <span className="text-xs tracking-[0.2em] uppercase text-accent mb-2 block">
                0{i + 1}
              </span>
              <h3 className="font-serif text-lg text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default MetodoSection;
