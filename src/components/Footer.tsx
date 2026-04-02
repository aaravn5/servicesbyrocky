const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl text-foreground mb-4">
              <span className="text-gradient-gold">Umi</span> Sushi
            </h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              Authentic Japanese cuisine in the heart of El Dorado Hills. 
              Fresh ingredients, expert craftsmanship, unforgettable flavors.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#menu" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">Menu</a>
              <a href="#about" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">About Us</a>
              <a href="#contact" className="text-muted-foreground font-body text-sm hover:text-primary transition-colors">Contact</a>
              <a
                href="https://www.umisushicalifornia.com/xnyupkq5/umi-sushi-el-dorado-hills-95762/order-online"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-body text-sm hover:underline"
              >
                Order Online →
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-foreground mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <div className="flex flex-col gap-2 text-muted-foreground font-body text-sm">
              <p>1121 White Rock Road #105</p>
              <p>El Dorado Hills, CA 95762</p>
              <a href="tel:9165869444" className="hover:text-primary transition-colors">(916) 586-9444</a>
              <p>Open Daily: 11 AM – 9 PM</p>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground/60 font-body text-xs">
            © {new Date().getFullYear()} Umi Sushi Japanese Restaurant. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
