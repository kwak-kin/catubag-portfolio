import React from 'react';
import { Shield, Presentation, Calendar, Award, Eye } from 'lucide-react';

export default function Leadership({ content, onZoom }) {
  const { leadership, speaking } = content;

  return (
    <section id="leadership" className="py-12 border-b border-olive-200/20 dark:border-cream-200/10 scroll-mt-8 space-y-12">
      
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-4 text-left">
        <h3 className="font-mono text-xs text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest">
          04 // Leadership & Gigs
        </h3>
        <span className="font-mono text-[10px] text-olive-500/40 dark:text-cream-200/30">
          COMMUNITY.LOG
        </span>
      </div>

      {/* Leadership Sub-Section */}
      <div className="space-y-6 text-left">
        <h4 className="font-mono text-xs font-bold text-olive-500/70 dark:text-cream-200/60 uppercase tracking-wider flex items-center gap-1.5">
          <Shield size={14} className="opacity-80" />
          Community Initiatives & Leadership
        </h4>
        
        <div className="grid grid-cols-1 gap-6">
          {leadership && leadership.map((lead, idx) => (
            <div
              key={idx}
              className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 bg-cream-100/45 dark:bg-olive-800/10 hover:border-olive-500/60 dark:hover:border-cream-200/40 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-baseline gap-2 mb-3">
                <h5 className="text-base font-bold font-sans text-olive-500 dark:text-cream-200 flex items-center gap-1.5">
                  {lead.organization}
                </h5>
              </div>

              {/* Roles sub-list */}
              <div className="space-y-2 mb-3 pl-1">
                {lead.roles && lead.roles.map((role, rIdx) => (
                  <div key={rIdx} className="flex justify-between items-center text-xs font-mono">
                    <span className="font-bold text-olive-500 dark:text-cream-200 flex items-center gap-1">
                      <span className="w-1 h-1 rounded-full bg-olive-400 dark:bg-cream-300"></span>
                      {role.title}
                    </span>
                    <span className="text-olive-500/50 dark:text-cream-200/40">{role.period}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-olive-500/80 dark:text-cream-200/70 leading-relaxed font-sans border-t border-olive-200/10 dark:border-cream-200/5 pt-3">
                {lead.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Speaking Sub-Section */}
      <div className="space-y-6 text-left">
        <h4 className="font-mono text-xs font-bold text-olive-500/70 dark:text-cream-200/60 uppercase tracking-wider flex items-center gap-1.5">
          <Presentation size={14} className="opacity-80" />
          Technical Presentations & Workshops
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {speaking && speaking.map((speak, idx) => (
            <div
              key={idx}
              className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 bg-cream-100/45 dark:bg-olive-800/10 hover:border-olive-500/60 dark:hover:border-cream-200/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Meta details */}
                <div className="flex justify-between items-center mb-2 font-mono text-[10px]">
                  <span className="text-olive-500/50 dark:text-cream-200/40 uppercase tracking-wider flex items-center gap-1">
                    <Calendar size={10} />
                    {speak.date}
                  </span>
                  <span className="opacity-40">LECTURE</span>
                </div>
                
                {/* Event Name */}
                <span className="text-[10px] font-mono font-bold text-olive-500/60 dark:text-cream-200/40 uppercase">
                  {speak.event}
                </span>
                
                {/* Topic */}
                <h5 className="text-sm font-bold text-olive-500 dark:text-cream-200 mt-1 leading-snug font-sans">
                  {speak.topic}
                </h5>

                <p className="text-xs text-olive-500/75 dark:text-cream-200/65 font-sans mt-3 leading-relaxed">
                  {speak.description}
                </p>

                {/* Event Photos Row */}
                {speak.media && speak.media.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-olive-200/10 dark:border-cream-200/5">
                    <div className="font-mono text-[8px] text-olive-500/40 dark:text-cream-200/30 uppercase tracking-wider mb-2">
                      Workshop Gallery (Click to zoom)
                    </div>
                    <div className="flex gap-3 overflow-x-auto pb-2 pt-1 scrollbar-thin scrollbar-thumb-olive-300 dark:scrollbar-thumb-cream-300">
                      {speak.media.map((img, iIdx) => (
                        <div
                          key={iIdx}
                          onClick={() => onZoom(
                            speak.media.map(m => ({
                              url: m.url,
                              caption: speak.topic,
                              description: ""
                            })),
                            iIdx,
                            'square'
                          )}
                          className="relative w-16 aspect-square rounded overflow-hidden bg-cream-200 dark:bg-olive-900 border-2 border-olive-400/40 dark:border-cream-200/20 shadow-brutalist hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 cursor-zoom-in opacity-90 hover:opacity-100 hover:border-olive-500 dark:hover:border-cream-200 transition-all flex-shrink-0 group/thumb"
                        >
                          <img
                            src={img.url}
                            alt={img.caption || `Slide ${iIdx + 1}`}
                            className="w-full h-full object-cover grayscale group-hover/thumb:grayscale-0 transition-all duration-300"
                          />
                          <div className="absolute inset-0 bg-olive-800/10 opacity-10 group-hover/thumb:opacity-0 transition-opacity"></div>
                          
                          {/* Eye zoom indicator hover badge */}
                          <div className="absolute inset-0 flex items-center justify-center bg-olive-950/40 opacity-0 group-hover/thumb:opacity-100 transition-opacity text-cream-200">
                            <Eye size={12} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="border-t border-olive-200/10 dark:border-cream-200/5 pt-3 mt-4 flex justify-between items-center text-[9px] font-mono opacity-50 font-sans">
                <span>ROLE: WORKSHOP_INSTRUCTOR</span>
                <span>STATUS: OK</span>
              </div>

            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
