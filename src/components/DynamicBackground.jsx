import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const DynamicBackground = () => {
  const [nodes, setNodes] = useState([]);

  useEffect(() => {
    // Generate random nodes for a neural-network-like background
    const newNodes = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 5,
    }));
    setNodes(newNodes);
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-background transition-colors duration-700">
      {/* 1. Subtle Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>

      {/* 2. Professional Motion Graphics: Dynamic Glowing Blobs */}
      <motion.div
        animate={{
          x: [0, 100, 0, -100, 0],
          y: [0, 50, 100, 50, 0],
          scale: [1, 1.2, 1, 0.8, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-primary/10 blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, -150, 0, 150, 0],
          y: [0, 100, 0, -100, 0],
          scale: [1, 0.8, 1, 1.2, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-highlight/10 blur-[130px]"
      />
      <motion.div
        animate={{
          x: [0, 50, -50, 50, 0],
          y: [0, -50, 50, -50, 0],
          scale: [1, 1.1, 0.9, 1.1, 1]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[30%] left-[40%] w-[35vw] h-[35vw] rounded-full bg-accent/10 blur-[110px]"
      />

      {/* 3. AI Neural Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-1.5 h-1.5 bg-primary/40 rounded-full shadow-[0_0_8px_var(--color-primary)]"
          initial={{ left: `${node.x}%`, top: `${node.y}%`, opacity: 0 }}
          animate={{
            left: [`${node.x}%`, `${(node.x + 10) % 100}%`, `${node.x}%`],
            top: [`${node.y}%`, `${(node.y - 10) % 100}%`, `${node.y}%`],
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: node.duration,
            repeat: Infinity,
            delay: node.delay,
            ease: "linear",
          }}
        />
      ))}

      {/* 4. Top Ambient Lighting Arc */}
      <div className="absolute top-0 inset-x-0 w-full h-[50vh] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(var(--primary-rgb),0.15),transparent)] opacity-60 pointer-events-none"></div>
    </div>
  );
};
