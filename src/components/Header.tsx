import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Dance Programs", id: "programs" },
    { label: "Teacher", id: "teacher" },
    { label: "Reviews", id: "reviews" },
    { label: "Gallery", id: "gallery" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 py-4">
      <div
        className={`container mx-auto px-6 ${isScrolled ? "py-2" : "py-4"} rounded-full glass-strong backdrop-blur-xl bg-background/10 border border-white/10 shadow-2xl transition-all duration-300 ${
          isScrolled ? "shadow-glow-gold" : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="px-4 py-2 rounded-full bg-gradient-to-br from-primary/10 to-accent/10 backdrop-blur-sm shadow-glow-gold">
              <img
                src={logo}
                alt="Nrityangan Logo"
                className={`${isScrolled ? "h-12 w-12 md:h-16 md:w-16" : "h-16 w-16 md:h-20 md:w-20"} object-contain drop-shadow-lg transition-all duration-300`}
              />
            </div>
            <div>
              <h1
                className={`${isScrolled ? "text-xl md:text-2xl" : "text-3xl md:text-4xl"} font-serif font-bold text-gradient-royal drop-shadow-sm transition-all duration-300`}
              >
                Nrityangan
              </h1>
              <p className="text-xs text-muted-foreground">Est. 1990</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors font-medium relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 glass rounded-lg p-4 animate-slide-up">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left py-3 text-foreground hover:text-primary transition-colors font-medium border-b border-border last:border-b-0"
              >
                {item.label}
              </button>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
