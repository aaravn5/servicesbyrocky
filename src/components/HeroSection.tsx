import heroImg from "@/assets/hero-handyman.jpg";
import { Phone, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      <img
        src={heroImg}
        alt="Professional handyman installing a kitchen faucet"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}>
            <span className="text-sm font-body font-semibold text-secondary">⭐ 5-Star Rated</span>
            <span className="text-sm font-body text-muted">by Local Homeowners</span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 animate-fade-up opacity-0" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
            <span className="text-primary-foreground">Done Right</span>
            <br />
            <span className="text-secondary">the First Time.</span>
          </h1>

          <p className="font-body text-lg md:text-xl text-muted max-w-lg mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}>
            Reliable handyman services in Folsom, CA. From appliance installs to home repairs — clean work, honest pricing, no shortcuts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-up opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <a
              href="tel:9163368577"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-all shadow-lg"
            >
              <Phone className="w-5 h-5" />
              Call Now — Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-muted text-primary-foreground font-display font-semibold text-lg hover:border-secondary hover:text-secondary transition-all"
            >
              View Services
            </a>
          </div>

          <div className="flex flex-wrap gap-x-6 gap-y-2 animate-fade-in opacity-0" style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}>
            {["Fast response times", "Honest, upfront pricing", "Locally owned & operated"].map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm font-body text-muted">
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
