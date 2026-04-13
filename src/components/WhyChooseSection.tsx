import { Shield, Clock, DollarSign, ThumbsUp, Wrench, Award } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Done Right the First Time",
    description: "Engineering background meets hands-on craftsmanship. Precision attention to detail on every single job.",
    stat: "100%",
    statLabel: "Satisfaction",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "Your time is valuable. Quick scheduling, prompt arrival, and efficient work — no runaround.",
    stat: "Same Day",
    statLabel: "Availability",
  },
  {
    icon: DollarSign,
    title: "Honest, Upfront Pricing",
    description: "No hidden fees, no surprises. You'll know exactly what you're paying before any work begins.",
    stat: "Zero",
    statLabel: "Hidden Fees",
  },
  {
    icon: ThumbsUp,
    title: "Clean, Professional Work",
    description: "We treat your home like our own. Clean installs, tidy workspaces, and results you'll be proud of.",
    stat: "5★",
    statLabel: "Rated",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-24 md:py-32 bg-accent relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-4">
            Why Rocky
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            A Reliable Hand <span className="text-gradient">You Can Trust</span>
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            We bring a unique mix of hands-on experience and professional background to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.title}
              className="group relative bg-card rounded-2xl p-8 md:p-10 border border-border hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500"
            >
              {/* Background number */}
              <div className="absolute top-6 right-8 font-display text-6xl font-extrabold text-foreground/[0.03] select-none">
                0{i + 1}
              </div>
              
              <div className="flex gap-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center shrink-0 group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-300">
                  <r.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">
                    {r.title}
                  </h3>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">
                    {r.description}
                  </p>
                  <div className="flex items-baseline gap-2">
                    <span className="font-display text-2xl font-bold text-primary">{r.stat}</span>
                    <span className="font-body text-sm text-muted-foreground">{r.statLabel}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
