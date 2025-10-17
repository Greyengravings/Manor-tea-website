import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingCart } from "lucide-react";
import teaImage1 from "@/assets/manor-tea-1.jpg";
import teaImage2 from "@/assets/manor-tea-2.jpg";
import teaImage3 from "@/assets/manor-tea-3.jpg";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Morning Blend",
      description: "A perfect start to your day with our signature blend",
      price: 299,
      image: teaImage1,
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Chai",
      description: "Traditional spiced tea with aromatic herbs",
      price: 249,
      image: teaImage2,
      tag: "Popular"
    },
    {
      id: 3,
      name: "Earl Grey Manor",
      description: "Elegant bergamot-infused black tea",
      price: 349,
      image: teaImage3,
      tag: "Premium"
    },
    {
      id: 4,
      name: "Green Serenity",
      description: "Light and refreshing green tea blend",
      price: 279,
      image: teaImage1,
      tag: "New"
    },
    {
      id: 5,
      name: "Masala Magic",
      description: "Rich and warming spiced chai blend",
      price: 299,
      image: teaImage2,
      tag: "Bestseller"
    },
    {
      id: 6,
      name: "Afternoon Delight",
      description: "Smooth and comforting afternoon tea",
      price: 329,
      image: teaImage3,
      tag: "Premium"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Our Tea Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our carefully curated selection of premium teas, each crafted to perfection
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden manor-shadow manor-transition hover:scale-105 border-none">
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-72 object-cover"
                />
                <Badge className="absolute top-4 right-4 manor-gradient border-none">
                  {product.tag}
                </Badge>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 left-4 bg-card/80 backdrop-blur hover:bg-card"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <CardContent className="pt-6">
                <h3 className="text-2xl font-serif font-semibold mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="text-2xl font-bold text-primary">₹{product.price}</div>
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
      </div>

      <Footer />
    </div>
  );
};

export default Products;
