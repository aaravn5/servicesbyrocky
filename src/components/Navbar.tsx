import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Why Rocky", href: "#why-us" },
  { label: "Reviews", href: "#reviews" },
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
          ? "glass border-b border-border/50 shadow-lg shadow-foreground/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 md:h-20">
        <a href="#" className="font-display text-xl md:text-2xl font-bold text-foreground">
          Services by <span className="text-primary">Rocky</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9163368577"
            className="inline-flex items-center gap-2 px-6 py-2.5 bg-secondary text-secondary-foreground rounded-xl font-display font-bold text-sm hover:shadow-lg hover:shadow-secondary/20 hover:-translate-y-0.5 transition-all duration-300"
          >
            <Phone className="w-4 h-4" />
            916-336-8577
          </a>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden glass border-b border-border/50">
          <div className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="font-body text-foreground hover:text-primary transition-colors py-2 text-lg"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9163368577"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 bg-secondary text-secondary-foreground rounded-xl font-display font-bold text-center hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              916-336-8577
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
