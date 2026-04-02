import { Phone, Mail, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-foreground/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
          Ready to Get Your Project Done Right?
        </h2>
        <p className="font-body text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
          From quick repairs to full installations, Services by Rocky delivers clean, reliable work you can trust. Call today for a free estimate.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="tel:9163368577"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-xl hover:opacity-90 transition-all shadow-lg"
          >
            <Phone className="w-6 h-6" />
            916-336-8577
          </a>
          <a
            href="mailto:Anthony@ServicesbyRocky.com"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl border-2 border-primary-foreground/30 text-primary-foreground font-display font-semibold text-xl hover:bg-primary-foreground/10 transition-all"
          >
            <Mail className="w-6 h-6" />
            Email Us
          </a>
        </div>

        <div className="flex flex-wrap gap-8 justify-center text-primary-foreground/70 font-body text-sm">
          <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Fast response times</span>
          <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Honest, upfront pricing</span>
          <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Clean, professional work</span>
          <span className="flex items-center gap-2"><ArrowRight className="w-4 h-4 text-secondary" /> Locally owned & operated</span>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
