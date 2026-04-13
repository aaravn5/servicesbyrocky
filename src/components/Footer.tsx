import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-20 px-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-foreground/10 to-transparent" />
      
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-4">
              Services by <span className="text-secondary">Rocky</span>
            </h3>
            <p className="text-background/50 font-body text-sm leading-relaxed mb-6">
              Professional handyman services in Folsom, El Dorado Hills, and surrounding areas.
              Done right the first time, every time.
            </p>
            <div className="flex items-center gap-1.5">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-secondary text-sm">★</span>
              ))}
              <span className="text-background/40 font-body text-xs ml-2">5-Star Rated</span>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background mb-6 tracking-wide uppercase text-sm">Quick Links</h4>
            <div className="flex flex-col gap-3">
              {["Services", "Why Rocky", "Reviews", "About", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(" ", "-")}`}
                  className="text-background/50 font-body text-sm hover:text-secondary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background mb-6 tracking-wide uppercase text-sm">Contact</h4>
            <div className="flex flex-col gap-4 text-background/50 font-body text-sm">
              <a href="tel:9163368577" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                916-336-8577
              </a>
              <a href="mailto:Anthony@ServicesbyRocky.com" className="flex items-center gap-3 hover:text-secondary transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                Anthony@ServicesbyRocky.com
              </a>
              <span className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-background/5 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                Folsom & El Dorado Hills, CA
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/30 font-body text-xs">
            © {new Date().getFullYear()} Services by Rocky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
