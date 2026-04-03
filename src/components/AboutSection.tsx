import aboutImage from "@/assets/about-rocky.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
              About Rocky
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Professional Background, Hands-On Results
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              Anthony "Rocky" brings a unique combination of corporate engineering experience 
              and hands-on craftsmanship to every project. With a background at IBM and years 
              as a maintenance supervisor, he understands both the technical precision and 
              practical know-how needed to get the job done right.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-8">
              Based in the Folsom and El Dorado Hills area, Services by Rocky is your 
              locally owned and operated solution for appliance installation, electrical work, 
              plumbing, TV mounting, and general handyman services. Every job is treated with 
              the same care and attention as if it were in his own home.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-3xl font-bold text-primary">5★</p>
                <p className="text-muted-foreground font-body text-sm">Customer Rating</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">100%</p>
                <p className="text-muted-foreground font-body text-sm">Satisfaction</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-primary">Local</p>
                <p className="text-muted-foreground font-body text-sm">Owned & Operated</p>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-xl overflow-hidden shadow-2xl">
              <img
                src={aboutImage}
                alt="Anthony Rocky - professional handyman services"
                loading="lazy"
                className="w-full h-full object-cover aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
