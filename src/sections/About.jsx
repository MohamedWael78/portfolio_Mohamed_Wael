import { BrainCircuit, Database, LineChart, Cpu, Zap, Activity, Microscope, Sliders } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { usePortfolioData, useLanguage } from "@/context/LanguageContext";

const highlights = [
  {
    icon: BrainCircuit,
    title: "AI Modeling",
    description: "Developing and fine-tuning machine learning models for predictive accuracy.",
  },
  {
    icon: Database,
    title: "Data Engineering",
    description: "Structuring complex datasets and building robust pipelines.",
  },
  {
    icon: LineChart,
    title: "Insight Analysis",
    description: "Transforming raw data into actionable business intelligence.",
  },
  {
    icon: Sliders,
    title: "Smart Control",
    description: "Integrating sensor logic with automated engineering systems.",
  },
];

export const About = () => {
  const portfolioData = usePortfolioData();
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-32 relative overflow-hidden bg-surface/20">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent_70%)]" />
      
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
            <motion.div variants={fadeIn("right", 0.1)}>
              <span className="text-primary text-xs font-black tracking-[0.4em] uppercase px-5 py-2 rounded-full glass border border-primary/20 shadow-[0_0_15px_rgba(245,158,11,0.1)]">
                {t('biography')}
              </span>
            </motion.div>

            <motion.div variants={fadeIn("right", 0.3)} className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] text-foreground">
                {t('about_title') || 'Bridging Two Worlds.'}
              </h2>

              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed max-w-xl">
                <p>{portfolioData.personal.about}</p>
              </div>
            </motion.div>

            {/* Interactive Infographic Mini-Section */}
            <motion.div 
              variants={fadeIn("up", 0.5)}
              className="grid sm:grid-cols-2 gap-6"
            >
              {highlights.slice(0, 4).map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-foreground/5 border border-foreground/5 hover:border-primary/20 transition-all group">
                  <div className="w-10 h-10 shrink-0 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors">
                    <item.icon className="text-primary w-5 h-5 group-hover:text-black transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-foreground uppercase tracking-wider">{item.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1 leading-tight">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Column - Vivid Contextual Visual */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="relative"
          >
            <div className="relative group perspective-1000">
              {/* Image 1: Engineering/Agriculture Context */}
              <motion.div 
                whileHover={{ rotateY: -15, rotateX: 5, z: 20 }}
                className="relative z-20 glass rounded-[40px] p-2 border border-primary/30 shadow-2xl overflow-hidden overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1543286386-713bdd54867e?auto=format&fit=crop&q=80&w=800"
                  alt="Smart Irrigation Context"
                  className="w-full aspect-square object-cover rounded-[32px] brightness-75 group-hover:brightness-100 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-8 left-8">
                    <div className="flex items-center gap-2 text-primary font-black text-xs uppercase tracking-widest mb-1">
                        <Microscope size={14} />
                        Graduation Focus
                    </div>
                    <div className="text-2xl font-bold text-foreground">Smart Systems</div>
                </div>
              </motion.div>

              {/* Floating Element: AI Overlay */}
              <motion.div 
                animate={{ 
                  y: [0, -30, 0],
                  rotate: [0, 5, 0] 
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 z-30 w-56 h-56 glass rounded-[30px] p-6 border border-primary/50 shadow-[0_0_50px_rgba(245,158,11,0.2)] flex flex-col justify-between"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-black">
                  <BrainCircuit size={24} />
                </div>
                <div className="space-y-2">
                  <div className="text-xs font-black text-primary uppercase tracking-widest">Training Progress</div>
                  <div className="h-1.5 w-full bg-foreground/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 2, delay: 1 }}
                      className="h-full bg-gradient-to-r from-primary to-highlight" 
                    />
                  </div>
                  <div className="text-[10px] text-muted-foreground font-bold">Applied AI Specialist Path</div>
                </div>
              </motion.div>

              {/* Data Visualization Fragment */}
              <motion.div 
                animate={{ 
                  x: [0, -20, 0],
                  y: [0, 20, 0] 
                }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-10 -left-10 z-30 glass rounded-3xl p-6 border border-primary/50 shadow-2xl"
              >
                <LineChart className="text-primary w-12 h-12" />
                <div className="mt-4 space-y-1">
                   <div className="flex gap-1">
                     <span className="w-2 h-4 bg-primary/20 rounded-sm" />
                     <span className="w-2 h-6 bg-primary/40 rounded-sm" />
                     <span className="w-2 h-8 bg-primary rounded-sm shadow-[0_0_10px_#f59e0b]" />
                     <span className="w-2 h-5 bg-primary/20 rounded-sm" />
                   </div>
                   <div className="text-[10px] font-black text-primary uppercase">Analytics</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
