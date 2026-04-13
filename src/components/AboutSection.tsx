import aboutImage from "@/assets/service-electrical.jpg";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Systems Engineer at IBM",
  "Appliance Parts Store Manager",
  "Project Manager for Fencing Co.",
  "Maintenance Supervisor, 80+ Suites",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-accent relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-4">
              About Rocky
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
              Locally Owned.{" "}
              <span className="text-gradient">Professionally Driven.</span>
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6 text-lg">
              My name is Anthony, and I started Services by Rocky at the beginning of the 
              COVID-19 pandemic. I bring a unique mix of hands-on experience and professional 
              background to every project.
            </p>

            {/* Professional background highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item) => (
                <div key={item} className="flex items-center gap-3 bg-card rounded-xl px-4 py-3 border border-border">
                  <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                  <span className="font-body text-sm text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-foreground font-body font-semibold leading-relaxed mb-2 text-lg">
              Reliable service, honest work, and attention to detail — every time.
            </p>
            <p className="text-muted-foreground font-body italic mb-10">
              "A reliable hand in making your house a home."
            </p>

            <div className="flex gap-8">
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold text-primary">5★</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Rating</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold text-primary">100%</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Satisfaction</p>
              </div>
              <div className="w-px bg-border" />
              <div className="text-center">
                <p className="font-display text-4xl font-extrabold text-primary">Local</p>
                <p className="text-muted-foreground font-body text-sm mt-1">Owned</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl img-zoom">
                <img
                  src={aboutImage}
                  alt="Anthony Rocky performing electrical work with professional tools"
                  loading="lazy"
                  className="w-full h-full object-cover aspect-[3/4]"
                />
              </div>
              {/* Floating accent card */}
              <div className="absolute -bottom-6 -left-6 glass rounded-xl p-5 shadow-xl border border-border hidden lg:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-2xl">🔧</span>
                  </div>
                  <div>
                    <p className="font-display font-bold text-foreground text-sm">Since 2020</p>
                    <p className="font-body text-xs text-muted-foreground">Serving Sacramento Area</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
