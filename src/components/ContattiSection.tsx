import { Phone, Mail, MapPin, Calendar } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import FadeIn from "./FadeIn";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import { Label } from "./ui/label";

const CALENDLY_URL = "https://calendly.com/studio-legale-brenna";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Il campo Nome e Cognome è obbligatorio.").max(100),
  email: z.string().trim().email("Inserisci un indirizzo email valido.").max(255),
  phone: z.string().trim().max(30).optional(),
  message: z.string().trim().max(5000).optional(),
  privacy: z.literal(true, { errorMap: () => ({ message: "Devi acconsentire al trattamento dei dati." }) }),
});

type ContactForm = z.infer<typeof contactSchema>;

const ContattiSection = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [privacy, setPrivacy] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ ...form, privacy });

    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        const key = err.path[0] as string;
        if (!fieldErrors[key]) fieldErrors[key] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setSending(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Errore invio");
      }

      toast({
        title: "Richiesta inviata",
        description: "Ti ricontatteremo al più presto.",
      });

      setForm({ name: "", email: "", phone: "", message: "" });
      setPrivacy(false);

    } catch (error) {
      toast({
        title: "Errore",
        description: "Si è verificato un problema nell'invio.",
        variant: "destructive",
      });
    }

    setSending(false);
  };

  const update = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof ContactForm]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  return (
    <section id="contatti" className="section-padding bg-primary">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center">
          <FadeIn>
            <p className="text-sm tracking-[0.3em] uppercase text-gold mb-4">Parliamo del tuo caso</p>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-2">Contatti</h2>
            <div className="w-12 h-[2px] bg-accent mx-auto mt-4 mb-8" />
          </FadeIn>
        </div>

        {/* Contact info row */}
        <div className="grid md:grid-cols-3 gap-10 mb-16">
          <FadeIn delay={0.1}>
            <div className="flex flex-col items-center">
              <Phone className="text-gold mb-4" size={24} strokeWidth={1.5} />
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">Telefono</p>
              <a href="tel:+390292622526" className="text-primary-foreground hover:text-gold transition-colors">+39 02 9622526</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-col items-center">
              <Mail className="text-gold mb-4" size={24} strokeWidth={1.5} />
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">Email</p>
              <a href="mailto:avv.marcobrenna@studiolegalebpr.it" className="text-primary-foreground hover:text-gold transition-colors text-sm">avv.marcobrenna@studiolegalebpr.it</a>
            </div>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-col items-center">
              <MapPin className="text-gold mb-4" size={24} strokeWidth={1.5} />
              <p className="text-xs tracking-[0.2em] uppercase text-primary-foreground/50 mb-2">Indirizzo</p>
              <p className="text-primary-foreground text-sm leading-relaxed text-center">Viale Rimembranze 16<br />21047 – Saronno (VA)</p>
            </div>
          </FadeIn>
        </div>

        {/* Contact Form */}
        <FadeIn delay={0.15}>
          <div className="max-w-2xl mx-auto">
            <p className="text-center text-primary-foreground/70 font-body text-base md:text-lg mb-10 tracking-wide">
              Contattaci ed esponici il tuo caso.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">
                    Nome e Cognome <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={form.name}
                    onChange={(e) => update("name", e.target.value)}
                    className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent"
                    placeholder="Mario Rossi"
                  />
                  {errors.name && <p className="text-xs text-gold">{errors.name}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">
                    Email <span className="text-gold">*</span>
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent"
                    placeholder="email@esempio.it"
                  />
                  {errors.email && <p className="text-xs text-gold">{errors.email}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">
                  Telefono
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent"
                  placeholder="+39 333 1234567"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-xs tracking-[0.15em] uppercase text-primary-foreground/60">
                  Messaggio / Descrizione del caso
                </Label>
                <Textarea
                  id="message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  rows={5}
                  className="bg-primary-foreground/5 border-primary-foreground/15 text-primary-foreground placeholder:text-primary-foreground/30 focus-visible:ring-accent resize-none"
                  placeholder="Descrivi brevemente la tua situazione..."
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="privacy"
                  checked={privacy}
                  onCheckedChange={(v) => {
                    setPrivacy(v === true);
                    if (errors.privacy) setErrors((prev) => ({ ...prev, privacy: undefined }));
                  }}
                  className="border-primary-foreground/30 data-[state=checked]:bg-accent data-[state=checked]:border-accent mt-0.5"
                />
                <Label htmlFor="privacy" className="text-sm text-primary-foreground/60 leading-relaxed font-normal cursor-pointer">
                  Acconsento al trattamento dei dati personali ai sensi della normativa GDPR. <span className="text-gold">*</span>
                </Label>
              </div>
              {errors.privacy && <p className="text-xs text-gold -mt-3">{errors.privacy}</p>}

              <div className="pt-2 text-center">
                <Button
                  type="submit"
                  disabled={sending}
                  className="bg-accent text-accent-foreground hover:bg-gold-light px-10 py-5 text-sm tracking-[0.15em] uppercase font-body font-medium rounded-sm transition-colors"
                >
                  {sending ? "Invio in corso..." : "Invia richiesta"}
                </Button>
              </div>
            </form>
          </div>
        </FadeIn>

        {/* Calendly booking */}
        <FadeIn delay={0.2}>
          <div className="max-w-2xl mx-auto mt-20 pt-16 border-t border-primary-foreground/10 text-center">
            <Calendar className="text-gold mx-auto mb-4" size={24} strokeWidth={1.5} />
            <h3 className="text-xl font-serif text-primary-foreground mb-3">Prenota una consulenza</h3>
            <p className="text-primary-foreground/60 text-sm md:text-base leading-relaxed mb-8 max-w-md mx-auto">
              È possibile prenotare direttamente una call conoscitiva di 30 minuti con lo Studio.
            </p>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border border-gold text-gold hover:bg-accent hover:text-accent-foreground px-10 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium rounded-sm transition-colors"
            >
              Prenota una call
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default ContattiSection;