import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Facebook, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";
import manorLogo from "@/assets/manor-logo.png";

const emailSchema = z.string().trim().email({ message: "Invalid email address" }).max(255);

const contactSchema = z.object({
  name: z.string().trim().min(1, { message: "Name is required" }).max(100),
  email: emailSchema,
  message: z.string().trim().min(1, { message: "Message is required" }).max(1000)
});

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      emailSchema.parse(subscribeEmail);
      toast.success("Thank you for subscribing!");
      setSubscribeEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      contactSchema.parse(contactForm);
      toast.success("Message sent successfully! We'll get back to you soon.");
      setContactForm({ name: "", email: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast.error(error.errors[0].message);
      }
    }
  };

  return (
    <footer className="bg-card border-t mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Subscribe */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={manorLogo} alt="Manor Tea" className="h-10 w-auto" />
              <span className="text-xl font-serif font-bold">MANOR</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The tea of your morning. Premium quality teas bringing warmth to your day.
            </p>
            <div className="space-y-2">
              <h4 className="font-semibold text-sm">Subscribe to Our Newsletter</h4>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Your email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  className="flex-1"
                  maxLength={255}
                />
                <Button type="submit" size="sm" className="manor-gradient text-foreground">
                  Subscribe
                </Button>
              </form>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-muted-foreground hover:text-primary manor-transition">Home</Link></li>
              <li><Link to="/products" className="text-muted-foreground hover:text-primary manor-transition">Products</Link></li>
              <li><Link to="/gifts" className="text-muted-foreground hover:text-primary manor-transition">Gifts</Link></li>
              <li><Link to="/about" className="text-muted-foreground hover:text-primary manor-transition">About Us</Link></li>
              <li><Link to="/leadership" className="text-muted-foreground hover:text-primary manor-transition">Leadership</Link></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-serif font-semibold text-lg mb-4">Contact Us</h4>
            <form onSubmit={handleContactSubmit} className="space-y-2">
              <Input
                placeholder="Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                maxLength={100}
              />
              <Input
                type="email"
                placeholder="Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                maxLength={255}
              />
              <Textarea
                placeholder="Message"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="min-h-20"
                maxLength={1000}
              />
              <Button type="submit" size="sm" className="w-full manor-gradient text-foreground">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info & Map */}
          <div className="space-y-4">
            <h4 className="font-serif font-semibold text-lg">Visit Us</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>Mahalaxmi Traders Opp. hanuman mandir, near mahatma gandhi school, Hemu Colony, chowk, Jaripatka, Nagpur, Maharashtra 440014
</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <span>+91 76668 53412</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <span>@manortea.com</span>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden manor-shadow">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.35344510703!2d79.09125507611155!3d21.178113882630235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c134bf6e7f69%3A0x914789d1a35a1d3d!2sMahalaxmi%20Traders!5e0!3m2!1sen!2sin!4v1760730369951!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Manor Tea Location"
              />
            </div>
          </div>
        </div>

        {/* Social & Legal */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/iam_anonymous.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary manor-transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/iam_anonymous.__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary manor-transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/premnarayani/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary manor-transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            
            <div className="text-sm text-muted-foreground text-center">
              <p>FSSAI Lic. No.: 11523078000114 | GST No.: 27ADRPN3696H1ZT</p>
            </div>
          </div>
          
          <div className="text-center mt-6 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Manor Tea. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
