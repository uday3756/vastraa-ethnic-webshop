
import React from 'react';
import { MessageCircle, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingElements from '@/components/FloatingElements';
import ProductCard, { Product } from '@/components/ProductCard';
import { CartProvider } from '@/hooks/useCart';

// Sample featured products
const featuredProducts: Product[] = [
  {
    id: 'kurta-1',
    name: 'Elegant Pink Kurta Set',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Blue', 'Green', 'Yellow'],
    category: 'Kurta Suits',
    fabric: 'Cotton'
  },
  {
    id: 'saree-1', 
    name: 'Traditional Silk Saree',
    price: 4999,
    image: 'https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&q=80&w=500',
    sizes: ['One Size'],
    colors: ['Red', 'Gold', 'Maroon', 'Green'],
    category: 'Sarees',
    fabric: 'Silk'
  },
  {
    id: 'blouse-1',
    name: 'Designer Embroidered Blouse',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gold', 'Silver', 'Red', 'Blue'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Half sleeve',
    fabric: 'Silk'
  }
];

const Index = () => {
  const openWhatsApp = () => {
    const phoneNumber = '+917742898778';
    const message = 'Hi! I would like to customize a design from Vastraa.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <FloatingElements />
        <Header />
        
        <main className="relative z-10">
          {/* Hero Section */}
          <section id="home" className="relative py-20 px-4 text-center">
            <div className="container mx-auto max-w-4xl">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold">
                  <span className="gold-gradient bg-clip-text text-transparent">Vastraa</span>
                  <br />
                  <span className="text-2xl md:text-3xl text-muted-foreground">Traditional Elegance</span>
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                  Discover our exquisite collection of traditional Indian women's wear. 
                  From elegant kurta suits to stunning sarees and designer blouses.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={openWhatsApp}
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Customise Your Design
                  </Button>
                  <Button
                    onClick={() => scrollToSection('featured')}
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    <Sparkles className="h-5 w-5 mr-2" />
                    Explore Collection
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Categories Section */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Our Collections
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('kurta-suits')}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl">👘</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Kurta Suits</h3>
                    <p className="text-muted-foreground">Elegant and comfortable kurta sets for every occasion</p>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('sarees')}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl">🥻</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Sarees</h3>
                    <p className="text-muted-foreground">Traditional sarees with modern elegance</p>
                  </CardContent>
                </Card>

                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:scale-105"
                  onClick={() => scrollToSection('blouses')}
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl">👚</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Blouses</h3>
                    <p className="text-muted-foreground">Designer blouses with intricate details</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Featured Products */}
          <section id="featured" className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Featured Collection</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Handpicked designs that showcase the perfect blend of traditional craftsmanship and contemporary style
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {featuredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us */}
          <section className="py-16 px-4">
            <div className="container mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Why Choose Vastraa?</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">
                    Carefully selected fabrics and traditional craftsmanship ensure lasting quality
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <MessageCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Custom Designs</h3>
                  <p className="text-muted-foreground">
                    Personalize any design to match your style and preferences perfectly
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Authentic Tradition</h3>
                  <p className="text-muted-foreground">
                    Each piece celebrates Indian heritage with contemporary elegance
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Placeholder sections for other categories */}
          <section id="kurta-suits" className="py-16 px-4 bg-muted/20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Kurta Suits Collection</h2>
              <p className="text-muted-foreground mb-8">Coming Soon - Beautiful kurta suits for every occasion</p>
            </div>
          </section>

          <section id="sarees" className="py-16 px-4">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Sarees Collection</h2>
              <p className="text-muted-foreground mb-8">Coming Soon - Elegant sarees in silk, cotton, and more</p>
            </div>
          </section>

          <section id="blouses" className="py-16 px-4 bg-muted/20">
            <div className="container mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Blouses Collection</h2>
              <p className="text-muted-foreground mb-8">Coming Soon - Designer blouses with 100+ unique designs</p>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
