import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/animations";
import { usePortfolioData, useLanguage } from "@/context/LanguageContext";

export const Hero = () => {
  const portfolioData = usePortfolioData();
  const { personal, allSkills } = portfolioData;
  const { t, language } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background with Parallax effect */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000"
          alt="Engineering Backdrop"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </motion.div>

      {/* Modern Gradient Accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.1, 0.2, 0.1] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" 
      />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + "%", 
              y: Math.random() * 100 + "%",
              opacity: 0 
            }}
            animate={{ 
              y: [null, "-20%"],
              opacity: [0, 0.4, 0]
            }}
            transition={{ 
              duration: 10 + Math.random() * 20, 
              repeat: Infinity,
              delay: Math.random() * 10
            }}
            className="absolute w-1 h-1 rounded-full bg-primary"
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <motion.div 
          variants={staggerContainer(0.1, 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div variants={fadeIn("up", 0.2)}>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-bold tracking-widest text-primary uppercase border border-primary/20">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_#f59e0b]" />
                {personal.title}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div variants={fadeIn("up", 0.4)} className="space-y-4 relative">
              {/* Premium Arabic Background Watermark */}
              <div className={`absolute -top-10 ${language === 'ar' ? 'right-0' : 'left-0'} text-[180px] font-black text-primary/5 select-none font-serif leading-none z-0 pointer-events-none`}>
                محمد
              </div>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-none relative z-10">
                {t('hero_hi')} <br />
                <span className="bg-gradient-to-r from-[#FFD700] via-[#FFA500] to-[#FF4500] text-transparent bg-clip-text drop-shadow-[0_0_35px_rgba(255,165,0,0.4)]">
                  {personal.name.split(' ')[0]}
                </span>{' '}
                <span className="text-foreground drop-shadow-sm">{personal.name.split(' ').slice(1).join(' ')}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed relative z-10">
                {t('hero_intro')}<span className="text-foreground font-semibold">{t('hero_intelligence')}</span>{t('hero_from_data')}<span className="text-primary italic">{t('hero_agri')}</span>{t('hero_and')}
                <span className="text-foreground font-semibold">{t('hero_ai_analytics')}</span>
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={fadeIn("up", 0.6)} className="flex flex-wrap gap-4 pt-4">
              <a href="#contact">
                <Button size="lg" className="group gap-2 px-8 py-7 text-lg">
                  {t('let_collaborate')} 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </a>
              <AnimatedBorderButton className="px-8 py-7 text-lg gap-2">
                <Download className="w-5 h-5" />
                {t('download_resume')}
              </AnimatedBorderButton>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={fadeIn("up", 0.8)} className="flex items-center gap-6 pt-10">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-[0.3em]">{t('network')} </span>
              <div className="flex gap-4">
                {[
                  { icon: Github, href: personal.github, label: "GitHub" },
                  { icon: Linkedin, href: personal.linkedin, label: "LinkedIn" },
                  { icon: Mail, href: `mailto:${personal.email}`, label: "Email" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 rounded-2xl glass hover:bg-primary/10 hover:text-primary transition-all duration-500 group border border-primary/5 hover:border-primary/20"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 group-hover:scale-125 transition-transform" />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Hero Visual (Interactive Card) */}
          <motion.div 
            variants={fadeIn("left", 0.5)}
            className="relative hidden lg:block"
          >
            <motion.div 
              whileHover={{ rotateY: 10, rotateX: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative max-w-md mx-auto perspective-1000"
            >
              {/* Background Glow */}
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-br from-primary/30 via-transparent to-primary/10 blur-[80px]" />
              
              {/* Image Frame */}
              <div className="relative glass rounded-[40px] p-4 glow-border-gold overflow-hidden border border-primary/20 bg-surface/30 backdrop-blur-2xl">
                <img
                  src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800"
                  alt={personal.name}
                  className="w-full aspect-[4/5] object-cover rounded-[32px] grayscale-[30%] hover:grayscale-0 transition-all duration-1000 brightness-90 hover:brightness-100"
                />

                {/* Interactive Overlay Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute -bottom-6 ${language === 'ar' ? '-left-6' : '-right-6'} glass rounded-2xl px-6 py-5 border border-primary/30 shadow-2xl`}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_#22c55e]" />
                    <span className="text-sm font-bold tracking-wide uppercase">{t('hero_open')}</span>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className={`absolute -top-6 ${language === 'ar' ? '-right-6' : '-left-6'} glass rounded-2xl px-6 py-5 border border-primary/30 shadow-2xl`}
                >
                  <div className="text-3xl font-black text-primary italic">9+</div>
                  <div className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">{t('hero_months')}</div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Tech Marquee with Scroll Animation */}
        <motion.div 
          variants={fadeIn("up", 1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-32"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            <p className="text-[10px] uppercase tracking-[0.4em] text-primary font-black">
              {t('integrated_tech')}
            </p>
            <div className="h-[1px] flex-grow bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
          </div>
          
          <div className="relative overflow-hidden group">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-marquee py-6">
              {[...allSkills, ...allSkills].map((skill, idx) => (
                <div key={idx} className="flex-shrink-0 px-12 flex items-center group/skill">
                  <span className="text-2xl md:text-3xl font-black text-foreground/5 group-hover/skill:text-primary transition-all duration-500 uppercase tracking-tighter italic">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50 group-hover:opacity-100 transition-opacity">{t('discover')}</span>
          <ChevronDown className="w-6 h-6 animate-bounce text-primary/50 group-hover:text-primary" />
        </a>
      </motion.div>
    </section>
  );
};
