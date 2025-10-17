import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Minus, Plus, Trash2, ArrowRight } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Cart = () => {
  // Mock data - in real app this would come from state/context
  const cartItems = [
    {
      id: 1,
      name: "Morning Blend",
      price: 299,
      quantity: 2,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Classic Chai",
      price: 249,
      quantity: 1,
      image: "/placeholder.svg"
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 50;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Shopping Cart
          </h1>
          <p className="text-lg text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        {cartItems.length === 0 ? (
          <Card className="max-w-2xl mx-auto text-center p-12">
            <CardContent>
              <ShoppingCart className="h-20 w-20 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-serif font-semibold mb-3">
                Your cart is empty
              </h2>
              <p className="text-muted-foreground mb-6">
                Add some delicious teas to get started
              </p>
              <Button className="manor-gradient text-foreground">
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id} className="manor-shadow border-none">
                  <CardContent className="flex items-center gap-6 p-6">
                    <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-semibold mb-2">{item.name}</h3>
                      <p className="text-lg font-bold text-primary">₹{item.price}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input 
                        type="number" 
                        value={item.quantity} 
                        className="w-16 text-center"
                        readOnly
                      />
                      <Button variant="outline" size="icon" className="h-8 w-8">
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                    <Button variant="ghost" size="icon">
                      <Trash2 className="h-5 w-5 text-destructive" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="manor-shadow border-none sticky top-24">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-serif font-bold mb-6">Order Summary</h2>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold">₹{subtotal}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-semibold">₹{shipping}</span>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between text-lg">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold text-primary">₹{total}</span>
                    </div>
                  </div>

                  <Button className="w-full mt-6 manor-gradient text-foreground hover:scale-105 manor-transition">
                    Proceed to Checkout
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <p className="text-sm text-muted-foreground text-center">
                      Free shipping on orders above ₹500
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Cart;
