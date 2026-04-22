import { Briefcase, Calendar, MapPin, ExternalLink, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Experience = () => {
  const { t } = useLanguage();
  const portfolioData = usePortfolioData();
  return (
    <section id="experience" className="py-32 relative overflow-hidden bg-background">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.03),transparent_70%)]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.span 
            variants={fadeIn("up", 0.1)}
            className="text-primary text-xs font-black tracking-[0.5em] uppercase px-6 py-2 rounded-full glass border border-primary/20"
          >
            {t('career')}
          </motion.span>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t('professional_journey')} <span className="font-serif italic font-normal text-gradient">{t('professional_journey_bold') || "Journey."}</span>
          </motion.h2>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line with Motion */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/20 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
          />

          <div className="space-y-24">
            {portfolioData.experience.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.5 }}
                className={`relative flex items-center justify-between md:flex-row ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                } flex-col gap-12`}
              >
                {/* Timeline Dot */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-background border-4 border-primary z-20 md:-translate-x-1/2 shadow-[0_0_15px_#f59e0b]" 
                />

                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="glass p-10 rounded-[40px] border border-foreground/5 hover:border-primary/30 transition-all duration-500 shadow-2xl relative group overflow-hidden"
                  >
                    {/* Background institutional visual hint (Subtle) */}
                    <div className="absolute top-0 right-0 p-8 opacity-[0.02] group-hover:opacity-10 transition-opacity">
                        <Briefcase size={120} className="text-primary" />
                    </div>

                    <div className="flex flex-wrap items-center gap-3 mb-6">
                      <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-widest border border-primary/20">
                        {exp.period}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl font-black mb-2 text-foreground group-hover:text-primary transition-colors tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground font-bold text-sm mb-6 uppercase tracking-wider">
                      <Zap size={14} className="text-primary" />
                      {exp.company}
                    </div>
                    
                    <p className="text-muted-foreground leading-relaxed mb-8 text-sm italic">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1.5 rounded-xl bg-surface/80 border border-foreground/5 text-[11px] font-bold text-muted-foreground group-hover:text-primary transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* Empty side for layout on desktop */}
                <div className="hidden md:block md:w-[45%]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
