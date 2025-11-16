import { Card } from "@/components/ui/card";
import { Play, Image as ImageIcon } from "lucide-react";
import { useEffect, useRef } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const Gallery = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    const items = sectionRef.current?.querySelectorAll(".gallery-item");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const videos = [
    { title: "Annual Performance 2023", duration: "12:45", type: "video" },
    { title: "Bharatanatyam Solo", duration: "8:30", type: "video" },
    { title: "Kathak Group Performance", duration: "15:20", type: "video" },
    { title: "Odissi Recital", duration: "10:15", type: "video" },
    { title: "Student Showcase 2023", duration: "20:00", type: "video" },
    { title: "Festival Celebration", duration: "18:45", type: "video" },
  ];

  const images = [
    { title: "Performance Gallery 2023", count: "45 photos" },
    { title: "Dance Workshop", count: "32 photos" },
    { title: "Cultural Festival", count: "58 photos" },
  ];

  return (
    <section id="gallery" className="relative py-20 bg-gradient-to-b from-background to-blue-light/20 overflow-hidden">
      {/* Enhanced Animated Background */}
      <AnimatedBackground variant="section" intensity="medium" />
      
      {/* Additional Decorative Elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-accent/10 rounded-full blur-3xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 15, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 left-10 w-40 h-40 bg-primary/10 rounded-full blur-3xl"
        animate={{
          y: [0, 25, 0],
          x: [0, -20, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4" ref={sectionRef}>
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gradient-royal mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Performance Gallery
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Witness the beauty and grace of our students' performances
          </motion.p>
        </motion.div>

        {/* Videos Section */}
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 px-6 py-2 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full backdrop-blur-sm">
              <Play className="h-5 w-5 text-accent" />
              <h3 className="text-2xl font-bold text-gradient-gold">Performance Videos</h3>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {videos.map((video, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group overflow-hidden glass-strong border-2 border-primary/30 hover:border-accent/70 transition-all duration-500 cursor-pointer hover:shadow-glow-gold h-full">
                  <motion.div 
                    className="relative aspect-video bg-gradient-to-br from-primary/30 via-accent/20 to-gold/30 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-deep/50 to-gold/50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.3)_70%)]" />
                    
                    {/* Decorative Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(234,179,8,0.3)_10px,rgba(234,179,8,0.3)_11px)]" />
                    
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-3 shadow-lg"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <Play className="h-8 w-8 text-primary fill-primary ml-1 group-hover:text-white group-hover:fill-white" />
                      </motion.div>
                      <p className="text-white font-semibold text-sm bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {video.duration}
                      </p>
                    </div>
                  </motion.div>
                  <div className="p-4">
                    <motion.h3 
                      className="font-semibold text-foreground group-hover:text-primary transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
                    >
                      {video.title}
                    </motion.h3>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="flex items-center justify-center mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center space-x-3 px-6 py-2 bg-gradient-to-r from-accent/20 to-gold/20 rounded-full backdrop-blur-sm">
              <ImageIcon className="h-5 w-5 text-accent" />
              <h3 className="text-2xl font-bold text-gradient-gold">Photo Albums</h3>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (videos.length + index) * 0.1 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 }
                }}
              >
                <Card className="group overflow-hidden glass-strong border-2 border-accent/30 hover:border-gold/70 transition-all duration-500 cursor-pointer hover:shadow-glow-blue h-full">
                  <motion.div 
                    className="relative aspect-[4/3] bg-gradient-to-br from-accent/30 via-gold/20 to-primary/30 flex items-center justify-center overflow-hidden"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-tr from-gold/50 to-blue-deep/50" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle,transparent_30%,rgba(0,0,0,0.3)_70%)]" />
                    
                    {/* Grid Pattern */}
                    <div className="absolute inset-0 opacity-20 bg-[repeating-conic-gradient(from_0deg,transparent_0deg_90deg,rgba(234,179,8,0.3)_90deg_92deg)]" style={{ backgroundSize: '40px 40px' }} />
                    
                    <div className="relative z-10 text-center">
                      <motion.div 
                        className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center mx-auto mb-3 shadow-lg"
                        whileHover={{ 
                          scale: 1.2,
                          rotate: 360
                        }}
                        transition={{ duration: 0.5 }}
                      >
                        <ImageIcon className="h-8 w-8 text-accent group-hover:text-white" />
                      </motion.div>
                      <p className="text-white font-semibold text-sm bg-background/50 backdrop-blur-sm px-3 py-1 rounded-full">
                        {image.count}
                      </p>
                    </div>
                  </motion.div>
                  <div className="p-4">
                    <motion.h3 
                      className="font-semibold text-foreground group-hover:text-accent transition-colors"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: (videos.length + index) * 0.1 + 0.3 }}
                    >
                      {image.title}
                    </motion.h3>
                  </div>
              </Card>
            </motion.div>
          ))}
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Card className="inline-block p-6 glass border-2 border-accent/30 royal-frame-small hover:border-accent/60 transition-all duration-300">
              <p className="text-foreground/90">
                <span className="text-gradient-gold font-bold">Subscribe</span> to our YouTube channel 
                for more performances and dance tutorials!
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
