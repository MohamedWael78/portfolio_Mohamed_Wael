import { useState } from "react";
import { BrainCircuit, BarChart3, Database, Cpu, ArrowUpRight, Sparkles, CheckCircle2, Eye, Layers } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";
import Magnetic from "@/components/Magnetic";

const iconMap = {
  BrainCircuit: BrainCircuit,
  BarChart3: BarChart3,
  Database: Database,
  Cpu: Cpu,
  Eye: Eye,
  Layers: Layers,
};

export const Services = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();
  const [showAllServices, setShowAllServices] = useState(false);
  const initialLimit = 3;

  const displayedServices = showAllServices 
    ? portfolioData.personal.services 
    : portfolioData.personal.services.slice(0, initialLimit);

  return (
    <section id="services" className="py-32 relative overflow-hidden bg-background">
      {/* Decorative Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-3xl mx-auto mb-24"
        >
          <motion.div variants={fadeIn("up", 0.1)} className="mb-6">
            <span className="text-primary text-xs font-black tracking-[0.5em] uppercase px-6 py-2 rounded-full glass border border-primary/20">
              {language === 'ar' ? 'الخدمات' : 'Services'}
            </span>
          </motion.div>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {language === 'ar' ? 'حلول ذكية' : 'Strategic'} <span className="font-serif italic font-normal text-gradient">{language === 'ar' ? 'لنمو أعمالك' : 'Solutions.'}</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            {portfolioData.sectionDescriptions.services}
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {displayedServices.map((service, idx) => {
            const Icon = iconMap[service.icon] || BrainCircuit;
            return (
              <motion.div
                key={idx}
                variants={fadeIn("up", 0.1 * idx)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className="relative glass-strong p-10 rounded-[48px] border border-white/5 hover:border-primary/30 transition-all duration-500 h-full flex flex-col group overflow-hidden">
                  
                  {/* Background Numbering - Smaller */}
                  <div className="absolute -top-6 -right-6 text-8xl font-black text-primary/[0.03] group-hover:text-primary/[0.05] transition-all duration-700 select-none">
                    0{idx + 1}
                  </div>

                  {/* Header Row - Compact */}
                  <div className="flex items-center justify-between mb-12 relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all duration-500 shadow-xl">
                      <Icon size={28} />
                    </div>
                    <div className="px-3 py-1 rounded-full glass border border-primary/10 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[8px] uppercase font-black tracking-widest text-primary/70">Ready</span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="space-y-6 flex-grow relative z-10">
                    <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                      {service.description}
                    </p>

                    {/* Features List - Compact */}
                    <div className="pt-6 flex flex-wrap gap-2">
                      {service.features.map((feature, fIdx) => (
                        <div key={fIdx} className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 text-[10px] font-bold text-muted-foreground group-hover:text-primary transition-all">
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-10 pt-8 border-t border-white/5 flex items-center justify-between relative z-10">
                    <span className="text-[9px] font-black uppercase tracking-widest text-muted-foreground/50">Expert Consultation</span>
                    <Magnetic>
                        <a 
                           href="#contact" 
                           className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-primary hover:text-background transition-all border border-white/10"
                        >
                          <ArrowUpRight size={22} />
                        </a>
                    </Magnetic>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More Services Toggle */}
        {portfolioData.personal.services.length > initialLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={() => setShowAllServices(!showAllServices)}
              className="flex items-center gap-3 px-10 py-5 rounded-3xl glass border border-primary/20 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500 shadow-xl group"
            >
              <ArrowUpRight size={18} className={showAllServices ? "rotate-180 transition-transform" : ""} />
              {showAllServices 
                ? (language === 'ar' ? 'عرض أقل' : 'Show Less') 
                : (language === 'ar' ? `استكشاف كافة الخدمات (${portfolioData.personal.services.length})` : `Explore All Services (${portfolioData.personal.services.length})`)
              }
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};
