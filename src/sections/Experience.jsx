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
      <div className="absolute top-0 right-0 w-full h-[600px] bg-[radial-gradient(circle_at_top_right,rgba(var(--primary-rgb),0.03),transparent_70%)]" />
      
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
            className="absolute left-0 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-primary/80 via-primary/20 to-transparent md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary-rgb),0.3)]"
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
                  className="absolute left-0 md:left-1/2 top-0 w-6 h-6 rounded-full bg-background border-4 border-primary z-20 md:-translate-x-1/2 shadow-[0_0_15px_rgba(var(--primary-rgb),0.8)]" 
                />

                {/* Content Side */}
                <div className="w-full md:w-[45%]">
                  <motion.div 
                    whileHover={{ 
                      y: -15,
                      scale: 1.01
                    }}
                    transition={{ type: "spring", stiffness: 150 }}
                    className="glass-strong p-12 md:p-16 rounded-[60px] border border-white/5 hover:border-primary/40 transition-all duration-700 shadow-2xl relative group overflow-hidden perspective-1000"
                  >
                    {/* Background visual watermarks */}
                    <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.08] transition-all duration-1000 select-none">
                        <Briefcase size={220} strokeWidth={1} className="text-primary" />
                    </div>

                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-10">
                        <span className="px-6 py-2 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.4em] border border-primary/20 shadow-inner">
                          {exp.period}
                        </span>
                        <div className="flex-grow h-px bg-gradient-to-r from-primary/20 to-transparent" />
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-black mb-4 text-foreground group-hover:text-primary transition-colors tracking-tighter leading-none">
                        {exp.role}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-muted-foreground font-black text-sm mb-12 uppercase tracking-[0.3em]">
                        <div className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(var(--primary-rgb),0.8)]" />
                        {exp.company}
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed mb-12 text-lg italic max-w-2xl opacity-80 group-hover:opacity-100 transition-opacity">
                        {exp.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-3">
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-5 py-2.5 rounded-2xl bg-white/[0.03] border border-white/5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
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
