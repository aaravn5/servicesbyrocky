import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-16 px-4">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-display text-2xl font-bold text-background mb-4">
              Services by <span className="text-secondary">Rocky</span>
            </h3>
            <p className="text-background/60 font-body text-sm leading-relaxed">
              Professional handyman services in Folsom, El Dorado Hills, and surrounding areas.
              Done right the first time, every time.
            </p>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background mb-4 tracking-wide uppercase text-sm">Quick Links</h4>
            <div className="flex flex-col gap-2">
              <a href="#services" className="text-background/60 font-body text-sm hover:text-secondary transition-colors">Services</a>
              <a href="#why-us" className="text-background/60 font-body text-sm hover:text-secondary transition-colors">Why Rocky</a>
              <a href="#reviews" className="text-background/60 font-body text-sm hover:text-secondary transition-colors">Reviews</a>
              <a href="#about" className="text-background/60 font-body text-sm hover:text-secondary transition-colors">About</a>
              <a href="#contact" className="text-background/60 font-body text-sm hover:text-secondary transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="font-body font-semibold text-background mb-4 tracking-wide uppercase text-sm">Contact</h4>
            <div className="flex flex-col gap-3 text-background/60 font-body text-sm">
              <a href="tel:9163368577" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone className="w-4 h-4" /> 916-336-8577
              </a>
              <a href="mailto:Anthony@ServicesbyRocky.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="w-4 h-4" /> Anthony@ServicesbyRocky.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" /> Folsom & El Dorado Hills, CA
              </span>
            </div>
          </div>
        </div>
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="text-background/40 font-body text-xs">
            © {new Date().getFullYear()} Services by Rocky. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
