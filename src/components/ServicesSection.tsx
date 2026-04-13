import { Wrench, Zap, Hammer, Home, Droplets, Phone, Fence } from "lucide-react";
import applianceImg from "@/assets/service-appliance.jpg";
import electricalImg from "@/assets/service-electrical.jpg";
import carpentryImg from "@/assets/service-carpentry.jpg";
import plumbingImg from "@/assets/service-plumbing.jpg";
import homeRepairImg from "@/assets/service-homerepair.jpg";
import gutterImg from "@/assets/service-gutter.jpg";

const services = [
  {
    icon: Wrench,
    title: "Appliance Installation",
    description: "Dishwashers, range hoods, garbage disposals, microwaves, and more. Clean installs with proper connections every time.",
    image: applianceImg,
  },
  {
    icon: Zap,
    title: "Electrical",
    description: "Light fixtures, ceiling fans, outlets, switches, and smart home devices. Safe, code-compliant work.",
    image: electricalImg,
  },
  {
    icon: Hammer,
    title: "Carpentry",
    description: "Shelving, trim, door repairs, cabinet fixes, and custom woodwork. Precision craftsmanship for every project.",
    image: carpentryImg,
  },
  {
    icon: Droplets,
    title: "Plumbing",
    description: "Faucet replacements, toilet repairs, garbage disposal installs, leak fixes, and basic plumbing needs.",
    image: plumbingImg,
  },
  {
    icon: Home,
    title: "Home Repairs & Fixes",
    description: "Ceiling fan installs, drywall patching, weather stripping, caulking, painting touch-ups, and more.",
    image: homeRepairImg,
  },
  {
    icon: Fence,
    title: "Gutters & Exterior",
    description: "Gutter cleaning, repairs, exterior maintenance, and everything to keep your home's exterior in top shape.",
    image: gutterImg,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative">
      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-4">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What We <span className="text-gradient">Specialize</span> In
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            From quick fixes to full installations — clean work, honest pricing, no shortcuts.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] img-zoom relative">
                <img
                  src={s.image}
                  alt={`${s.title} - Services by Rocky`}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:shadow-lg group-hover:shadow-primary/20 transition-all duration-300">
                    <s.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                </div>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="tel:9163368577"
            className="group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
