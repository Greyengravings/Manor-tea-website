import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart, Trash2 } from "lucide-react";

const Favourites = () => {
  // Mock data - in real app this would come from state/context
  const favourites = [
    {
      id: 1,
      name: "Morning Blend",
      price: 299,
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Earl Grey Manor",
      price: 349,
      image: "/placeholder.svg"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <Heart className="h-16 w-16 mx-auto mb-4 text-primary fill-primary" />
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
            Your Favourites
          </h1>
          <p className="text-lg text-muted-foreground">
            Teas you love, all in one place
          </p>
        </div>

        {favourites.length === 0 ? (
          <Card className="max-w-2xl mx-auto text-center p-12">
            <CardContent>
              <Heart className="h-20 w-20 mx-auto mb-4 text-muted-foreground" />
              <h2 className="text-2xl font-serif font-semibold mb-3">
                No favourites yet
              </h2>
              <p className="text-muted-foreground mb-6">
                Start adding teas to your favourites to see them here
              </p>
              <Button className="manor-gradient text-foreground">
                Browse Products
              </Button>
            </CardContent>
          </Card>
        ) : (
          <div className="max-w-4xl mx-auto space-y-4">
            {favourites.map((item) => (
              <Card key={item.id} className="manor-shadow border-none">
                <CardContent className="flex items-center gap-6 p-6">
                  <div className="w-24 h-24 bg-muted rounded-lg flex-shrink-0"></div>
                  <div className="flex-1">
                    <h3 className="text-xl font-serif font-semibold mb-1">{item.name}</h3>
                    <p className="text-lg font-bold text-primary">₹{item.price}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button className="manor-gradient text-foreground">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                    <Button variant="outline" size="icon">
                      <Trash2 className="h-4 w-4 text-destructive" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Favourites;
