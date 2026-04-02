import { MapPin, Phone, Clock, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-primary font-body tracking-[0.3em] uppercase text-sm mb-3">Visit Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Find Us Here
          </h2>
          <div className="w-16 h-px bg-primary mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card p-8 rounded-sm text-center border border-border hover:border-primary/30 transition-colors duration-300">
            <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground font-body text-sm leading-relaxed">
              1121 White Rock Road #105<br />
              El Dorado Hills, CA 95762
            </p>
            <a
              href="https://www.google.com/maps/place/1121+White+Rock+Rd+Ste105,+El+Dorado+Hills,+CA+95762"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-primary font-body text-sm mt-3 hover:underline"
            >
              Get Directions <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="bg-card p-8 rounded-sm text-center border border-border hover:border-primary/30 transition-colors duration-300">
            <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Call Us</h3>
            <a
              href="tel:9165869444"
              className="text-muted-foreground font-body text-sm hover:text-primary transition-colors"
            >
              (916) 586-9444
            </a>
            <p className="text-muted-foreground/60 font-body text-xs mt-2">
              Call ahead for busy Friday & Saturday nights
            </p>
          </div>

          <div className="bg-card p-8 rounded-sm text-center border border-border hover:border-primary/30 transition-colors duration-300">
            <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
            <h3 className="font-display text-lg text-foreground mb-2">Hours</h3>
            <p className="text-muted-foreground font-body text-sm">
              Open Daily<br />
              11:00 AM – 9:00 PM
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-sm overflow-hidden border border-border">
          <iframe
            title="Umi Sushi Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3118.5!2d-121.076!3d38.6757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ae18b6c6e2f7f%3A0x0!2s1121+White+Rock+Rd+%23105%2C+El+Dorado+Hills%2C+CA+95762!5e0!3m2!1sen!2sus!4v1700000000000"
            width="100%"
            height="400"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.9) contrast(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
