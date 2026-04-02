import heroImage from "@/assets/hero-sushi.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Premium sushi platter at Umi Sushi"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-overlay-dark" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="font-body text-primary tracking-[0.4em] uppercase text-sm mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          Japanese Restaurant • El Dorado Hills
        </p>
        <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-bold mb-4 animate-fade-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
          <span className="text-gradient-gold">Umi</span>{" "}
          <span className="text-foreground">Sushi</span>
        </h1>
        <p className="font-japanese text-muted-foreground text-lg mb-2 animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          海寿司
        </p>
        <p className="font-body text-foreground/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          Crafting exquisite sushi with the freshest ingredients since day one. 
          Experience authentic Japanese flavors in the heart of El Dorado Hills.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <a
            href="https://www.umisushicalifornia.com/xnyupkq5/umi-sushi-el-dorado-hills-95762/order-online"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-body font-semibold bg-primary text-primary-foreground rounded-sm hover:opacity-90 transition-all duration-300 shadow-glow"
          >
            Order Online
          </a>
          <a
            href="#menu"
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-body font-medium border border-foreground/20 text-foreground rounded-sm hover:border-primary hover:text-primary transition-all duration-300"
          >
            View Menu
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
