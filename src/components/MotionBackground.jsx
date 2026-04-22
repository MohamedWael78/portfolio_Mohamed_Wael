import { motion } from 'framer-motion';

export const MotionBackground = () => {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden pointer-events-none bg-background transition-colors duration-500">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30"></div>
      
      {/* Dynamic Glowing Blob 1 - Primary (Emerald/Brand color) */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/20 blur-[140px]"
      />
      
      {/* Dynamic Glowing Blob 2 - Highlight (Orange) */}
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, 100, 0, -100, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-highlight/20 blur-[140px]"
      />
      
      {/* Dynamic Glowing Blob 3 - Accent (Rose/Crimson) */}
      <motion.div
        animate={{
          x: [0, 50, -50, 50, 0],
          y: [0, -50, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1.1, 1]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-[30%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-accent/20 blur-[120px]"
      />

       {/* Top Lighting Ambient Arc */}
       <div className="absolute top-0 inset-x-0 w-full h-[50vh] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent)] opacity-50"></div>
    </div>
  );
};
