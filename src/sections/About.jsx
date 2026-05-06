import { useState } from "react";
import aiCoreImg from "../assets/ai_core.png";
import dataVizImg from "../assets/data_viz.png";
import { 
  BrainCircuit, 
  Database,
  LineChart, 
  Cpu, 
  Zap,
  Activity, 
  Briefcase, 
  Terminal, 
  BookOpen,
  BarChart3,
  Eye,
  Layers
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { usePortfolioData, useLanguage } from "@/context/LanguageContext";

const iconMap = {
  BrainCircuit,
  Database,
  LineChart,
  Cpu,
  Zap,
  Activity,
  BarChart3,
  Eye,
  Layers
};

// Highlights now pulled dynamically from portfolioData.personal.services

export const About = () => {
  const portfolioData = usePortfolioData();
  const { t, language } = useLanguage();
  const [activePerspective, setActivePerspective] = useState("official");

  const switcherModes = [
    { id: "official", label: t('perspective_official'), icon: Briefcase },
    { id: "tech", label: t('perspective_tech'), icon: Terminal },
    { id: "story", label: t('perspective_story'), icon: BookOpen },
  ];

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - left, y: e.clientY - top });
  };

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-surface/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.07),transparent_70%)] z-0" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer(0.2, 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-2 gap-20 items-center"
        >
          {/* Left Column - Story & Philosophy */}
          <div className="space-y-12">
            <motion.div 
              variants={fadeIn("right", 0.1)}
              whileHover={{ scale: 1.05, x: 5 }}
              className="w-fit"
            >
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase px-5 py-2 rounded-full glass border border-primary/20 shadow-[0_0_15px_rgba(var(--primary-rgb),0.1)] relative overflow-hidden group">
                <motion.span 
                  animate={{ left: ["-100%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent w-1/2 -skew-x-12"
                />
                {t('biography')}
              </span>
            </motion.div>

            <motion.div variants={fadeIn("right", 0.3)} className="space-y-8">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground">
                {t('about_title') || 'Bridging Two Worlds.'}
              </h2>

              {/* Perspective Switcher UI */}
              <div className="flex gap-2 p-1.5 glass rounded-2xl w-fit relative z-20">
                {switcherModes.map((mode) => (
                  <button
                    key={mode.id}
                    onClick={() => setActivePerspective(mode.id)}
                    className={`relative px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center gap-2 group ${
                      activePerspective === mode.id ? "text-background shadow-lg" : "text-muted-foreground hover:text-primary"
                    }`}
                  >
                    {activePerspective === mode.id && (
                      <motion.div
                        layoutId="activePerspectiveBg"
                        className="absolute inset-0 bg-primary z-0 rounded-xl shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="relative z-10"
                    >
                      <mode.icon size={12} />
                    </motion.div>
                    <span className="relative z-10">{mode.label}</span>
                  </button>
                ))}
              </div>

              <div className="relative min-h-[160px] text-muted-foreground text-lg leading-relaxed max-w-xl">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={activePerspective}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                    className="whitespace-pre-line"
                  >
                    {portfolioData.personal.perspectives[activePerspective]}
                  </motion.p>
                </AnimatePresence>
              </div>
            </motion.div>

            <motion.div 
              variants={fadeIn("up", 0.5)}
              className="grid sm:grid-cols-2 gap-6"
            >
              {portfolioData.personal.services.slice(0, 4).map((service, idx) => {
                const Icon = iconMap[service.icon] || Activity;
                return (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/5 hover:border-primary/20 transition-all group">
                    <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                       <Icon className="text-primary w-5 h-5 group-hover:text-black transition-colors" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{service.title}</h4>
                      <p className="text-xs text-muted-foreground mt-1 leading-tight">{service.description.substring(0, 60)}...</p>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column - Bento Hub */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            onMouseMove={handleMouseMove}
            className="relative w-full group/bento"
          >
            {/* Desktop Spotlight Effect */}
            <div 
              className="pointer-events-none absolute -inset-20 z-30 opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 hidden lg:block"
              style={{
                background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(var(--primary-rgb), 0.1), transparent 80%)`,
              }}
            />

            <div className="grid grid-cols-6 grid-rows-6 gap-3 sm:gap-4 h-[450px] md:h-[550px] w-full max-w-[500px] mx-auto lg:ml-auto">
              
              {/* Tile 1: AI Pulse (Main) */}
              <motion.div 
                whileHover={{ y: -5, scale: 1.01 }}
                className="col-span-4 row-span-4 glass rounded-3xl flex flex-col justify-between border border-primary/20 relative overflow-hidden group/tile shadow-xl"
              >
                {/* Background Image Overlay */}
                <img 
                  src={aiCoreImg} 
                  alt="AI Core" 
                  className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover/tile:opacity-40 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent z-0" />
                
                <div className="relative z-10 p-6 sm:p-8">
                  <motion.div 
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    className="w-10 sm:w-12 h-10 sm:h-12 rounded-2xl bg-primary/20 flex items-center justify-center text-primary mb-4 sm:mb-6"
                  >
                    <BrainCircuit size={24} />
                  </motion.div>
                  <h3 className="text-xl sm:text-2xl font-black text-foreground uppercase tracking-tight">Applied AI</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">Architecting models that transform raw data into actionable intelligence.</p>
                </div>
                
                {/* Micro-animation: Data bars */}
                <div className="relative z-10 mt-auto flex items-end gap-1.5 h-12 p-6 sm:p-8 pt-0">
                   {[40, 70, 45, 90, 65, 85, 55].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: i * 0.1, 
                          repeat: Infinity, 
                          repeatType: "reverse" 
                        }}
                        className="w-full bg-primary/30 rounded-t-[2px] group-hover/tile:bg-primary transition-colors duration-500"
                      />
                   ))}
                </div>
              </motion.div>

              {/* Tile 2: Status Pulse */}
              <motion.div 
                whileHover={{ y: -5, backgroundColor: "rgba(var(--primary-rgb), 0.05)" }}
                className="col-span-2 row-span-2 glass rounded-3xl p-4 border border-primary/20 flex flex-col items-center justify-center text-center shadow-lg transition-colors cursor-default"
              >
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping absolute inset-0" />
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full relative" />
                </div>
                <div className="text-[10px] sm:text-xs font-black text-foreground mt-3 uppercase tracking-widest">Available</div>
                <div className="text-[8px] sm:text-[10px] text-muted-foreground mt-1 font-bold">FOR OPPORTUNITIES</div>
              </motion.div>

              {/* Tile 3: Tech Focus */}
              <motion.div 
                whileHover={{ y: -5, rotate: 2 }}
                className="col-span-2 row-span-2 glass rounded-3xl p-4 border border-primary/20 flex flex-col items-center justify-center text-center shadow-lg cursor-default"
              >
                <Cpu className="text-primary mb-2 group-hover/bento:animate-pulse" size={20} />
                <div className="text-xs font-black text-foreground uppercase tracking-tight">PyTorch</div>
                <div className="text-[9px] text-muted-foreground font-bold">DEEP LEARNING</div>
              </motion.div>

              {/* Tile 4: Experience Stats */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-3 row-span-2 glass rounded-3xl p-5 border border-primary/20 flex flex-col justify-center shadow-lg relative overflow-hidden group/exp"
              >
                <motion.div 
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 1, x: 5 }}
                  className="relative z-10"
                >
                  <div className="text-3xl sm:text-4xl font-black text-primary italic leading-none">2+</div>
                  <div className="text-[10px] sm:text-xs font-black text-foreground uppercase mt-1">Years Experience</div>
                </motion.div>
                <div className="w-full h-1 bg-foreground/10 rounded-full mt-3 overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-primary group-hover/exp:bg-highlight transition-colors duration-500" 
                  />
                </div>
              </motion.div>

              {/* Tile 5: Data Insight */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="col-span-3 row-span-2 glass rounded-3xl p-5 border border-primary/20 flex flex-col justify-center relative overflow-hidden shadow-lg group/insight cursor-help"
              >
                <img 
                  src={dataVizImg} 
                  alt="Data Viz" 
                  className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover/insight:opacity-30 transition-opacity duration-700"
                />
                <LineChart className="text-primary/20 absolute -right-2 -bottom-2 w-16 h-16 rotate-12 group-hover/insight:rotate-0 group-hover/insight:scale-110 transition-all duration-500 z-10" />
                <div className="relative z-20">
                  <div className="text-sm sm:text-base font-black text-foreground uppercase leading-none tracking-tighter">Insights</div>
                  <p className="text-[9px] sm:text-[10px] text-muted-foreground mt-1 font-medium italic">"Data speaks, I translate."</p>
                </div>
              </motion.div>
            </div>
            
            {/* Ambient Background Glows */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/10 blur-[100px] rounded-full -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-highlight/10 blur-[100px] rounded-full -z-10" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
