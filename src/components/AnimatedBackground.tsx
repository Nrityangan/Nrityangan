import React, { useEffect, useState, useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
  intensity?: 'low' | 'medium' | 'high';
  className?: string;
}

const AnimatedBackground: React.FC<AnimatedBackgroundProps> = ({ 
  variant = 'section', 
  intensity = 'medium',
  className = '' 
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200 };
  const mouseXSpring = useSpring(mouseX, springConfig);
  const mouseYSpring = useSpring(mouseY, springConfig);

  // Transform mouse position to background movement
  const backgroundX = useTransform(mouseXSpring, [0, 1], [-20, 20]);
  const backgroundY = useTransform(mouseYSpring, [0, 1], [-20, 20]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      
      setMousePosition({ x, y });
      mouseX.set(x);
      mouseY.set(y);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mouseX, mouseY]);

  const getIntensityMultiplier = () => {
    switch (intensity) {
      case 'low': return 0.3;
      case 'high': return 1;
      default: return 0.6;
    }
  };

  const multiplier = getIntensityMultiplier();

  // Dance-inspired SVG shapes
  const DanceShape = ({ type, className }: { type: 'mudra' | 'note' | 'silhouette'; className?: string }) => {
    const shapes = {
      mudra: (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M50 20c-5 0-10 5-10 10v40c0 5 5 10 10 10s10-5 10-10V30c0-5-5-10-10-10zM30 35c-3 0-5 2-5 5v25c0 3 2 5 5 5s5-2 5-5V40c0-3-2-5-5-5zM70 35c-3 0-5 2-5 5v25c0 3 2 5 5 5s5-2 5-5V40c0-3-2-5-5-5z" fill="currentColor" opacity="0.4" />
        </svg>
      ),
      note: (
        <svg viewBox="0 0 100 100" className={className}>
          <ellipse cx="30" cy="70" rx="8" ry="6" fill="currentColor" opacity="0.4" />
          <ellipse cx="70" cy="60" rx="8" ry="6" fill="currentColor" opacity="0.4" />
          <path d="M38 70 Q38 40 72 60" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
        </svg>
      ),
      silhouette: (
        <svg viewBox="0 0 100 100" className={className}>
          <path d="M50 15c-8 0-15 7-15 15s7 15 15 15 15-7 15-15-7-15-15-15zM35 45c-5 0-10 5-10 10v20c0 5 5 10 10 10h30c5 0 10-5 10-10V55c0-5-5-10-10-10H35z" fill="currentColor" opacity="0.3" />
        </svg>
      )
    };
    
    return shapes[type];
  };

  return (
    <div 
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity: multiplier }}
    >
      {/* Animated gradient background */}
      <motion.div 
        className="absolute inset-0"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, 
            hsla(45, 95%, 55%, 0.1) 0%, 
            hsla(220, 70%, 45%, 0.05) 50%, 
            transparent 70%)`,
        }}
        animate={{
          background: [
            `radial-gradient(circle at 20% 30%, hsla(45, 95%, 55%, 0.1) 0%, hsla(220, 70%, 45%, 0.05) 50%, transparent 70%)`,
            `radial-gradient(circle at 80% 70%, hsla(220, 70%, 45%, 0.1) 0%, hsla(45, 95%, 55%, 0.05) 50%, transparent 70%)`,
            `radial-gradient(circle at 50% 50%, hsla(45, 95%, 55%, 0.1) 0%, hsla(220, 70%, 45%, 0.05) 50%, transparent 70%)`,
            `radial-gradient(circle at 20% 30%, hsla(45, 95%, 55%, 0.1) 0%, hsla(220, 70%, 45%, 0.05) 50%, transparent 70%)`,
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Floating dance shapes */}
      <motion.div
        className="absolute top-10 left-10 text-accent"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <DanceShape type="mudra" className="w-16 h-16" />
      </motion.div>

      <motion.div
        className="absolute top-20 right-20 text-primary"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -15, 0],
          scale: [1, 1.15, 1]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <DanceShape type="note" className="w-12 h-12" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 left-20 text-gold"
        animate={{
          y: [0, -25, 0],
          rotate: [0, 5, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <DanceShape type="silhouette" className="w-20 h-20" />
      </motion.div>

      <motion.div
        className="absolute bottom-10 right-10 text-blue-deep"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 3
        }}
      >
        <DanceShape type="mudra" className="w-14 h-14" />
      </motion.div>

      {/* Wave patterns */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          transform: `translate(${backgroundX}px, ${backgroundY}px)`
        }}
      >
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M0,400 Q300,300 600,400 T1200,400"
            stroke="hsl(45, 95%, 55%)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            animate={{
              d: [
                "M0,400 Q300,300 600,400 T1200,400",
                "M0,400 Q300,500 600,400 T1200,400",
                "M0,400 Q300,300 600,400 T1200,400"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.path
            d="M0,450 Q400,350 800,450 T1200,450"
            stroke="hsl(220, 70%, 45%)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            animate={{
              d: [
                "M0,450 Q400,350 800,450 T1200,450",
                "M0,450 Q400,550 800,450 T1200,450",
                "M0,450 Q400,350 800,450 T1200,450"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </svg>
      </motion.div>

      {/* Particle system */}
      {Array.from({ length: Math.floor(15 * multiplier) }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: i % 2 === 0 ? 'hsl(45, 95%, 55%)' : 'hsl(220, 70%, 45%)'
          }}
          animate={{
            y: [0, -50, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0]
          }}
          transition={{
            duration: 3 + Math.random() * 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: Math.random() * 5
          }}
        />
      ))}

      {/* Subtle geometric overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,_hsl(45_95%_55%_/_0.2)_0%,_transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,_hsl(220_70%_45%_/_0.2)_0%,_transparent_50%)]" />
      </div>

      {/* Additional effects for hero variant */}
      {variant === 'hero' && (
        <>
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                'radial-gradient(circle at 50% 50%, hsla(45, 95%, 55%, 0.05) 0%, transparent 70%)',
                'radial-gradient(circle at 30% 70%, hsla(220, 70%, 45%, 0.05) 0%, transparent 70%)',
                'radial-gradient(circle at 70% 30%, hsla(45, 95%, 55%, 0.05) 0%, transparent 70%)',
                'radial-gradient(circle at 50% 50%, hsla(45, 95%, 55%, 0.05) 0%, transparent 70%)'
              ]
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Enhanced floating elements for hero */}
          <motion.div
            className="absolute top-1/4 left-1/4 text-accent"
            animate={{
              x: [0, 30, 0],
              y: [0, -30, 0],
              rotate: [0, 360, 720]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <DanceShape type="note" className="w-8 h-8" />
          </motion.div>
        </>
      )}
    </div>
  );
};

// Support both default and named imports
export { AnimatedBackground };
export default AnimatedBackground;