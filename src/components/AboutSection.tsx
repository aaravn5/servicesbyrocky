import aboutImage from "@/assets/service-electrical.jpg";

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
              Locally Owned. Professionally Driven.
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              My name is Anthony, and I started Services by Rocky at the beginning of the 
              COVID-19 pandemic. I bring a unique mix of hands-on experience and professional 
              background, including roles as a systems engineer with IBM, a manager at an 
              appliance parts store, a project manager for a fencing company, and a maintenance 
              supervisor overseeing more than 80 salon suites.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed mb-6">
              This diverse experience allows me to approach every job with problem-solving, 
              precision, and a commitment to doing things right the first time.
            </p>
            <p className="text-foreground font-body font-semibold leading-relaxed mb-8">
              With Services by Rocky, you can expect reliable service, honest work, and 
              attention to detail — every time.
            </p>
            <p className="text-muted-foreground font-body italic mb-8">
              A reliable hand in making your house a home.
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
                alt="Anthony Rocky - professional handyman services, electrical work"
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
