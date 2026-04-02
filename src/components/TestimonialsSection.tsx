import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "My faucet at my restaurant needed to be replaced and Anthony came out to fix it as soon as the new faucet arrived. Quick, professional, and the price was very fair.",
    author: "Emilee S.",
    location: "Folsom",
  },
  {
    text: "I contacted Anthony to replace a wall mount range hood. From our initial phone call and the replacement process, Anthony was efficient, professional, timely and knowledgeable. Highly recommend!",
    author: "Chad J.",
    location: "Livermore",
  },
  {
    text: "My dishwasher gave up on me but Rocky saved the day. He made the exchange and hauled the old one away. Highly recommend!",
    author: "Nate S.",
    location: "Folsom",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-3">
            Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            What Homeowners Are Saying
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="font-body text-muted-foreground text-lg">
            5-star rated by local homeowners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.author}
              className="relative bg-card rounded-xl border border-border p-8 hover:shadow-lg transition-all duration-300"
            >
              <Quote className="w-10 h-10 text-primary/15 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>
              <p className="font-body text-foreground leading-relaxed mb-6 relative z-10">
                "{t.text}"
              </p>
              <div>
                <p className="font-display font-bold text-foreground">
                  {t.author}
                </p>
                <p className="font-body text-sm text-muted-foreground">
                  {t.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
