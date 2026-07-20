import React from 'react';
import { GraduationCap, Award, Wrench, Settings, Brain, BookOpen, Database, Bot } from 'lucide-react';

export default function Education({ content }) {
  const { personal, skills } = content;
  const edu = personal.education;

  return (
    <section id="education" className="py-12 pb-24 scroll-mt-8 space-y-12">
      
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-4 text-left">
        <h3 className="font-mono text-xs text-olive-500/45 dark:text-cream-200/35 uppercase tracking-widest">
          05 // Education & Skills
        </h3>
        <span className="font-mono text-[10px] text-olive-500/40 dark:text-cream-200/30">
          ACADEMICS.DB
        </span>
      </div>

      {/* Education Block */}
      {edu && (
        <div className="space-y-6 text-left">
          <h4 className="font-mono text-xs font-bold text-olive-500/80 dark:text-cream-200/70 uppercase tracking-wider flex items-center gap-1.5">
            <GraduationCap size={14} className="opacity-80" />
            Academic Profile
          </h4>
          
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 bg-cream-100/45 dark:bg-olive-800/10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2">
              <h5 className="text-base font-bold font-sans text-olive-500 dark:text-cream-200">
                {edu.degree}
              </h5>
              <span className="font-mono text-xs font-bold text-olive-500/90 dark:text-cream-100 whitespace-nowrap">
                {edu.graduation}
              </span>
            </div>
            
            <div className="font-mono text-xs text-olive-500/80 dark:text-cream-200/80 mt-1">
              {edu.school} &bull; <span className="font-semibold">{edu.specialization}</span>
            </div>

            {/* Honors list */}
            {edu.honors && (
              <div className="mt-4 pt-3 border-t border-olive-200/10 dark:border-cream-200/5 flex flex-wrap gap-2 items-center">
                <span className="text-[10px] font-mono text-olive-500/60 dark:text-cream-200/50 uppercase tracking-widest mr-1">Honors:</span>
                {edu.honors.map((honor, hIdx) => (
                  <span
                    key={hIdx}
                    className="font-mono text-[9px] px-2 py-0.5 border border-amber-500/30 dark:border-amber-400/20 text-amber-800 dark:text-amber-300 bg-amber-500/5 rounded-sm flex items-center gap-1"
                  >
                    <Award size={10} />
                    {honor}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Skills Grid */}
      <div className="space-y-6 text-left">
        <h4 className="font-mono text-xs font-bold text-olive-500/80 dark:text-cream-200/70 uppercase tracking-wider flex items-center gap-1.5">
          <Wrench size={14} className="opacity-80" />
          Technical & Linguistic Skill Matrix
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Programming & Frameworks */}
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                <Settings size={12} /> Coding & Frameworks
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {skills.programming && skills.programming.map((prog, pIdx) => (
                  <span
                    key={pIdx}
                    className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                  >
                    {prog}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Databases & Cloud */}
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                <Database size={12} /> Cloud & Database
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {skills.databases_cloud && skills.databases_cloud.map((db, dIdx) => (
                  <span
                    key={dIdx}
                    className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                  >
                    {db}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* AI-Assisted Development */}
          {skills.ai_assisted_dev && (
            <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between">
              <div>
                <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                  <Bot size={12} /> AI-Assisted Development
                </h5>
                <div className="flex flex-wrap gap-1.5">
                  {skills.ai_assisted_dev.map((aiDev, adIdx) => (
                    <span
                      key={adIdx}
                      className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                    >
                      {aiDev}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* AI Annotating & Evaluation */}
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                <Brain size={12} /> AI Training & Eval
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {skills.ai_training && skills.ai_training.map((ai, aIdx) => (
                  <span
                    key={aIdx}
                    className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                  >
                    {ai}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Dev Environment Tools */}
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                <Wrench size={12} /> Tools & Platforms
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {skills.tools && skills.tools.map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Spoken Languages */}
          <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-5 bg-cream-100/30 dark:bg-olive-800/5 flex flex-col justify-between">
            <div>
              <h5 className="text-xs font-mono font-bold uppercase tracking-wider text-olive-500/85 dark:text-cream-200/80 flex items-center gap-1.5 border-b border-olive-200/20 dark:border-cream-200/5 pb-2 mb-3">
                <BookOpen size={12} /> Spoken Languages
              </h5>
              <div className="flex flex-wrap gap-1.5">
                {skills.languages && skills.languages.map((lang, lIdx) => (
                  <span
                    key={lIdx}
                    className="font-mono text-[10px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/50 dark:bg-olive-800/35 text-olive-500 dark:text-cream-100 hover:-translate-y-0.5 transition-transform"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
