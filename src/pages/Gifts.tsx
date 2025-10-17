import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Gift, ShoppingCart } from "lucide-react";
import teaImage1 from "@/assets/manor-tea-1.jpg";
import teaImage2 from "@/assets/manor-tea-2.jpg";
import teaImage3 from "@/assets/manor-tea-3.jpg";

const Gifts = () => {
  const giftSets = [
    {
      id: 1,
      name: "Starter Collection",
      description: "Perfect introduction to Manor teas with 3 signature blends",
      price: 799,
      items: "3 Tea Varieties",
      image: teaImage1,
      tag: "Popular"
    },
    {
      id: 2,
      name: "Premium Gift Box",
      description: "Luxury selection of our finest teas in elegant packaging",
      price: 1499,
      items: "5 Premium Teas",
      image: teaImage2,
      tag: "Bestseller"
    },
    {
      id: 3,
      name: "Tea Lover's Delight",
      description: "Complete collection for the ultimate tea enthusiast",
      price: 2499,
      items: "8 Varieties + Accessories",
      image: teaImage3,
      tag: "Premium"
    },
    {
      id: 4,
      name: "Morning Ritual Set",
      description: "Everything needed for the perfect morning tea experience",
      price: 1299,
      items: "4 Morning Blends",
      image: teaImage1,
      tag: "New"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Gift className="h-16 w-16 mx-auto mb-4 text-primary" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Gift Collections
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Thoughtfully curated gift sets perfect for every occasion
          </p>
        </div>

        {/* Gift Sets Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {giftSets.map((set) => (
            <Card key={set.id} className="overflow-hidden manor-shadow manor-transition hover:scale-105 border-none">
              <div className="relative">
                <img 
                  src={set.image} 
                  alt={set.name}
                  className="w-full h-80 object-cover"
                />
                <Badge className="absolute top-4 right-4 manor-gradient border-none">
                  {set.tag}
                </Badge>
              </div>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-serif font-semibold">{set.name}</h3>
                  <Badge variant="outline" className="ml-2">{set.items}</Badge>
                </div>
                <p className="text-muted-foreground mb-4">{set.description}</p>
                <div className="text-2xl font-bold text-primary">₹{set.price}</div>
              </CardContent>
              <CardFooter>
                <Button className="w-full manor-gradient text-foreground hover:scale-105 manor-transition">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Add to Cart
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Custom Gift Message */}
        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="manor-gradient border-none p-8">
            <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">
              Need a Custom Gift?
            </h3>
            <p className="text-foreground/80 mb-6">
              We'd love to help you create a personalized gift set. Contact us for custom arrangements.
            </p>
            <Button variant="secondary" size="lg" className="manor-shadow">
              Contact Us
            </Button>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Gifts;
