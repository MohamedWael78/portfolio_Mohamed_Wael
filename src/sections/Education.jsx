import { GraduationCap, Award, BookOpen, School, Star, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Education = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-surface/5">
      {/* Background radial effects */}
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(var(--primary-rgb),0.05),transparent_70%)]" />
      
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
            {t("academic")}
          </motion.span>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t("educational_foundations")} <span className="font-serif italic font-normal text-gradient">{t("educational_foundations_bold")}</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            {portfolioData.sectionDescriptions.education}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative glass-strong p-10 md:p-12 rounded-[48px] border border-white/5 hover:border-primary/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              {/* Background institutional visual hint (Subtle) */}
              <div className="absolute -top-10 -right-10 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-1000">
                {idx === 0 ? <Award size={180} strokeWidth={1} className="text-primary" /> : <School size={180} strokeWidth={1} className="text-primary" />}
              </div>
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center gap-3 mb-8">
                  <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black uppercase tracking-[0.2em] border border-primary/20">
                    {edu.period}
                  </span>
                </div>

                <div className="flex items-start gap-5 mb-10">
                   <div className="w-16 h-16 rounded-2xl bg-primary/5 flex items-center justify-center text-primary border border-primary/10 group-hover:bg-primary group-hover:text-background transition-all duration-500">
                      {idx === 0 ? <GraduationCap size={28} /> : <BookOpen size={28} />}
                   </div>
                   <div>
                      <h3 className="text-2xl md:text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tight leading-tight mb-2">
                        {edu.degree}
                      </h3>
                      <p className="text-muted-foreground font-bold text-lg">{edu.institution}</p>
                   </div>
                </div>

                <p className="text-muted-foreground leading-relaxed italic mb-10 opacity-80 group-hover:opacity-100 transition-opacity border-l-2 border-primary/20 pl-6 py-2">
                  {edu.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {edu.highlights.map((highlight, hIdx) => (
                    <span key={hIdx} className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/5 text-[9px] font-black uppercase tracking-widest text-muted-foreground group-hover:text-primary group-hover:border-primary/20 transition-all">
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
