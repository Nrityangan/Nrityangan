import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="hero" intensity="high" />
      
      {/* Additional Hero-specific Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-deep via-primary to-accent opacity-15" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(234,179,8,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.2),transparent_40%)]" />
      
      {/* Enhanced 3D Floating Orbs with Motion */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl shadow-glow-gold"
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-primary/30 rounded-full blur-3xl shadow-glow-blue"
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <motion.div 
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gold/30 rounded-full blur-2xl"
        animate={{
          y: [0, -40, 0],
          rotate: [0, 180, 360]
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/3 right-1/4 w-36 h-36 bg-blue-deep/20 rounded-full blur-3xl"
        animate={{
          y: [0, 35, 0],
          x: [0, -25, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Enhanced Content with Motion */}
      <motion.div 
        className="relative z-10 container mx-auto px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div 
          className="max-w-4xl mx-auto space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-gradient-royal mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            Welcome to Nrityangan
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            Experience the Grace and Beauty of Indian Classical Dance
          </motion.p>
          
          <motion.p 
            className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
          >
            Since 1990, we've been nurturing artists and preserving the rich heritage of Indian classical dance forms. 
            Join us on a journey of rhythm, expression, and cultural excellence.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-deep hover:opacity-90 transition-all duration-300 text-white px-8 shadow-lg hover:shadow-xl"
                onClick={scrollToContact}
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground px-8 transition-all duration-300"
                onClick={() => document.getElementById("programs")?.scrollIntoView({ behavior: "smooth" })}
              >
                Explore Programs
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Enhanced Bottom Wave with Animation */}
      <motion.div 
        className="absolute bottom-0 left-0 right-0"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.3, ease: "easeOut" }}
      >
        <svg viewBox="0 0 1440 120" className="w-full h-auto">
          <motion.path
            fill="hsl(var(--background))"
            d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
            animate={{
              d: [
                "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z",
                "M0,64L80,58.7C160,53,320,43,480,48C640,53,800,75,960,80C1120,85,1280,75,1360,69.3L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z",
                "M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;
