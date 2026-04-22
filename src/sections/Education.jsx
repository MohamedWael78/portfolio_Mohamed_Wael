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
      <div className="absolute bottom-0 left-0 w-full h-[500px] bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.05),transparent_70%)]" />
      
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

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {portfolioData.education.map((edu, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(idx % 2 === 0 ? "right" : "left", 0.3)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="group relative glass p-12 rounded-[40px] border border-foreground/5 hover:border-primary/30 transition-all duration-700 shadow-2xl overflow-hidden"
            >
              {/* Context Background Visual (Abstract) */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl">
                    {idx === 0 ? <Award size={32} /> : <School size={32} />}
                  </div>
                  <div>
                    <span className="text-primary font-black text-xs uppercase tracking-widest px-3 py-1 bg-primary/5 rounded-lg border border-primary/10">
                      {edu.period}
                    </span>
                    <h3 className="text-2xl font-black mt-2 text-foreground group-hover:text-primary transition-colors">
                      {edu.degree}
                    </h3>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-3">
                    <BookOpen size={20} className="text-primary shrink-0 mt-1" />
                    <div>
                      <p className="text-foreground font-bold text-lg leading-tight">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm mt-3 leading-relaxed italic">
                        {edu.description}
                      </p>
                    </div>
                  </div>

                  {/* Highlights Grid */}
                  <div className="pt-8 grid grid-cols-2 gap-4">
                    {edu.highlights.map((highlight, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2">
                        <CheckCircle2 size={14} className="text-primary/50" />
                        <span className="text-xs font-bold text-muted-foreground group-hover:text-foreground transition-colors">
                          {highlight}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Corner Icon */}
              <div className="absolute bottom-10 right-10 opacity-5 group-hover:opacity-20 transition-opacity">
                 <GraduationCap size={100} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
