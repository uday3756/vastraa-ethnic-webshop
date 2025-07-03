
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { useCart } from '@/hooks/useCart';
import { toast } from '@/hooks/use-toast';

interface CheckoutFormProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
  discount: number;
}

const CheckoutForm = ({ isOpen, onClose, total, discount }: CheckoutFormProps) => {
  const { items, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.address) {
      toast({
        variant: "destructive",
        title: "Missing Information",
        description: "Please fill in all required fields.",
      });
      return;
    }

    // Create order summary
    const orderSummary = items.map(item => 
      `${item.name} (${item.size}, ${item.color}) - Qty: ${item.quantity} - ₹${item.price * item.quantity}`
    ).join('\n');

    const discountText = discount > 0 ? `\nDiscount Applied: 15% (₹${(total / (1 - discount) * discount).toFixed(2)})` : '';
    
    const message = `🛍️ *New Order from Vastraa*

👤 *Customer Details:*
Name: ${formData.name}
Phone: ${formData.phone}
Address: ${formData.address}

📦 *Order Details:*
${orderSummary}${discountText}

💰 *Total Amount: ₹${total.toFixed(2)}*

Please confirm this order. Thank you!`;

    const phoneNumber = '+917742898778';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
    
    clearCart();
    toast({
      title: "Order Placed!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
    
    onClose();
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Checkout Details</SheetTitle>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name *</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <Label htmlFor="address">Full Delivery Address *</Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Enter your complete delivery address"
                rows={4}
                required
              />
            </div>
          </div>

          <div className="border-t pt-4">
            <div className="space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>₹{(total / (1 - discount)).toFixed(2)}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount (15%):</span>
                  <span>-₹{(total / (1 - discount) * discount).toFixed(2)}</span>
                </div>
              )}
              <div className="flex justify-between font-semibold text-lg">
                <span>Total:</span>
                <span>₹{total.toFixed(2)}</span>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Send Order via WhatsApp
            </Button>
          </div>
        </form>
      </SheetContent>
    </Sheet>
  );
};

export default CheckoutForm;
