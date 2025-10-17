import { Link, useLocation } from "react-router-dom";
import { ShoppingCart, Heart, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import manorLogo from "@/assets/manor-logo.png";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [cartCount] = useState(0);
  const [favCount] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/gifts", label: "Gifts" },
    { path: "/about", label: "About Us" },
    { path: "/leadership", label: "Leadership" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 manor-transition hover:opacity-80">
            <img src={manorLogo} alt="Manor Tea" className="h-12 w-auto" />
            <div className="hidden md:block">
              <div className="text-2xl font-serif font-bold tracking-tight">MANOR</div>
              <div className="text-xs text-muted-foreground tracking-wider">THE TEA OF YOUR MORNING</div>
            </div>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-md text-sm font-medium manor-transition ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex items-center gap-2">
            <Link to="/favourites">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative manor-transition hover:scale-110 ${
                  isActive("/favourites") ? "bg-accent/20 text-accent" : ""
                }`}
              >
                <Heart className={`h-5 w-5 ${isActive("/favourites") ? "fill-accent" : ""}`} />
                {favCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-accent">
                    {favCount}
                  </Badge>
                )}
              </Button>
            </Link>
            <Link to="/cart">
              <Button 
                variant="ghost" 
                size="icon" 
                className={`relative manor-transition hover:scale-110 ${
                  isActive("/cart") ? "bg-primary/20 text-primary" : ""
                }`}
              >
                <ShoppingCart className={`h-5 w-5 ${isActive("/cart") ? "fill-primary" : ""}`} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary">
                    {cartCount}
                  </Badge>
                )}
              </Button>
            </Link>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-md text-lg font-medium manor-transition ${
                        isActive(link.path)
                          ? "text-primary bg-primary/10"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
