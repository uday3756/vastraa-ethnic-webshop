
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

// Blouses collection with 50 designs
const blousesCollection: Product[] = [
  {
    id: 'blouse-001',
    name: 'Royal Silk Embroidered Blouse',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gold', 'Silver', 'Red', 'Blue'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Half sleeve',
    fabric: 'Silk'
  },
  {
    id: 'blouse-002',
    name: 'Traditional Cotton Blouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Pink', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'Round neck',
    sleeveType: 'Full sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-003',
    name: 'Georgette Designer Blouse',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Maroon', 'Green'],
    category: 'Blouses',
    neckDesign: 'Boat neck',
    sleeveType: 'Half sleeve',
    fabric: 'Georgette'
  },
  {
    id: 'blouse-004',
    name: 'Mirror Work Festive Blouse',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Gold', 'Purple', 'Orange'],
    category: 'Blouses',
    neckDesign: 'Deep V-neck',
    sleeveType: 'Sleeveless',
    fabric: 'Silk'
  },
  {
    id: 'blouse-005',
    name: 'Elegant Chiffon Blouse',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Peach', 'Mint', 'Lavender', 'Coral'],
    category: 'Blouses',
    neckDesign: 'Square neck',
    sleeveType: 'Three quarter',
    fabric: 'Chiffon'
  },
  {
    id: 'blouse-006',
    name: 'Handwoven Cotton Blouse',
    price: 799,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Off-white', 'Beige', 'Cream'],
    category: 'Blouses',
    neckDesign: 'High neck',
    sleeveType: 'Full sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-007',
    name: 'Zardozi Work Blouse',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Red', 'Royal Blue', 'Emerald', 'Golden'],
    category: 'Blouses',
    neckDesign: 'Sweetheart',
    sleeveType: 'Cap sleeve',
    fabric: 'Silk'
  },
  {
    id: 'blouse-008',
    name: 'Modern Crop Blouse',
    price: 999,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Grey', 'Navy'],
    category: 'Blouses',
    neckDesign: 'Halter neck',
    sleeveType: 'Sleeveless',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-009',
    name: 'Bandhani Print Blouse',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Magenta', 'Turquoise', 'Orange', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Half sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-010',
    name: 'Lace Detailed Blouse',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Ivory', 'Blush', 'Champagne', 'Rose Gold'],
    category: 'Blouses',
    neckDesign: 'Scoop neck',
    sleeveType: 'Long sleeve',
    fabric: 'Georgette'
  },
  {
    id: 'blouse-011',
    name: 'Sequined Party Blouse',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gold', 'Silver', 'Rose Gold', 'Bronze'],
    category: 'Blouses',
    neckDesign: 'Off-shoulder',
    sleeveType: 'Sleeveless',
    fabric: 'Silk'
  },
  {
    id: 'blouse-012',
    name: 'Kalamkari Print Blouse',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Indigo', 'Rust', 'Olive', 'Burgundy'],
    category: 'Blouses',
    neckDesign: 'Keyhole neck',
    sleeveType: 'Three quarter',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-013',
    name: 'Chanderi Silk Blouse',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Powder Blue', 'Mint Green', 'Peach', 'Lilac'],
    category: 'Blouses',
    neckDesign: 'Collar neck',
    sleeveType: 'Full sleeve',
    fabric: 'Chanderi'
  },
  {
    id: 'blouse-014',
    name: 'Block Print Casual Blouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'Green', 'Red', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'Round neck',
    sleeveType: 'Short sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-015',
    name: 'Banarasi Brocade Blouse',
    price: 2499,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Royal Purple', 'Deep Green', 'Maroon', 'Gold'],
    category: 'Blouses',
    neckDesign: 'Square neck',
    sleeveType: 'Elbow sleeve',
    fabric: 'Banarasi'
  },
  {
    id: 'blouse-016',
    name: 'Ajrakh Print Blouse',
    price: 1149,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Indigo', 'Black', 'Maroon', 'Brown'],
    category: 'Blouses',
    neckDesign: 'Mandarin collar',
    sleeveType: 'Half sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-017',
    name: 'Tie-Dye Bohemian Blouse',
    price: 949,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Multi-color', 'Blue-White', 'Pink-White', 'Green-White'],
    category: 'Blouses',
    neckDesign: 'Peasant neck',
    sleeveType: 'Bell sleeve',
    fabric: 'Rayon'
  },
  {
    id: 'blouse-018',
    name: 'Kantha Work Blouse',
    price: 1349,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Blue', 'Pink'],
    category: 'Blouses',
    neckDesign: 'Boat neck',
    sleeveType: 'Three quarter',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-019',
    name: 'Velvet Festive Blouse',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Deep Red', 'Royal Blue', 'Emerald', 'Purple'],
    category: 'Blouses',
    neckDesign: 'Deep V-neck',
    sleeveType: 'Long sleeve',
    fabric: 'Velvet'
  },
  {
    id: 'blouse-020',
    name: 'Gota Patti Work Blouse',
    price: 1599,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Pink', 'Yellow', 'Orange', 'Green'],
    category: 'Blouses',
    neckDesign: 'Sweetheart',
    sleeveType: 'Cap sleeve',
    fabric: 'Georgette'
  },
  // Continue with more blouse designs...
  {
    id: 'blouse-021',
    name: 'Warli Print Blouse',
    price: 1049,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Brown', 'White', 'Beige'],
    category: 'Blouses',
    neckDesign: 'High neck',
    sleeveType: 'Short sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-022',
    name: 'Ikat Pattern Blouse',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Blue', 'Red', 'Green', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Half sleeve',
    fabric: 'Silk'
  },
  {
    id: 'blouse-023',
    name: 'Phulkari Embroidered Blouse',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Pink', 'Orange', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'Round neck',
    sleeveType: 'Full sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-024',
    name: 'Chikankari Work Blouse',
    price: 1449,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Pink', 'Sky Blue'],
    category: 'Blouses',
    neckDesign: 'Scoop neck',
    sleeveType: 'Three quarter',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-025',
    name: 'Batik Print Blouse',
    price: 999,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Brown', 'Orange', 'Yellow', 'Green'],
    category: 'Blouses',
    neckDesign: 'Boat neck',
    sleeveType: 'Half sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-026',
    name: 'Madhubani Print Blouse',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Multi-color', 'Red-Yellow', 'Blue-Green', 'Pink-Orange'],
    category: 'Blouses',
    neckDesign: 'Square neck',
    sleeveType: 'Short sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-027',
    name: 'Tribal Print Blouse',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Red', 'White', 'Brown'],
    category: 'Blouses',
    neckDesign: 'Halter neck',
    sleeveType: 'Sleeveless',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-028',
    name: 'Kashmiri Embroidered Blouse',
    price: 2199,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Light Green', 'Peach', 'Lavender'],
    category: 'Blouses',
    neckDesign: 'High neck',
    sleeveType: 'Long sleeve',
    fabric: 'Wool'
  },
  {
    id: 'blouse-029',
    name: 'Contemporary Crop Blouse',
    price: 899,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Black', 'Grey', 'Beige'],
    category: 'Blouses',
    neckDesign: 'Off-shoulder',
    sleeveType: 'Sleeveless',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-030',
    name: 'Peplum Style Blouse',
    price: 1349,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy', 'Maroon', 'Forest Green', 'Mustard'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Three quarter',
    fabric: 'Georgette'
  },
  {
    id: 'blouse-031',
    name: 'Asymmetric Hem Blouse',
    price: 1149,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Coral', 'Mint', 'Lilac', 'Peach'],
    category: 'Blouses',
    neckDesign: 'Cowl neck',
    sleeveType: 'Cap sleeve',
    fabric: 'Chiffon'
  },
  {
    id: 'blouse-032',
    name: 'Keyhole Back Blouse',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Rose', 'Powder Blue', 'Sage', 'Champagne'],
    category: 'Blouses',
    neckDesign: 'Keyhole neck',
    sleeveType: 'Half sleeve',
    fabric: 'Silk'
  },
  {
    id: 'blouse-033',
    name: 'Ruffle Sleeve Blouse',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Pink', 'Yellow', 'Sky Blue'],
    category: 'Blouses',
    neckDesign: 'Round neck',
    sleeveType: 'Ruffle sleeve',
    fabric: 'Georgette'
  },
  {
    id: 'blouse-034',
    name: 'Mandala Print Blouse',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Purple', 'Teal', 'Orange', 'Magenta'],
    category: 'Blouses',
    neckDesign: 'Scoop neck',
    sleeveType: 'Short sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-035',
    name: 'Palazzo Style Blouse',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Cream', 'Beige', 'Light Brown', 'Tan'],
    category: 'Blouses',
    neckDesign: 'Square neck',
    sleeveType: 'Bell sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-036',
    name: 'Backless Designer Blouse',
    price: 1699,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Red', 'Gold', 'Silver'],
    category: 'Blouses',
    neckDesign: 'Halter neck',
    sleeveType: 'Sleeveless',
    fabric: 'Silk'
  },
  {
    id: 'blouse-037',
    name: 'Palazzo Kurti Blouse',
    price: 1299,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Green', 'Blue', 'Pink', 'Yellow'],
    category: 'Blouses',
    neckDesign: 'Boat neck',
    sleeveType: 'Three quarter',
    fabric: 'Rayon'
  },
  {
    id: 'blouse-038',
    name: 'Wrap Style Blouse',
    price: 1149,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Burgundy', 'Navy', 'Forest Green', 'Plum'],
    category: 'Blouses',
    neckDesign: 'Wrap neck',
    sleeveType: 'Half sleeve',
    fabric: 'Viscose'
  },
  {
    id: 'blouse-039',
    name: 'Cold Shoulder Blouse',
    price: 1049,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Light Blue', 'Pink', 'Mint'],
    category: 'Blouses',
    neckDesign: 'Cold shoulder',
    sleeveType: 'Long sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-040',
    name: 'Floral Embroidered Blouse',
    price: 1549,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Pink', 'Peach'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Full sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-041',
    name: 'Geometric Print Blouse',
    price: 999,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black-White', 'Blue-White', 'Red-White', 'Green-White'],
    category: 'Blouses',
    neckDesign: 'Round neck',
    sleeveType: 'Short sleeve',
    fabric: 'Polyester'
  },
  {
    id: 'blouse-042',
    name: 'Sheer Panel Blouse',
    price: 1399,
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'Navy', 'Burgundy', 'Emerald'],
    category: 'Blouses',
    neckDesign: 'High neck',
    sleeveType: 'Long sleeve',
    fabric: 'Chiffon'
  },
  {
    id: 'blouse-043',
    name: 'Printed Palazzo Blouse',
    price: 1249,
    image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Multi-print', 'Floral', 'Abstract', 'Paisley'],
    category: 'Blouses',
    neckDesign: 'Scoop neck',
    sleeveType: 'Three quarter',
    fabric: 'Rayon'
  },
  {
    id: 'blouse-044',
    name: 'Tassel Detail Blouse',
    price: 1349,
    image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['White', 'Cream', 'Light Blue', 'Peach'],
    category: 'Blouses',
    neckDesign: 'Tie neck',
    sleeveType: 'Half sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-045',
    name: 'Embellished Party Blouse',
    price: 1899,
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Gold', 'Silver', 'Rose Gold', 'Copper'],
    category: 'Blouses',
    neckDesign: 'Sweetheart',
    sleeveType: 'Sleeveless',
    fabric: 'Silk'
  },
  {
    id: 'blouse-046',
    name: 'Denim Style Blouse',
    price: 1099,
    image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Light Blue', 'Dark Blue', 'Black', 'White'],
    category: 'Blouses',
    neckDesign: 'Collar neck',
    sleeveType: 'Half sleeve',
    fabric: 'Denim'
  },
  {
    id: 'blouse-047',
    name: 'Vintage Lace Blouse',
    price: 1549,
    image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Ivory', 'Champagne', 'Blush', 'Dusty Rose'],
    category: 'Blouses',
    neckDesign: 'High neck',
    sleeveType: 'Long sleeve',
    fabric: 'Lace'
  },
  {
    id: 'blouse-048',
    name: 'Striped Casual Blouse',
    price: 849,
    image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Navy-White', 'Black-White', 'Red-White', 'Blue-White'],
    category: 'Blouses',
    neckDesign: 'V-neck',
    sleeveType: 'Short sleeve',
    fabric: 'Cotton'
  },
  {
    id: 'blouse-049',
    name: 'Palazzo Coordination Blouse',
    price: 1199,
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Coral', 'Mint', 'Lilac', 'Lemon'],
    category: 'Blouses',
    neckDesign: 'Boat neck',
    sleeveType: 'Three quarter',
    fabric: 'Georgette'
  },
  {
    id: 'blouse-050',
    name: 'Festival Special Blouse',
    price: 1799,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&q=80&w=500',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Red', 'Gold', 'Royal Blue', 'Deep Purple'],
    category: 'Blouses',
    neckDesign: 'Deep V-neck',
    sleeveType: 'Cap sleeve',
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

          {/* Blouses Collection - Updated with 50 designs */}
          <section id="blouses" className="py-16 px-4 bg-muted/20">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Blouses Collection</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Discover our extensive collection of designer blouses featuring traditional craftsmanship and contemporary designs
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {blousesCollection.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </CartProvider>
  );
};

export default Index;
