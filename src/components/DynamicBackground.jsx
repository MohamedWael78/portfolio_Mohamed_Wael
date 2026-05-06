import { useEffect, useRef } from "react";
import aiCoreImg from "../assets/ai_core.png";

// Main dynamic background component with neural network and base AI texture
export const DynamicBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // --- Config ---
    const NODE_COUNT = 55;
    const MAX_DIST = 200;
    const PRIMARY = { r: 245, g: 158, b: 11 };   // amber (--color-primary)
    const HIGHLIGHT = { r: 220, g: 38, b: 38 };  // red (--color-highlight)

    // --- Nodes ---
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 2 + 1.5,
      pulse: Math.random() * Math.PI * 2, // phase offset for glow animation
    }));

    // --- Signals: packets traveling along edges ---
    const signals = [];

    const spawnSignal = () => {
      if (signals.length > 30) return;
      const a = Math.floor(Math.random() * NODE_COUNT);
      let b = Math.floor(Math.random() * NODE_COUNT);
      if (a === b) return;
      const dx = nodes[a].x - nodes[b].x;
      const dy = nodes[a].y - nodes[b].y;
      if (Math.hypot(dx, dy) > MAX_DIST) return;
      const useHighlight = Math.random() > 0.7;
      signals.push({ a, b, t: 0, speed: 0.005 + Math.random() * 0.01, useHighlight });
    };

    const signalInterval = setInterval(spawnSignal, 300);

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // --- Update nodes ---
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
        n.pulse += 0.025;
      }

      // --- Draw edges ---
      for (let i = 0; i < NODE_COUNT; i++) {
        for (let j = i + 1; j < NODE_COUNT; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.hypot(dx, dy);
          if (dist < MAX_DIST) {
            const alpha = (1 - dist / MAX_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(${PRIMARY.r},${PRIMARY.g},${PRIMARY.b},${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.stroke();
          }
        }
      }

      // --- Draw signals ---
      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.t += sig.speed;
        if (sig.t >= 1) {
          signals.splice(s, 1);
          continue;
        }
        const na = nodes[sig.a];
        const nb = nodes[sig.b];
        const sx = na.x + (nb.x - na.x) * sig.t;
        const sy = na.y + (nb.y - na.y) * sig.t;
        const c = sig.useHighlight ? HIGHLIGHT : PRIMARY;

        // Glowing trail
        const grad = ctx.createRadialGradient(sx, sy, 0, sx, sy, 8);
        grad.addColorStop(0, `rgba(${c.r},${c.g},${c.b},0.9)`);
        grad.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, 8, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(sx, sy, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},1)`;
        ctx.fill();
      }

      // --- Draw nodes ---
      for (const n of nodes) {
        const glow = 0.6 + 0.4 * Math.sin(n.pulse);

        // Outer halo
        const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.radius * 6);
        halo.addColorStop(0, `rgba(${PRIMARY.r},${PRIMARY.g},${PRIMARY.b},${0.15 * glow})`);
        halo.addColorStop(1, `rgba(${PRIMARY.r},${PRIMARY.g},${PRIMARY.b},0)`);
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 6, 0, Math.PI * 2);
        ctx.fillStyle = halo;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${PRIMARY.r},${PRIMARY.g},${PRIMARY.b},${0.7 * glow})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(signalInterval);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[-1] bg-background transition-colors duration-700 overflow-hidden">
      {/* Base AI Texture */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none scale-110">
        <img src={aiCoreImg} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Neural Network Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-70"
      />

      {/* Ambient color blobs — softens and adds depth behind the canvas */}
      <div className="absolute top-[-10%] left-[-10%] w-[55vw] h-[55vw] rounded-full bg-primary/8 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-highlight/8 blur-[140px] pointer-events-none" />

      {/* Top ambient arc */}
      <div className="absolute top-0 inset-x-0 h-[40vh] bg-[radial-gradient(ellipse_100%_100%_at_50%_-20%,rgba(245,158,11,0.12),transparent)] pointer-events-none" />

      {/* Subtle grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_40%,transparent_100%)] opacity-20 pointer-events-none" />
    </div>
  );
};
