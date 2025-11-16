import { Heart } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-background to-blue-deep/10 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Nrityangan Logo" className="h-12 w-12 md:h-14 md:w-14 object-contain drop-shadow-lg" />
            <div>
              <p className="font-bold text-gradient-royal">Nrityangan</p>
              <p className="text-xs text-muted-foreground">Est. 1990</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-muted-foreground flex items-center justify-center space-x-1">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-accent fill-accent" />
              <span>for the love of dance</span>
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              © {new Date().getFullYear()} Nrityangan. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col items-end">
            <p className="text-sm text-muted-foreground">
              Preserving Classical Dance Since 1990
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
