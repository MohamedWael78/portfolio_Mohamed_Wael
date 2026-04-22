import { ArrowUpRight, Github, Sparkles } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

export const Projects = () => {
  const { t } = useLanguage();
  const portfolioData = usePortfolioData();

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-surface/10">
      {/* Background radial effects */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[140px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto max-w-4xl mb-24"
        >
          <motion.span 
            variants={fadeIn("up", 0.1)}
            className="text-primary text-xs font-black tracking-[0.5em] uppercase px-6 py-2 rounded-full glass border border-primary/20"
          >
            {t('portfolio')}
          </motion.span>
          <motion.h2 
            variants={fadeIn("up", 0.3)}
            className="text-5xl md:text-7xl font-bold mt-8 mb-8"
          >
            {t('featured_cases')} <span className="font-serif italic font-normal text-gradient">{t('featured_studies')}</span>
          </motion.h2>
          <motion.p 
            variants={fadeIn("up", 0.5)}
            className="text-muted-foreground text-xl leading-relaxed max-w-2xl mx-auto"
          >
            {portfolioData.sectionDescriptions.projects}
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {portfolioData.projects.map((project, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn("up", idx * 0.1)}
              whileHover={{ y: -15 }}
              className="group relative glass rounded-[40px] overflow-hidden border border-foreground/5 hover:border-primary/40 transition-all duration-700 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[4/3]">
                <motion.img
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  transition={{ duration: 1.5 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                
                {/* Tech Tags (Floating) */}
                <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                  {project.tags.slice(0, 2).map((tag, tagIdx) => (
                    <span 
                      key={tagIdx} 
                      className="px-4 py-1.5 text-[10px] uppercase font-black tracking-widest bg-black/60 backdrop-blur-xl border border-foreground/10 rounded-xl text-primary shadow-2xl"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Status Indicator */}
                <div className="absolute top-6 right-6">
                   <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-foreground/10 text-foreground/50 group-hover:text-primary transition-colors">
                      <Sparkles size={16} className="animate-pulse" />
                   </div>
                </div>
                
                {/* Title & Action Container */}
                <div className="absolute inset-0 flex flex-col justify-end p-8 space-y-6">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-foreground group-hover:text-primary transition-colors duration-300 tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 group-hover:text-foreground/80 transition-colors duration-500">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-700 delay-100">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 rounded-2xl glass hover:bg-primary hover:text-black transition-all shadow-2xl border border-foreground/10"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      className="flex-grow flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-foreground/5 hover:bg-primary hover:text-black transition-all shadow-2xl border border-foreground/10 font-black text-xs uppercase tracking-widest"
                    >
                      {t('case_study')} <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Extended Tags Footer (Only visible on hover/card layout) */}
              <div className="p-8 border-t border-foreground/5 bg-foreground/2">
                <div className="flex flex-wrap gap-2">
                   {project.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[9px] font-bold text-foreground/30 uppercase tracking-[0.1em] group-hover:text-primary/70 transition-colors">
                        #{tag}
                      </span>
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All CTA */}
        <motion.div 
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer">
            <AnimatedBorderButton className="gap-4 px-10 py-5 text-lg">
              {t('explore_more')}
              <Github className="w-6 h-6" />
            </AnimatedBorderButton>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
