import { InlineWidget } from "react-calendly";
// import { PopupButton } from "react-calendly";
import { Calendar } from "lucide-react";
import FadeIn from "./FadeIn";

const CALENDLY_URL = "https://calendly.com/edoardoprostamo-19/30min";

const AppuntamentiSection = () => {
    return (
        <section id="appuntamenti" className="scroll-mt-32 section-padding bg-primary">
            <div className="max-w-5xl mx-auto text-center">
                <FadeIn>
                    <Calendar className="text-gold mx-auto mb-4" size={24} strokeWidth={1.5} />
                    <h2 className="text-3xl md:text-4xl font-serif text-primary-foreground mb-3">
                        Prenota una consulenza
                    </h2>
                    <p className="text-primary-foreground/60 text-sm md:text-base mb-10 max-w-md mx-auto">
                        Prenota direttamente una call conoscitiva di 30 minuti con lo Studio.
                    </p>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <div className="mt-10">
                        <InlineWidget
                            url={CALENDLY_URL}
                            styles={{ height: "700px" }}
                        />
                    </div>
                    {/* <PopupButton
              url={CALENDLY_URL}
              rootElement={document.getElementById("root")!}
              text="Prenota una call"
              className="inline-block border border-gold text-gold hover:bg-accent hover:text-accent-foreground px-10 py-3 text-sm tracking-[0.15em] uppercase font-body font-medium rounded-sm transition-colors"
            /> */}
                </FadeIn>
            </div>
        </section>
    );
};

export default AppuntamentiSection;