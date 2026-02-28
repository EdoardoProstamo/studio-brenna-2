import { Scale, Building2, Users, FileText, Shield, Gavel } from "lucide-react";
import FadeIn from "./FadeIn";

const areas = [
  {
    icon: Scale,
    title: "Diritto Civile",
    desc: "Consulenza e contenzioso in materia di obbligazioni, contrattualistica, responsabilità civile, diritti reali e successioni.",
  },
  {
    icon: Building2,
    title: "Diritto Commerciale",
    desc: "Assistenza nella costituzione e gestione societaria, operazioni straordinarie, contratti commerciali e recupero crediti.",
  },
  {
    icon: Users,
    title: "Diritto di Famiglia",
    desc: "Separazioni, divorzi, affidamento dei minori, tutela dei diritti patrimoniali e personali in ambito familiare.",
  },
  {
    icon: FileText,
    title: "Diritto Amministrativo",
    desc: "Ricorsi avverso atti della Pubblica Amministrazione, appalti pubblici, urbanistica e procedimenti sanzionatori.",
  },
  {
    icon: Shield,
    title: "Diritto del Lavoro",
    desc: "Tutela del lavoratore e del datore di lavoro: licenziamenti, controversie contrattuali, procedimenti disciplinari.",
  },
  {
    icon: Gavel,
    title: "Diritto Penale",
    desc: "Difesa penale in ogni fase del procedimento, assistenza nelle indagini preliminari e nei giudizi di merito.",
  },
];

const CompetenzeSection = () => (
  <section id="competenze" className="section-padding bg-primary">
    <div className="max-w-6xl mx-auto">
      <FadeIn>
        <div className="text-center mb-16">
          <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Le nostre specializzazioni
          </p>
          <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground">
            Aree di Competenza
          </h2>
          <div className="w-12 h-[2px] bg-accent mx-auto mt-4" />
        </div>
      </FadeIn>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {areas.map((area, i) => (
          <FadeIn key={area.title} delay={i * 0.1}>
            <div className="border border-navy-light p-8 hover:border-gold/40 transition-colors duration-500 group">
              <area.icon
                className="text-gold mb-5 group-hover:scale-105 transition-transform duration-300"
                size={28}
                strokeWidth={1.5}
              />
              <h3 className="font-serif text-xl text-primary-foreground mb-3">
                {area.title}
              </h3>
              <p className="text-sm text-primary-foreground/60 leading-relaxed">
                {area.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

export default CompetenzeSection;
