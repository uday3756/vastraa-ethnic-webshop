
import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gold-gradient bg-clip-text text-transparent">
              Vastraa
            </h3>
            <p className="text-primary-foreground/80">
              Traditional elegance crafted with love. Specializing in authentic Indian women's wear 
              that celebrates heritage and modern style.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-accent" />
                <span className="text-primary-foreground/80">NARGUND, India</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+917742898778" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +91 97428 98778
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:vastraa46@gmail.com" 
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  vastraa46@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Home
              </a>
              <a href="#kurta-suits" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Kurta Suits
              </a>
              <a href="#sarees" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Sarees
              </a>
              <a href="#blouses" className="block text-primary-foreground/80 hover:text-accent transition-colors">
                Blouses
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Vastraa. All rights reserved. Made with ❤️ for traditional fashion lovers.
          </p>
        </div>
      </div>

      {/* Traditional Pattern */}
      <div className="h-2 traditional-pattern opacity-50"></div>
    </footer>
  );
};

export default Footer;
