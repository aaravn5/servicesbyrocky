import heroImg from "@/assets/hero-handyman.jpg";
import { Phone, CheckCircle2, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image with parallax feel */}
      <img
        src={heroImg}
        alt="Rocky performing professional handyman work on a ladder"
        className="absolute inset-0 w-full h-full object-cover scale-105"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      {/* Rich cinematic gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/95 via-foreground/80 to-foreground/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass-dark border border-secondary/30 mb-8 animate-fade-in opacity-0"
            style={{ animationDelay: "0.1s", animationFillMode: "forwards" }}
          >
            <span className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-secondary text-sm">★</span>
              ))}
            </span>
            <span className="text-sm font-body font-semibold text-primary-foreground">
              5-Star Rated by Local Homeowners
            </span>
          </div>

          {/* Hero headline */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] mb-6 animate-fade-up opacity-0"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="text-primary-foreground">Clean Installs.</span>
            <br />
            <span className="text-primary-foreground">Honest Pricing.</span>
            <br />
            <span className="text-secondary">No Shortcuts.</span>
          </h1>

          <p
            className="font-body text-lg md:text-xl text-primary-foreground/70 max-w-lg mb-10 leading-relaxed animate-fade-in opacity-0"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Reliable handyman services in Folsom & El Dorado Hills, CA. From appliance installs to full home repairs — done right the first time.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-up opacity-0"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <a
              href="tel:9163368577"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl bg-secondary text-secondary-foreground font-display font-bold text-lg hover:shadow-2xl hover:shadow-secondary/30 transition-all duration-300 animate-pulse-glow"
            >
              <Phone className="w-5 h-5 group-hover:animate-bounce" />
              Call Now — Free Estimate
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-10 py-5 rounded-xl border-2 border-primary-foreground/20 text-primary-foreground font-display font-semibold text-lg hover:border-secondary hover:text-secondary transition-all duration-300 glass-dark"
            >
              View Our Work
            </a>
          </div>

          {/* Trust indicators */}
          <div
            className="flex flex-wrap gap-x-8 gap-y-3 animate-fade-in opacity-0"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            {[
              "Fast Response Times",
              "Honest, Upfront Pricing",
              "Locally Owned & Operated",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-2 text-sm font-body text-primary-foreground/60"
              >
                <CheckCircle2 className="w-4 h-4 text-secondary" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <a href="#services" className="flex flex-col items-center gap-2 text-primary-foreground/40 hover:text-secondary transition-colors">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
