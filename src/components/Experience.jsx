import React from 'react';
import { Calendar, MapPin } from 'lucide-react';

export default function Experience({ content }) {
  const { experience } = content;

  return (
    <section id="experience" className="py-12 border-b border-olive-200/20 dark:border-cream-200/10 scroll-mt-8">
      
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-8 text-left">
        <h3 className="font-mono text-xs text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest">
          02 // Experience
        </h3>
        <span className="font-mono text-[10px] text-olive-500/40 dark:text-cream-200/30">
          HISTORY.LOG
        </span>
      </div>

      {/* Timeline List */}
      <div className="relative pl-4 md:pl-8 border-l border-olive-200/40 dark:border-cream-200/10 space-y-12 text-left">
        {experience && experience.map((exp, idx) => (
          <div key={idx} className="relative group">
            
            {/* Timeline node marker */}
            <div className="absolute -left-[21px] md:-left-[37px] top-1.5 w-3 h-3 rounded-full border border-olive-500 dark:border-cream-200 bg-cream-200 dark:bg-olive-500 group-hover:bg-olive-500 dark:group-hover:bg-cream-200 transition-colors z-10 flex items-center justify-center">
              <div className="w-1 h-1 bg-transparent rounded-full"></div>
            </div>
            
            {/* Hover details border */}
            <div className="absolute top-0 -left-6 bottom-0 w-1 bg-transparent group-hover:bg-olive-500/20 dark:group-hover:bg-cream-200/10 transition-colors"></div>

            {/* Experience Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-2 md:gap-6 items-start">
              
              {/* Date & Location Columns (Span 4) */}
              <div className="md:col-span-4 space-y-1">
                <span className="font-mono text-xs font-bold text-olive-500 dark:text-cream-200 flex items-center gap-1.5">
                  <Calendar size={12} className="opacity-60" />
                  {exp.period}
                </span>
                <div className="text-[10px] font-mono text-olive-500/60 dark:text-cream-200/40 flex items-center gap-1.5">
                  <MapPin size={10} className="opacity-60" />
                  {exp.location}
                </div>
              </div>

              {/* Role Details Column (Span 8) */}
              <div className="md:col-span-8 space-y-3 font-sans">
                <div>
                  <h4 className="text-base font-bold text-olive-500 dark:text-cream-200 flex flex-wrap items-center gap-1.5 leading-tight">
                    {exp.role}
                    <span className="text-xs font-mono font-normal opacity-50 px-2 py-0.5 border border-olive-200/40 dark:border-cream-200/10 rounded-sm bg-cream-100/40 dark:bg-olive-800/10">
                      @ {exp.company}
                    </span>
                  </h4>
                </div>

                {/* Bullets List */}
                <ul className="space-y-1.5 text-sm text-olive-500/70 dark:text-cream-200/60 list-none">
                  {exp.bullets && exp.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="relative pl-4 leading-relaxed">
                      <span className="absolute left-0 top-2 w-1.5 h-[1px] bg-olive-500/40 dark:bg-cream-200/30"></span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
