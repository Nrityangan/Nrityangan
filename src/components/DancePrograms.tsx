import { Card } from "@/components/ui/card";
import { useEffect, useRef } from "react";

const DancePrograms = () => {
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

    const cards = sectionRef.current?.querySelectorAll(".program-card");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);
  const programs = [
    {
      name: "Bharatanatyam",
      description: "The oldest classical dance form from Tamil Nadu, known for its grace, purity, and sculpturesque poses. Characterized by fixed upper torso, bent legs, and sophisticated hand gestures.",
      color: "from-blue-deep to-primary",
    },
    {
      name: "Kathak",
      description: "Originating from North India, this form emphasizes rhythmic foot movements and spins. Known for intricate footwork, expressive gestures, and the art of storytelling through dance.",
      color: "from-primary to-accent",
    },
    {
      name: "Odissi",
      description: "Ancient dance form from Odisha, characterized by fluid movements and sculpturesque poses. Known for the tribhangi posture and graceful expressions depicting divine love.",
      color: "from-accent to-gold-dark",
    },
    {
      name: "Kuchipudi",
      description: "Classical dance-drama from Andhra Pradesh, combining dance with acting. Features quick foot movements, graceful hand gestures, and narrative dance sequences.",
      color: "from-gold-dark to-blue-deep",
    },
  ];

  return (
    <section id="programs" className="py-20 bg-background relative overflow-hidden">
      {/* Decorative Parallax Border Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-24 royal-border-pattern animate-scroll-horizontal" />
        <div className="absolute bottom-0 left-0 w-full h-24 royal-border-pattern animate-scroll-horizontal-reverse" />
      </div>
      
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gradient-royal mb-4">
            Dance Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore the rich diversity of Indian classical dance forms we teach
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {programs.map((program, index) => (
            <div key={index} className="group program-card opacity-0" style={{ animationDelay: `${index * 0.2}s` }}>
              <Card className="royal-frame glass hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 relative overflow-hidden">
                {/* Ornate Corner Decorations */}
                <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-accent opacity-60 royal-corner" />
                <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-accent opacity-60 royal-corner" />
                <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-accent opacity-60 royal-corner" />
                <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-accent opacity-60 royal-corner" />
                
                <div className="p-8 relative z-10">
                  <div className={`inline-block mb-4 px-6 py-2 rounded-full bg-gradient-to-r ${program.color} shadow-lg`}>
                    <h3 className="text-2xl font-bold text-white">{program.name}</h3>
                  </div>
                  <p className="text-foreground/80 leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-6 flex items-center space-x-2">
                    <div className="flex-1 h-1 bg-gradient-to-r from-primary via-accent to-gold rounded-full" />
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                  </div>
                </div>
                
                {/* Hover Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              </Card>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.8s" }}>
          <Card className="max-w-3xl mx-auto p-6 glass border-2 border-gold/30 royal-frame-small">
            <p className="text-lg text-foreground/90">
              <span className="text-gradient-gold font-bold">All programs</span> include comprehensive training in:
              <span className="block mt-2 text-muted-foreground">
                Theory • Technique • Expressions • Rhythm • Performance Skills • Cultural Context
              </span>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DancePrograms;
