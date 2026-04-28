import { useState, useMemo, useEffect } from "react";
import { ArrowUpRight, Github, Sparkles, Filter, X, ExternalLink, Code2, Brain, ChevronRight, RefreshCcw, Search, Cpu } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { useLanguage, usePortfolioData } from "@/context/LanguageContext";

const ProjectModal = ({ project, isOpen, onClose, t }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden glass-strong rounded-[40px] border border-primary/20 shadow-2xl flex flex-col md:flex-row"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-50 p-2 rounded-full glass hover:bg-primary transition-colors group"
            >
              <X size={20} className="group-hover:text-background transition-colors" />
            </button>

            {/* Left Side: Image */}
            <div className="w-full md:w-1/2 h-64 md:h-auto relative overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent md:bg-gradient-to-r" />
            </div>

            {/* Right Side: Info */}
            <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto custom-scrollbar flex flex-col">
              <div className="mb-8">
                <span className="text-primary text-[10px] uppercase font-black tracking-widest block mb-4">
                  {t('case_study')}
                </span>
                <h3 className="text-3xl md:text-4xl font-black mb-6 leading-tight">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Case Study Details */}
              {project.caseStudy && (
                <div className="space-y-8 mb-10">
                  <div className="relative p-6 rounded-3xl bg-primary/5 border border-primary/10">
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-primary mb-3 flex items-center gap-2">
                      <Search size={12} />
                      {t('problem')}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{project.caseStudy.problem}"
                    </p>
                  </div>

                  <div className="relative p-6 rounded-3xl bg-highlight/5 border border-highlight/10">
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-highlight mb-3 flex items-center gap-2">
                      <Cpu size={12} />
                      {t('solution')}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {project.caseStudy.solution}
                    </p>
                  </div>

                  <div className="relative p-6 rounded-3xl bg-green-500/5 border border-green-500/10">
                    <h4 className="text-[10px] uppercase font-black tracking-widest text-green-500 mb-3 flex items-center gap-2">
                      <Sparkles size={12} />
                      {t('impact')}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed font-bold">
                      {project.caseStudy.impact}
                    </p>
                  </div>
                </div>
              )}

              <div className="mb-10">
                <h4 className="text-xs uppercase font-black tracking-[0.2em] text-foreground/50 mb-6 flex items-center gap-2">
                  <Code2 size={14} className="text-primary" />
                  {t('integrated_tech')}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-xl glass border border-primary/10 text-xs font-bold text-primary/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-auto flex flex-wrap gap-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-grow flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-primary text-background font-black text-xs uppercase tracking-widest hover:shadow-[0_0_20px_rgba(var(--primary-rgb),0.4)] transition-all"
                >
                  {t('case_study')} <ExternalLink size={14} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl glass hover:bg-foreground/10 transition-colors border border-foreground/10"
                >
                  <Github size={20} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const ProjectMatcher = ({ isOpen, onClose, projects, t, onResult }) => {
  const [step, setStep] = useState(1);
  const [choices, setChoices] = useState({ domain: null, solution: null });
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const steps = {
    1: {
      title: t('matcher_step1'),
      options: [
        { id: 'Agriculture', label: t('domain_agri'), icon: '🌱' },
        { id: 'Finance', label: t('domain_fin'), icon: '💰' },
        { id: 'Retail', label: t('domain_retail'), icon: '🛍️' },
        { id: 'Healthcare', label: t('domain_health'), icon: '🏥' },
      ]
    },
    2: {
      title: t('matcher_step2'),
      options: [
        { id: 'Vision', label: t('sol_vision'), icon: '👁️' },
        { id: 'Predictive', label: t('sol_predict'), icon: '📈' },
        { id: 'Analysis', label: t('sol_dash'), icon: '📊' },
      ]
    }
  };

  const handleChoice = (id) => {
    if (step === 1) {
      setChoices(prev => ({ ...prev, domain: id }));
      setStep(2);
    } else {
      setChoices(prev => ({ ...prev, solution: id }));
      matchProject({ ...choices, solution: id });
    }
  };

  const matchProject = (finalChoices) => {
    setIsAnalyzing(true);
    setTimeout(() => {
      // Basic matching logic based on tags and descriptions
      const matched = projects.find(p => {
        const text = (p.title + p.description + p.tags.join(' ')).toLowerCase();
        const dMatch = text.includes(finalChoices.domain.toLowerCase());
        const sMatch = text.includes(finalChoices.solution.toLowerCase()) || 
                      (finalChoices.solution === 'Vision' && p.tags.includes('Computer Vision')) ||
                      (finalChoices.solution === 'Analysis' && p.tags.includes('Power BI'));
        return dMatch && sMatch;
      }) || projects[0];

      onResult(matched);
      setIsAnalyzing(false);
      onClose();
      // Reset for next time
      setStep(1);
      setChoices({ domain: null, solution: null });
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-background/90 backdrop-blur-2xl"
          />

          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="relative w-full max-w-2xl glass-strong p-10 md:p-16 rounded-[50px] border border-primary/30 shadow-[0_0_50px_rgba(var(--primary-rgb),0.2)] text-center"
          >
            <button onClick={onClose} className="absolute top-8 right-8 text-foreground/40 hover:text-primary transition-colors">
              <X size={24} />
            </button>

            <AnimatePresence mode="wait">
              {isAnalyzing ? (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-8 py-12"
                >
                  <div className="relative w-24 h-24 mx-auto">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 border-t-4 border-primary rounded-full"
                    />
                    <Brain className="absolute inset-0 m-auto text-primary animate-pulse" size={40} />
                  </div>
                  <h2 className="text-2xl font-black">{t('matcher_calculating')}</h2>
                </motion.div>
              ) : (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <Brain className="mx-auto text-primary mb-6" size={48} />
                    <h2 className="text-3xl md:text-5xl font-black leading-tight">
                      {steps[step].title}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {steps[step].options.map((opt) => (
                      <motion.button
                        key={opt.id}
                        whileHover={{ scale: 1.03, y: -5 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => handleChoice(opt.id)}
                        className="p-8 rounded-[30px] glass border border-primary/10 hover:border-primary/50 hover:bg-primary/5 transition-all text-left flex items-center gap-6 group"
                      >
                        <span className="text-4xl">{opt.icon}</span>
                        <div className="flex-grow">
                          <span className="block text-lg font-black group-hover:text-primary transition-colors">{opt.label}</span>
                        </div>
                        <ChevronRight className="text-foreground/20 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const Projects = () => {
  const { t, language } = useLanguage();
  const portfolioData = usePortfolioData();
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [matchedProject, setMatchedProject] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  const initialLimit = 6;

  // Prevent scroll when modal or matcher is open
  useEffect(() => {
    if (isModalOpen || isMatcherOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen, isMatcherOpen]);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleMatchResult = (project) => {
    setMatchedProject(project);
    // Scroll to results or show a special view
  };

  // Extract unique tags and sort them by frequency
  const tags = useMemo(() => {
    const allTags = portfolioData.projects.flatMap((p) => p.tags);
    const tagCounts = allTags.reduce((acc, tag) => {
      acc[tag] = (acc[tag] || 0) + 1;
      return acc;
    }, {});
    
    return [
      "All",
      ...Object.keys(tagCounts)
        .sort((a, b) => tagCounts[b] - tagCounts[a])
        .slice(0, 10),
    ];
  }, [portfolioData.projects]);

  const filteredProjects = useMemo(() => {
    let list = portfolioData.projects;
    if (activeFilter !== "All") {
      list = portfolioData.projects.filter((p) => p.tags.includes(activeFilter));
    }
    
    if (matchedProject) return [matchedProject];
    
    // Apply limit if showAllProjects is false
    return showAllProjects ? list : list.slice(0, initialLimit);
  }, [activeFilter, portfolioData.projects, matchedProject, showAllProjects]);

  return (
    <section id="projects" className="py-32 relative overflow-hidden bg-surface/10">
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[180px]" />
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-highlight/5 rounded-full blur-[140px]" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center mx-auto max-w-4xl mb-16"
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

        {/* Filter & Matcher Bar */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20 max-w-6xl mx-auto">
          {/* AI Matcher Trigger */}
          {!matchedProject && (
            <motion.button
              variants={fadeIn("right", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              onClick={() => setIsMatcherOpen(true)}
              className="flex items-center gap-3 px-8 py-5 rounded-3xl bg-gradient-to-r from-primary to-highlight text-background font-black text-xs uppercase tracking-widest shadow-[0_0_30px_rgba(var(--primary-rgb),0.3)] hover:scale-105 transition-all group"
            >
              <Brain size={18} className="group-hover:rotate-12 transition-transform" />
              {t('matcher_btn')}
            </motion.button>
          )}

          {matchedProject && (
            <motion.button
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              onClick={() => setMatchedProject(null)}
              className="flex items-center gap-3 px-8 py-5 rounded-3xl glass border border-primary/30 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary/10 transition-all"
            >
              <RefreshCcw size={18} />
              {t('matcher_reset')}
            </motion.button>
          )}

          <div className="h-px md:h-12 w-12 md:w-px bg-foreground/10" />

          {/* Filter Chips */}
          <motion.div
             variants={fadeIn("left", 0.1)}
             initial="hidden"
             whileInView="show"
             viewport={{ once: true }}
             className="flex flex-wrap justify-center gap-3"
          >
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => { setActiveFilter(tag); setMatchedProject(null); }}
                className={`relative px-6 py-3 rounded-2xl text-[11px] font-bold tracking-wider transition-all duration-500 overflow-hidden group ${
                  activeFilter === tag && !matchedProject
                    ? "text-background"
                    : "text-muted-foreground glass hover:text-primary hover:border-primary/30 border border-foreground/5"
                }`}
              >
                {activeFilter === tag && !matchedProject && (
                  <motion.div
                    layoutId="activeFilterBg"
                    className="absolute inset-0 bg-gradient-to-r from-primary to-highlight z-0"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10">
                  {tag === "All" ? t('filter_all') : tag}
                </span>
              </button>
            ))}
          </motion.div>
        </div>

        {/* Result Label */}
        {matchedProject && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-2xl glass-strong border border-primary/20 text-primary uppercase font-black text-xs tracking-widest">
              <Sparkles size={16} />
              {t('matcher_result')}
            </div>
          </motion.div>
        )}

        {/* Projects Grid */}
        <motion.div 
          layout
          variants={staggerContainer(0.05, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.05 }}
          className={`grid gap-10 ${matchedProject ? 'max-w-2xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'}`}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.title}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -15 }}
                onClick={() => handleProjectClick(project)}
                className="group relative glass rounded-[40px] overflow-hidden border border-foreground/5 hover:border-primary/40 transition-all duration-700 shadow-2xl cursor-pointer"
              >
                <div className="relative overflow-hidden aspect-[4/3]">
                  <motion.img
                    whileHover={{ scale: 1.1, rotate: 1 }}
                    transition={{ duration: 1.5 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent opacity-90 group-hover:opacity-75 transition-opacity" />
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {project.tags.slice(0, 2).map((tag, tagIdx) => (
                      <span key={tagIdx} className="px-4 py-1.5 text-[10px] uppercase font-black tracking-widest bg-black/60 backdrop-blur-xl border border-foreground/10 rounded-xl text-primary shadow-2xl">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="absolute top-6 right-6">
                     <div className="w-10 h-10 rounded-full glass flex items-center justify-center border border-foreground/10 text-foreground/50 group-hover:text-primary transition-colors">
                        <Sparkles size={16} className="animate-pulse" />
                     </div>
                  </div>
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
                        onClick={(e) => e.stopPropagation()}
                        className="p-4 rounded-2xl glass hover:bg-primary hover:text-background transition-all shadow-2xl border border-foreground/10"
                      >
                        <Github className="w-5 h-5" />
                      </motion.a>
                      <button className="flex-grow flex items-center justify-center gap-3 px-6 py-4 rounded-2xl bg-foreground/5 hover:bg-primary hover:text-background transition-all shadow-2xl border border-foreground/10 font-black text-xs uppercase tracking-widest">
                        {t('case_study')} <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
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
          </AnimatePresence>
        </motion.div>

        {/* Show More Projects Toggle */}
        {!matchedProject && portfolioData.projects.length > initialLimit && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-center mt-20"
          >
            <button
              onClick={() => setShowAllProjects(!showAllProjects)}
              className="flex items-center gap-3 px-10 py-5 rounded-3xl glass border border-primary/20 text-primary font-black text-xs uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500 shadow-xl group"
            >
              <RefreshCcw size={18} className={showAllProjects ? "rotate-180 transition-transform" : ""} />
              {showAllProjects 
                ? (language === 'ar' ? 'عرض أقل' : 'Show Less') 
                : (language === 'ar' ? `عرض كافة المشاريع (${portfolioData.projects.length})` : `Show All Projects (${portfolioData.projects.length})`)
              }
            </button>
          </motion.div>
        )}

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

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        t={t}
      />

      <ProjectMatcher
        isOpen={isMatcherOpen}
        onClose={() => setIsMatcherOpen(false)}
        projects={portfolioData.projects}
        t={t}
        onResult={handleMatchResult}
      />
    </section>
  );
};
