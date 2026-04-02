import featuredRoll from "@/assets/featured-roll.jpg";
import featuredSashimi from "@/assets/featured-sashimi.jpg";
import featuredTempura from "@/assets/featured-tempura.jpg";

const features = [
  {
    image: featuredRoll,
    title: "Signature Rolls",
    description: "Over 50 specialty rolls crafted by our expert chefs, from the beloved Lobster Roll to the iconic Perfect Rainbow.",
    alt: "Signature specialty roll",
  },
  {
    image: featuredSashimi,
    title: "Fresh Sashimi",
    description: "Premium-grade fish sliced to perfection. Our sashimi showcases the purest flavors of the ocean.",
    alt: "Fresh sashimi platter",
  },
  {
    image: featuredTempura,
    title: "Kitchen Entrées",
    description: "Traditional Japanese favorites — teriyaki, tempura, udon, and more — served with love.",
    alt: "Shrimp tempura",
  },
];

const FeaturedSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">What We Offer</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            A Feast for the Senses
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative overflow-hidden rounded-sm bg-card"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={feature.image}
                  alt={feature.alt}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-foreground mb-2">{feature.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
