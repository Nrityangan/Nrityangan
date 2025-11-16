import { Card } from "@/components/ui/card";
import { Award, Users, Heart, Music } from "lucide-react";
import AnimatedBackground from "@/components/AnimatedBackground";
import { motion } from "framer-motion";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "30+ Years Legacy",
      description: "Established in 1990, preserving classical traditions",
    },
    {
      icon: Users,
      title: "Expert Training",
      description: "Personalized guidance from experienced gurus",
    },
    {
      icon: Heart,
      title: "Passion & Dedication",
      description: "Nurturing artists with love and commitment",
    },
    {
      icon: Music,
      title: "Cultural Heritage",
      description: "Celebrating India's rich dance traditions",
    },
  ];

  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-background to-blue-light/20 overflow-hidden">
      {/* Subtle Animated Background */}
      <AnimatedBackground variant="section" intensity="low" />
      
      <div className="relative z-10 container mx-auto px-4">
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
            About Nrityangan
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Where tradition meets excellence in classical dance education
          </motion.p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Card className="p-8 glass border-2 border-accent/20 hover:shadow-xl transition-all duration-300">
            <motion.p 
              className="text-lg text-foreground/90 leading-relaxed mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.span 
                className="text-2xl text-gradient-gold font-bold"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                Nrityangan
              </motion.span> is more than just a dance school 
              – it's a sanctuary where the timeless art of Indian classical dance comes alive. Since our establishment in 1990, 
              we have dedicated ourselves to preserving and propagating the rich heritage of Indian classical dance forms.
            </motion.p>
            <motion.p 
              className="text-lg text-foreground/90 leading-relaxed"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Our mission is to nurture young talents, instill discipline and cultural values, and create a platform 
              where students can express themselves through the medium of dance. We believe in maintaining the authenticity 
              of classical forms while encouraging creative expression and individual growth.
            </motion.p>
          </Card>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <Card className="p-6 glass border-2 border-primary/20 hover:border-accent/50 transition-all duration-300 hover:shadow-xl h-full">
                <motion.div 
                  className="flex flex-col items-center text-center space-y-3"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div 
                    className="p-3 rounded-full bg-gradient-to-br from-primary to-accent"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.15
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </motion.div>
                  <motion.h3 
                    className="text-xl font-bold text-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.3 }}
                  >
                    {feature.title}
                  </motion.h3>
                  <motion.p 
                    className="text-muted-foreground"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 + 0.5 }}
                  >
                    {feature.description}
                  </motion.p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
