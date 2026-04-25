import { Award, ShieldCheck, CheckCircle2, Star, Zap, GraduationCap, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Certifications = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  return (
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[200px] pointer-events-none" />
      
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
            {t("credentials")}
          </motion.span>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t("professional_validations")} <span className="font-serif italic font-normal text-gradient">{t("professional_validations_bold")}</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            {portfolioData.sectionDescriptions.certifications}
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {portfolioData.certifications.map((cert, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group glass p-10 rounded-[40px] border border-foreground/5 hover:border-primary/40 transition-all duration-500 relative flex flex-col items-center text-center shadow-2xl"
            >
              {/* Top Badge Glow */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                 <div className="bg-primary text-black px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-[0_0_20px_rgba(var(--primary-rgb),0.8)]">Verified</div>
              </div>

              <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-all duration-500 shadow-xl group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.6)]">
                <ShieldCheck size={36} />
              </div>

              <div className="space-y-4 relative z-10 w-full">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                  {cert.name}
                </h3>
                <div className="flex flex-col items-center gap-2">
                   <div className="text-[10px] uppercase font-black tracking-[0.2em] text-muted-foreground group-hover:text-foreground/80 transition-colors">{t('issued_by')}</div>
                   <div className="text-sm font-black text-primary/80 group-hover:text-primary transition-colors">{cert.issuer}</div>
                </div>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute bottom-6 right-6 opacity-5 group-hover:opacity-20 transition-opacity">
                 <Star size={60} className="text-primary" />
              </div>
              
              {/* Action Link (Simulation) */}
              <div className="mt-8 pt-8 border-t border-foreground/5 w-full">
                 <div className="flex items-center justify-center gap-2 text-[10px] font-black text-muted-foreground uppercase tracking-widest group-hover:text-primary transition-colors cursor-pointer">
                    {t('view_cert')} <ChevronRight size={12} />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Global Achievement Banner */}
        <motion.div 
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 glass rounded-[40px] border border-primary/20 bg-primary/5 flex flex-col md:flex-row items-center justify-between gap-8 max-w-5xl mx-auto overflow-hidden relative"
        >
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
           <div className="flex items-center gap-6 relative z-10">
              <div className="w-20 h-20 shrink-0 rounded-2xl bg-primary flex items-center justify-center text-black">
                 <Award size={40} />
              </div>
               <div>
                 <h4 className="text-2xl font-black text-foreground leading-tight">{t('mastering_ai')}</h4>
                 <p className="text-muted-foreground text-sm mt-1">{t('nine_month')}</p>
              </div>
           </div>
           <div className="shrink-0 relative z-10">
              <div className="flex -space-x-4">
                 {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-background bg-surface flex items-center justify-center">
                       <Zap size={16} className="text-primary" />
                    </div>
                 ))}
                 <div className="w-12 h-12 rounded-full border-4 border-background bg-primary flex items-center justify-center text-black font-black text-xs">
                    +Skills
                 </div>
              </div>
           </div>
        </motion.div>
      </div>
    </section>
  );
};
