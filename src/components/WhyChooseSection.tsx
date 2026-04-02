import { Shield, Clock, DollarSign, ThumbsUp } from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "Done Right the First Time",
    description: "With backgrounds in engineering and project management, every job gets precision attention to detail.",
  },
  {
    icon: Clock,
    title: "Fast Response Times",
    description: "We know your time is valuable. Quick scheduling, prompt arrival, and efficient work — every time.",
  },
  {
    icon: DollarSign,
    title: "Honest, Upfront Pricing",
    description: "No hidden fees, no surprises. You'll know exactly what you're paying before any work begins.",
  },
  {
    icon: ThumbsUp,
    title: "Clean, Professional Work",
    description: "We treat your home like our own. Clean installs, tidy workspaces, and results you'll be proud of.",
  },
];

const WhyChooseSection = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Why Rocky
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Reliable Hand You Can Trust
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            We bring a unique mix of hands-on experience and professional background to every job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="flex gap-5 bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-secondary/15 flex items-center justify-center shrink-0">
                <r.icon className="w-7 h-7 text-secondary" />
              </div>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground mb-2">
                  {r.title}
                </h3>
                <p className="font-body text-muted-foreground leading-relaxed">
                  {r.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
