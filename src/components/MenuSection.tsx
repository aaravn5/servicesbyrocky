import { useState } from "react";
import { menuCategories } from "@/data/menuData";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="menu" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Our Menu</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Discover Our Flavors
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground font-body max-w-xl mx-auto">
            From classic maki to chef's signature creations — explore our full menu below.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-sm text-sm font-body transition-all duration-300 ${
                activeCategory === idx
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-muted"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Active category items */}
        <div className="max-w-4xl mx-auto">
          {menuCategories[activeCategory].note && (
            <p className="text-primary font-body text-sm text-center mb-8 italic">
              {menuCategories[activeCategory].note}
            </p>
          )}
          <div className="grid gap-1">
            {menuCategories[activeCategory].items.map((item) => (
              <div
                key={item.name}
                className="flex items-start justify-between py-4 px-4 rounded-sm hover:bg-secondary/50 transition-colors duration-200 group"
              >
                <div className="flex-1 mr-4">
                  <h4 className="font-body font-medium text-foreground group-hover:text-primary transition-colors duration-200">
                    {item.name}
                  </h4>
                  {item.description && (
                    <p className="text-muted-foreground text-sm mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                </div>
                <span className="font-body text-primary font-semibold whitespace-nowrap mt-0.5">
                  {item.price}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Order CTA */}
        <div className="text-center mt-16">
          <a
            href="https://www.umisushicalifornia.com/xnyupkq5/umi-sushi-el-dorado-hills-95762/order-online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-body font-semibold bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-all duration-300 shadow-glow"
          >
            Order Online Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
