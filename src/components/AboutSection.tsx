import chefImage from "@/assets/chef-craft.jpg";
import interiorImage from "@/assets/restaurant-interior.jpg";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Passion in Every Piece
            </h2>
            <div className="w-16 h-px bg-primary mb-8" />
            <p className="text-foreground/70 font-body leading-relaxed mb-6">
              Nestled in the heart of El Dorado Hills, Umi Sushi has become a beloved destination 
              for sushi enthusiasts. Our chefs bring decades of expertise and a deep passion for 
              Japanese culinary arts to every dish we serve.
            </p>
            <p className="text-foreground/70 font-body leading-relaxed mb-8">
              We source only the freshest fish and finest ingredients, combining traditional 
              techniques with creative flair. From our signature Lobster Roll to our 
              Perfect Rainbow Roll, every creation is crafted with care and precision.
            </p>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="font-display text-3xl text-primary">50+</p>
                <p className="text-muted-foreground font-body text-sm">Specialty Rolls</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">4.0★</p>
                <p className="text-muted-foreground font-body text-sm">Guest Rating</p>
              </div>
              <div>
                <p className="font-display text-3xl text-primary">Daily</p>
                <p className="text-muted-foreground font-body text-sm">Fresh Fish</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-sm overflow-hidden aspect-[3/4]">
              <img
                src={chefImage}
                alt="Sushi chef crafting nigiri"
                loading="lazy"
                width={800}
                height={800}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-sm overflow-hidden aspect-[3/4] mt-8">
              <img
                src={interiorImage}
                alt="Umi Sushi restaurant interior"
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
