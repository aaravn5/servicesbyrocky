import { Phone, Mail, ArrowRight, Star } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-primary relative overflow-hidden">
      {/* Premium decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full translate-y-1/2 -translate-x-1/3" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-foreground/[0.02] rounded-full" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Mini stars */}
        <div className="flex items-center justify-center gap-1.5 mb-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-secondary text-secondary" />
          ))}
        </div>

        <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-extrabold text-primary-foreground mb-6 leading-tight">
          Ready to Get Your
          <br />
          <span className="text-secondary">Project Done Right?</span>
        </h2>
        <p className="font-body text-primary-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          From quick repairs to full installations, Services by Rocky delivers clean, 
          reliable work you can trust. Call today for a free estimate — no obligation.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16">
          <a
            href="tel:9163368577"
            className="group inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl bg-secondary text-secondary-foreground font-display font-bold text-xl hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 hover:-translate-y-1 animate-pulse-glow"
          >
            <Phone className="w-6 h-6 group-hover:animate-bounce" />
            916-336-8577
          </a>
          <a
            href="mailto:Anthony@ServicesbyRocky.com"
            className="inline-flex items-center justify-center gap-3 px-12 py-6 rounded-2xl border-2 border-primary-foreground/20 text-primary-foreground font-display font-semibold text-xl hover:bg-primary-foreground/10 hover:border-primary-foreground/30 transition-all duration-300 hover:-translate-y-1"
          >
            <Mail className="w-6 h-6" />
            Email Us
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
          {[
            "Fast Response",
            "Honest Pricing",
            "Clean Work",
            "Locally Owned",
          ].map((item) => (
            <div key={item} className="flex flex-col items-center gap-2">
              <ArrowRight className="w-4 h-4 text-secondary" />
              <span className="text-primary-foreground/60 font-body text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTASection;
