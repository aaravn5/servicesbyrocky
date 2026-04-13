import { Wrench, Zap, Hammer, Home, Truck, Droplets } from "lucide-react";
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
    description: "Drywall patching, weather stripping, caulking, painting touch-ups, and all those nagging to-do list items.",
    image: homeRepairImg,
  },
  {
    icon: Truck,
    title: "Gutters & Exterior",
    description: "Gutter cleaning, repairs, exterior maintenance, and everything to keep your home's exterior in top shape.",
    image: gutterImg,
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
            Our Services
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            From quick fixes to full installations, we handle it all with clean work and honest pricing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="group relative bg-card rounded-xl border border-border overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={s.image}
                  alt={`${s.title} - Services by Rocky`}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <s.icon className="w-5 h-5 text-primary" />
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
