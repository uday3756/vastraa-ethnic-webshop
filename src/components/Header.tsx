
import React, { useState } from 'react';
import { ShoppingBag, Menu, Search, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/hooks/useCart';
import Cart from './Cart';

const Header = () => {
  const { items } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const openWhatsApp = () => {
    const phoneNumber = '+917742898778';
    const message = 'Hi! I would like to customize a design from Vastraa.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold gold-gradient bg-clip-text text-transparent">
                Vastraa
              </h1>
              <span className="hidden sm:block text-sm text-muted-foreground">
                Traditional Elegance
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
              <a href="#kurta-suits" className="text-foreground hover:text-primary transition-colors">Kurta Suits</a>
              <a href="#sarees" className="text-foreground hover:text-primary transition-colors">Sarees</a>
              <a href="#blouses" className="text-foreground hover:text-primary transition-colors">Blouses</a>
            </nav>

            {/* Search Bar */}
            <div className="hidden md:flex items-center space-x-2 flex-1 max-w-md mx-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  placeholder="Search designs..."
                  className="pl-10 bg-muted/50 border-muted-foreground/20"
                />
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                onClick={openWhatsApp}
                className="hidden sm:flex items-center space-x-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Customise</span>
              </Button>
              
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsCartOpen(true)}
                className="relative"
              >
                <ShoppingBag className="h-5 w-5" />
                {itemCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-primary text-primary-foreground text-xs">
                    {itemCount}
                  </Badge>
                )}
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-border py-4">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-foreground hover:text-primary transition-colors">Home</a>
                <a href="#kurta-suits" className="text-foreground hover:text-primary transition-colors">Kurta Suits</a>
                <a href="#sarees" className="text-foreground hover:text-primary transition-colors">Sarees</a>
                <a href="#blouses" className="text-foreground hover:text-primary transition-colors">Blouses</a>
                <div className="pt-2">
                  <Button
                    onClick={openWhatsApp}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Customise Your Design
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </>
  );
};

export default Header;
