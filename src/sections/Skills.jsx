
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { 
  Code2, 
  Terminal, 
  Database, 
  Layout, 
  Cpu, 
  Network, 
  BarChart, 
  Globe 
} from "lucide-react";

import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

const iconMap = {
  "Programming & Frameworks": Code2,
  "البرمجة وإطارات العمل": Code2,
  "AI & Machine Learning": Cpu,
  "الذكاء الاصطناعي وتعلم الآلة": Cpu,
  "Data Visualization": BarChart,
  "تصوير البيانات": BarChart,
  "Cloud & Analysis": Globe,
  "الخدمات السحابية": Globe,
  "Analysis": Network,
  "التحليل": Network,
};

export const Skills = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();

  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[150px] -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-highlight/5 rounded-full blur-[120px]" />

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
            {t("skills")}
          </motion.span>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t("technical_arsenal")} <span className="text-gradient italic font-serif font-normal">{t("technical_arsenal_bold") || "Arsenal."}</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-muted-foreground text-xl leading-relaxed"
          >
            {portfolioData.sectionDescriptions.skills}
          </motion.p>
        </motion.div>

        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-wrap justify-center gap-8"
        >
          {portfolioData.skills.map((category, idx) => {
            const Icon = iconMap[category.category] || Database;
            return (
              <motion.div
                key={idx}
                variants={fadeIn("up", idx * 0.1)}
                whileHover={{ y: -10 }}
                className="group w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.5rem)] max-w-sm glass p-10 rounded-[40px] border border-foreground/5 hover:border-primary/40 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <motion.div 
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.8 }}
                  className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary transition-all duration-500 relative z-10 shadow-[0_0_20px_rgba(245,158,11,0.1)] group-hover:shadow-[0_0_30px_#f59e0b]"
                >
                  <Icon className="text-primary w-10 h-10 group-hover:text-black transition-colors" />
                </motion.div>
                
                <h3 className="text-2xl font-black mb-6 text-foreground relative z-10 tracking-tight">
                  {category.category}
                </h3>
                
                <div className="flex flex-wrap justify-center gap-3 relative z-10">
                  {category.items.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-5 py-2.5 rounded-2xl bg-surface/50 border border-foreground/5 text-[13px] font-bold text-muted-foreground group-hover:text-foreground group-hover:border-primary/20 transition-all duration-300 hover:scale-110 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
