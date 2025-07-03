
import React, { useState } from 'react';
import { MessageCircle, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  sizes: string[];
  colors: string[];
  category: string;
  neckDesign?: string;
  sleeveType?: string;
  fabric?: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast({
        variant: "destructive",
        title: "Selection Required",
        description: "Please select both size and color before adding to cart.",
      });
      return;
    }

    addItem({
      id: `${product.id}-${selectedSize}-${selectedColor}`,
      name: product.name,
      price: product.price,
      size: selectedSize,
      color: selectedColor,
      image: product.image,
      category: product.category
    });

    toast({
      title: "Added to Cart!",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleCustomize = () => {
    const phoneNumber = '+917742898778';
    const message = `Hi! I'd like to customize this ${product.category.toLowerCase()}: ${product.name}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="group bg-card rounded-lg shadow-sm border border-border overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold text-lg">{product.name}</h3>
          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold text-primary">₹{product.price}</p>
            {product.fabric && (
              <Badge variant="secondary" className="text-xs">
                {product.fabric}
              </Badge>
            )}
          </div>
        </div>

        {product.neckDesign && (
          <p className="text-sm text-muted-foreground">
            {product.neckDesign} • {product.sleeveType}
          </p>
        )}

        <div className="space-y-2">
          <Select value={selectedSize} onValueChange={setSelectedSize}>
            <SelectTrigger>
              <SelectValue placeholder="Select Size" />
            </SelectTrigger>
            <SelectContent>
              {product.sizes.map(size => (
                <SelectItem key={size} value={size}>{size}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={selectedColor} onValueChange={setSelectedColor}>
            <SelectTrigger>
              <SelectValue placeholder="Select Color" />
            </SelectTrigger>
            <SelectContent>
              {product.colors.map(color => (
                <SelectItem key={color} value={color}>{color}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex space-x-2">
          <Button
            onClick={handleAddToCart}
            className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ShoppingBag className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
          <Button
            onClick={handleCustomize}
            variant="outline"
            className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            <MessageCircle className="h-4 w-4 mr-2" />
            Customize
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
