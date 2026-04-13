import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "My faucet at my restaurant needed to be replaced and Anthony came out to fix it as soon as the new faucet arrived. Quick, professional, and the price was very fair.",
    author: "Emilee S.",
    location: "Folsom, CA",
    service: "Plumbing",
  },
  {
    text: "I contacted Anthony to replace a wall mount range hood. From our initial phone call and the replacement process, Anthony was efficient, professional, timely and knowledgeable. Highly recommend!",
    author: "Chad J.",
    location: "Livermore, CA",
    service: "Appliance Install",
  },
  {
    text: "My dishwasher gave up on me but Rocky saved the day. He made the exchange and hauled the old one away. Highly recommend!",
    author: "Nate S.",
    location: "Folsom, CA",
    service: "Appliance Install",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-body font-semibold tracking-widest uppercase text-primary mb-4">
            Reviews
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-5">
            What Homeowners <span className="text-gradient">Are Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-1.5 mb-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-7 h-7 fill-secondary text-secondary" />
            ))}
          </div>
          <p className="font-body text-muted-foreground text-lg">
            5-star rated by local homeowners across the Sacramento area
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.author}
              className="group relative bg-card rounded-2xl border border-border p-8 md:p-10 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Quote icon */}
              <Quote className="w-12 h-12 text-primary/8 absolute top-8 right-8" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Review text */}
              <p className="font-body text-foreground leading-relaxed mb-8 relative z-10 text-[15px]">
                "{t.text}"
              </p>

              {/* Author info */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display font-bold text-foreground text-lg">
                    {t.author}
                  </p>
                  <p className="font-body text-sm text-muted-foreground">
                    {t.location}
                  </p>
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/8 text-primary font-body text-xs font-semibold">
                  {t.service}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
