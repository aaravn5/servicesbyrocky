import { Wrench, Zap, Hammer, Home, Truck, Droplets } from "lucide-react";

const services = [
  {
    icon: Wrench,
    title: "Appliance Installation",
    description: "Dishwashers, range hoods, garbage disposals, microwaves, and more. Clean installs with proper connections every time.",
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Light fixtures, ceiling fans, outlets, switches, and smart home devices. Safe, code-compliant work.",
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Shelving, trim, door repairs, cabinet fixes, and custom woodwork. Precision craftsmanship for every project.",
  },
  {
    icon: Home,
    title: "Home Repairs & Fixes",
    description: "Drywall patching, weather stripping, caulking, painting touch-ups, and all those nagging to-do list items.",
  },
  {
    icon: Truck,
    title: "Move-In & Rental Prep",
    description: "TV mounting, furniture assembly, lock changes, deep cleaning prep, and everything to get your space ready.",
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Faucet replacements, toilet repairs, garbage disposal installs, leak fixes, and basic plumbing needs.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            What We Do
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Services You Can Count On
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            From quick fixes to full installations, we handle it all with clean work and honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-xl border border-border p-8 hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold text-foreground mb-3">
                {s.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="tel:9163368577"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-display font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
