import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles, Gift, Leaf, Star, ShoppingCart, Heart, Package, Truck, Coffee, GiftIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import teaImage1 from "@/assets/manor-tea-1.jpg";
import teaImage2 from "@/assets/manor-tea-2.jpg";
import teaImage3 from "@/assets/manor-tea-3.jpg";

const Home = () => {
  const topProducts = [
    {
      id: 1,
      name: "Morning Blend",
      description: "Perfect start to your day",
      price: 299,
      rating: 4.9,
      reviews: 128,
      image: teaImage1,
      tag: "Bestseller"
    },
    {
      id: 2,
      name: "Classic Chai",
      description: "Traditional spiced tea",
      price: 249,
      rating: 4.8,
      reviews: 95,
      image: teaImage2,
      tag: "Popular"
    },
    {
      id: 3,
      name: "Earl Grey Manor",
      description: "Elegant bergamot blend",
      price: 349,
      rating: 4.9,
      reviews: 87,
      image: teaImage3,
      tag: "Premium"
    },
    {
      id: 4,
      name: "Green Serenity",
      description: "Light and refreshing",
      price: 279,
      rating: 4.7,
      reviews: 76,
      image: teaImage1,
      tag: "New"
    },
    {
      id: 5,
      name: "Masala Magic",
      description: "Rich spiced blend",
      price: 299,
      rating: 4.8,
      reviews: 102,
      image: teaImage2,
      tag: "Bestseller"
    },
    {
      id: 6,
      name: "Afternoon Delight",
      description: "Smooth afternoon tea",
      price: 329,
      rating: 4.7,
      reviews: 64,
      image: teaImage3,
      tag: "Premium"
    }
  ];

  const features = [
    {
      icon: Leaf,
      title: "Premium Quality",
      description: "Carefully sourced leaves from the finest tea gardens"
    },
    {
      icon: Sparkles,
      title: "Morning Ritual",
      description: "Start your day with warmth and satisfaction"
    },
    {
      icon: Gift,
      title: "Perfect Gifts",
      description: "Thoughtfully curated sets for every occasion"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Video Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-accent/10 to-background">
        <div className="container mx-auto px-4 py-12">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
              Explore Our Products
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium teas crafted to perfection for your morning ritual
            </p>
          </div>
          
          {/* Video Container */}
          <div className="max-w-5xl mx-auto manor-shadow rounded-2xl overflow-hidden aspect-video bg-muted">
            <video
              src="/1.mp4"
              autoPlay
              muted
              loop
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="text-center mt-8">
            <Link to="/products">
              <Button size="lg" className="manor-gradient text-foreground manor-shadow hover:scale-105 manor-transition">
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Rated Products */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Star className="h-6 w-6 text-primary fill-primary" />
              <h2 className="text-4xl md:text-5xl font-serif font-bold">
                Top Rated Products
              </h2>
              <Star className="h-6 w-6 text-primary fill-primary" />
            </div>
            <p className="text-lg text-muted-foreground">
              Our customers' favorite teas with exceptional reviews
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden manor-shadow manor-transition hover:scale-105 border-none">
                <div className="relative">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover"
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
                  <div className="flex items-center gap-1 mb-2">
                    <Star className="h-4 w-4 text-primary fill-primary" />
                    <span className="font-semibold">{product.rating}</span>
                    <span className="text-sm text-muted-foreground">({product.reviews} reviews)</span>
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-1">{product.name}</h3>
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
          
          <div className="text-center mt-12">
            <Link to="/products">
              <Button size="lg" variant="outline" className="hover:bg-primary/10 manor-transition">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-br from-background via-card to-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Premium offerings crafted with care for your convenience
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <Package className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">All Grocery Items</h3>
                <p className="text-muted-foreground">
                  Discover our premium all grocery items selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <Coffee className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Different types of TEA</h3>
                <p className="text-muted-foreground">
                  Discover our premium different types of tea selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <Truck className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Free Home Delivery in Nagpur</h3>
                <p className="text-muted-foreground">
                  Discover our premium free home delivery in nagpur selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <Leaf className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Dry Fruits</h3>
                <p className="text-muted-foreground">
                  Discover our premium dry fruits selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <GiftIcon className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Gift Hampers</h3>
                <p className="text-muted-foreground">
                  Discover our premium gift hampers selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>

            <Card className="border-none manor-shadow manor-transition hover:scale-105 hover:shadow-2xl">
              <CardContent className="pt-8 pb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full manor-gradient mb-4">
                  <Star className="h-7 w-7 text-foreground" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-2">Special Requests Orders</h3>
                <p className="text-muted-foreground">
                  Discover our premium special requests orders selection, carefully curated for quality and taste.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Why Choose Manor
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the perfect blend of tradition and quality
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-none manor-shadow manor-transition hover:scale-105">
                <CardContent className="pt-8 pb-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full manor-gradient mb-4">
                    <feature.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 manor-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-foreground">
            Begin Your Morning Ritual
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Discover the perfect tea to start your day with warmth and joy
          </p>
          <Link to="/products">
            <Button size="lg" variant="secondary" className="manor-shadow hover:scale-105 manor-transition">
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
