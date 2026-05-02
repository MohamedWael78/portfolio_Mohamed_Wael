import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Code2, Database, Cpu, Globe, BarChart3, Zap, Layers, Search, LineChart, BrainCircuit, LayoutGrid, ChevronDown, ChevronUp, Download, ArrowRight } from "lucide-react";

import { useLanguage, usePortfolioData } from "@/context/LanguageContext";
import SkillRadar from "@/components/SkillRadar";

const iconMap = {
  "Programming & Frameworks": Code2,
  "البرمجة وإطارات العمل": Code2,
  "AI & Machine Learning": BrainCircuit,
  "الذكاء الاصطناعي وتعلم الآلة": BrainCircuit,
  "Data Visualization": BarChart3,
  "تصوير البيانات": BarChart3,
  "Cloud": Globe,
  "الخدمات السحابية": Globe,
  "Analysis": Search,
  "التحليل": Search,
};

export const Skills = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();
  const [activeTab, setActiveTab] = useState(-1); // -1 for "All"
  const [showAllItems, setShowAllItems] = useState(false);

  const initialLimit = 6;

  const allSkills = useMemo(() => {
    const all = portfolioData.skills.flatMap(cat => cat.items);
    return Array.from(new Map(all.map(item => [item.name, item])).values());
  }, [portfolioData.skills]);

  const displayedSkills = useMemo(() => {
    if (activeTab === -1) {
      return showAllItems ? allSkills : allSkills.slice(0, initialLimit);
    }
    return portfolioData.skills[activeTab].items;
  }, [activeTab, portfolioData.skills, allSkills, showAllItems]);

  const handleTabChange = (idx) => {
    setActiveTab(idx);
    setShowAllItems(false); // Reset limit when switching tabs
  };

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-surface/5">
      {/* Dynamic Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="mb-6">
            <span className="text-primary text-xs font-black tracking-[0.5em] uppercase px-6 py-2 rounded-full glass border border-primary/20">
              {t("skills")}
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t("technical_arsenal")} <span className="text-gradient italic font-serif font-normal">{t("technical_arsenal_bold") || "Arsenal."}</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {portfolioData.sectionDescriptions.skills}
          </motion.p>
        </motion.div>

        {/* Interactive Skill Radar */}
        <div className="max-w-4xl mx-auto mb-24">
          <SkillRadar data={portfolioData.radarData} />
        </div>

        {/* Tab Navigation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-16 px-4"
        >
          {/* "All" Tab Button */}
          <button
            onClick={() => handleTabChange(-1)}
            className={`relative px-8 py-5 rounded-3xl transition-all duration-500 flex items-center gap-4 group overflow-hidden ${
              activeTab === -1 
                ? "text-background" 
                : "text-muted-foreground glass hover:text-primary hover:border-primary/30 border border-foreground/5"
            }`}
          >
            {activeTab === -1 && (
              <motion.div 
                layoutId="activeSkillTab"
                className="absolute inset-0 bg-gradient-to-r from-primary to-highlight z-0"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <LayoutGrid size={18} className={`relative z-10 transition-colors ${activeTab === -1 ? "text-background" : "group-hover:text-primary"}`} />
            <span className="relative z-10 font-black text-[13px] uppercase tracking-widest">{t('filter_all')}</span>
          </button>

          {portfolioData.skills.map((category, idx) => {
            const Icon = iconMap[category.category] || Database;
            const isActive = activeTab === idx;
            
            return (
              <button
                key={idx}
                onClick={() => handleTabChange(idx)}
                className={`relative px-8 py-5 rounded-3xl transition-all duration-500 flex items-center gap-4 group overflow-hidden ${
                  isActive 
                    ? "text-background" 
                    : "text-muted-foreground glass hover:text-primary hover:border-primary/30 border border-foreground/5"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="activeSkillTab"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-highlight z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <Icon size={18} className={`relative z-10 transition-colors ${isActive ? "text-background" : "group-hover:text-primary"}`} />
                <span className="relative z-10 font-black text-[13px] uppercase tracking-widest">{category.category}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Skills Display */}
        <div className="max-w-6xl mx-auto min-h-[400px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -30, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: "circOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {displayedSkills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  layout
                  whileHover={{ 
                    y: -15, 
                    scale: 1.02,
                    rotateX: 2,
                    rotateY: idx % 2 === 0 ? 3 : -3
                  }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent rounded-[48px] blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  
                  <div className="relative glass-strong p-10 rounded-[48px] border border-white/5 hover:border-primary/40 transition-all duration-700 h-full flex flex-col group overflow-hidden perspective-1000">
                    
                    <div className="flex items-start justify-between mb-8">
                      <div className="w-16 h-16 rounded-[24px] bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-all duration-700 shadow-2xl group-hover:shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)]">
                        <Zap size={28} className="text-primary group-hover:text-background transition-colors duration-500" />
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-full glass border border-white/5">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                        <span className="text-[9px] uppercase font-black tracking-widest text-primary/70">{t('proficiency')}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4 flex-grow">
                      <h3 className="text-3xl font-black text-foreground group-hover:text-primary transition-colors tracking-tighter leading-tight flex items-center gap-3">
                        {skill.name}
                        <Sparkles size={16} className="text-highlight opacity-0 group-hover:opacity-100 transition-opacity" />
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed h-[60px] line-clamp-3 opacity-80 group-hover:opacity-100 transition-opacity">
                        {skill.description}
                      </p>
                    </div>

                    <div className="mt-10">
                      <div className="flex items-center justify-between mb-3">
                         <span className="text-[9px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">{t('proficiency')}</span>
                         <span className="text-[10px] font-black text-primary">{t('advanced')}</span>
                      </div>
                      <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: "100%" }}
                          transition={{ duration: 2, delay: idx * 0.1, ease: "circOut" }}
                          className="h-full bg-gradient-to-r from-primary via-highlight to-primary bg-[length:200%_100%] animate-shimmer shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Show More Button (Only for 'All' tab and if there are more items) */}
          {activeTab === -1 && allSkills.length > initialLimit && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-center mt-16"
            >
              <button
                onClick={() => setShowAllItems(!showAllItems)}
                className="flex items-center gap-3 px-10 py-5 rounded-3xl glass border border-primary/20 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500 shadow-xl group"
              >
                {showAllItems 
                  ? (language === 'ar' ? 'إخفاء' : 'Show Less') 
                  : (language === 'ar' ? 'عرض المزيد' : 'View All Skills')
                }
                <motion.div
                  animate={{ rotate: showAllItems ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={16} />
                </motion.div>
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};
