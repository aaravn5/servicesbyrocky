import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Menu", href: "#menu" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-2xl text-foreground">
          <span className="text-gradient-gold">Umi</span> Sushi
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 tracking-wide"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://www.umisushicalifornia.com/xnyupkq5/umi-sushi-el-dorado-hills-95762/order-online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-primary-foreground rounded-sm font-body text-sm font-semibold hover:opacity-90 transition-all"
          >
            Order Online
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/98 backdrop-blur-md border-b border-border">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-foreground hover:text-primary transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.umisushicalifornia.com/xnyupkq5/umi-sushi-el-dorado-hills-95762/order-online"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 bg-primary text-primary-foreground rounded-sm font-body font-semibold text-center hover:opacity-90 transition-all"
            >
              Order Online
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
