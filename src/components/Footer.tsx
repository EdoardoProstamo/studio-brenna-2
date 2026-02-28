const Footer = () => (
  <footer className="bg-primary border-t border-navy-light py-14 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <p className="font-serif text-xl text-primary-foreground mb-1">
        Avv. Marco Brenna
      </p>
      <p className="text-xs tracking-[0.25em] uppercase text-gold mb-6">
        Studio Legale
      </p>

      <div className="text-sm text-primary-foreground/60 space-y-1 mb-6">
        <p>
          <a href="tel:+390292622526" className="hover:text-gold transition-colors">
            Viale Rimembranze 16 — 21047 Saronno (VA)
          </a>
        </p>
        <p>
          Tel.{" "}
          <a href="tel:+390292622526" className="hover:text-gold transition-colors">
            +39 02 9622526
          </a>{" "}
          — Email{" "}
          <a
            href="mailto:avv.marcobrenna@studiolegalebpr.it"
            className="hover:text-gold transition-colors"
          >
            avv.marcobrenna@studiolegalebpr.it
          </a>
        </p>
        <p>P.IVA: [da inserire]</p>
      </div>

      <div className="w-12 h-[1px] bg-accent/40 mx-auto mb-6" />

      <div className="flex items-center justify-center gap-6 text-xs text-primary-foreground/40">
        <a href="#" className="hover:text-gold transition-colors">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:text-gold transition-colors">
          Cookie Policy
        </a>
      </div>

      <p className="text-xs text-primary-foreground/30 mt-6">
        © {new Date().getFullYear()} Avv. Marco Brenna — Tutti i diritti riservati
      </p>
    </div>
  </footer>
);

export default Footer;
