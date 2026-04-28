import React from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext';

const SkillRadar = ({ data }) => {
  const { t } = useLanguage();

  if (!data) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full h-[400px] md:h-[500px] relative glass-strong rounded-[40px] p-8 border border-primary/20 overflow-hidden group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-highlight/5 pointer-events-none" />
      
      <div className="relative z-10 h-full">
        <div className="text-center mb-4">
          <h3 className="text-xl font-black uppercase tracking-widest text-primary">
            {t('technical_balance')}
          </h3>
          <p className="text-xs text-muted-foreground uppercase tracking-widest mt-1 opacity-60">
            {t('skill_analysis')}
          </p>
        </div>

        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid stroke="rgba(var(--primary-rgb), 0.1)" />
            <PolarAngleAxis 
              dataKey="subject" 
              tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10, fontWeight: 900 }}
            />
            <PolarRadiusAxis 
              angle={30} 
              domain={[0, 100]} 
              tick={false} 
              axisLine={false} 
            />
            <Radar
              name="Expertise"
              dataKey="A"
              stroke="rgb(var(--primary-rgb))"
              fill="rgb(var(--primary-rgb))"
              fillOpacity={0.3}
              dot={{ r: 4, fill: 'rgb(var(--primary-rgb))', strokeWidth: 2 }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>

      {/* Decorative Orbs */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-all duration-700" />
      <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-highlight/10 rounded-full blur-3xl group-hover:bg-highlight/20 transition-all duration-700" />
    </motion.div>
  );
};

export default SkillRadar;
