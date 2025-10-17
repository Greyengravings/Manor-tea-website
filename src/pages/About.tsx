import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Leaf, Heart, Award } from "lucide-react";
import teaImage from "@/assets/manor-tea-2.jpg";
import factoryImage from "@/assets/manor-factory.jpg";
import shopImage from "@/assets/manor-shop.jpg";

const About = () => {
  const values = [
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We source our teas ethically and sustainably from trusted tea gardens"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Every blend is crafted with love and dedication to quality"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Committed to delivering the finest tea experience to our customers"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Our Story
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Manor began with a simple belief: that every morning deserves to start with a perfect cup of tea
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4">
            <div className="manor-shadow rounded-xl overflow-hidden">
              <img 
                src={teaImage} 
                alt="Manor Tea" 
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="manor-shadow rounded-xl overflow-hidden manor-transition hover:scale-105">
                <img 
                  src={factoryImage} 
                  alt="Manor Factory" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm font-semibold text-center">Our Factory</p>
                </div>
              </div>
              <div className="manor-shadow rounded-xl overflow-hidden manor-transition hover:scale-105">
                <img 
                  src={shopImage} 
                  alt="Manor Shop" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-3 bg-card">
                  <p className="text-sm font-semibold text-center">Our Shop</p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold">
              The Tea of Your Morning
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Manor was founded on the principle that tea is more than just a beverage – it's a ritual, 
              a moment of peace, and a connection to tradition. Our journey began in the heart of tea country, 
              where we discovered the perfect blends that would become the foundation of our brand.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Like a never-ending cup of chai, we believe love should always be satisfying and bring warmth 
              to hearts. This philosophy guides everything we do, from selecting the finest tea leaves to 
              creating packaging that feels like a warm embrace.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Today, Manor continues to grow, bringing joy and warmth to homes across the country, 
              one cup at a time.
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-4xl font-serif font-bold text-center mb-12">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-none manor-shadow text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full manor-gradient mb-4">
                    <value.icon className="h-8 w-8 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-serif font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="manor-gradient border-none p-12">
            <h2 className="text-3xl font-serif font-bold mb-4 text-foreground">
              Our Mission
            </h2>
            <p className="text-xl text-foreground/90 leading-relaxed">
              To bring warmth, joy, and satisfaction to every morning through exceptional tea 
              that connects people to tradition, quality, and the simple pleasure of a perfect cup.
            </p>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
