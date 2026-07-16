import React from 'react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const cleanLink = (url) => {
  if (!url) return '';
  const match = url.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : url;
};

export default function Certifications({ content }) {
  const { certifications } = content;

  return (
    <section id="certifications" className="py-12 border-b border-olive-200/20 dark:border-cream-200/10 scroll-mt-8">
      
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-8 text-left">
        <h3 className="font-mono text-xs text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest">
          05 // Certifications
        </h3>
        <span className="font-mono text-[10px] text-olive-500/40 dark:text-cream-200/30">
          CREDENTIALS.LOG
        </span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
        {certifications && certifications.map((cert, idx) => (
          <div
            key={idx}
            className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 bg-cream-100/45 dark:bg-olive-800/10 hover:border-olive-500/70 dark:hover:border-cream-200/50 transition-all duration-300 flex flex-col justify-between group"
          >
            <div>
              {/* Badge & Date */}
              <div className="flex justify-between items-center mb-3">
                <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                  <ShieldCheck size={12} />
                  Verified
                </span>
                <span className="font-mono text-[10px] text-olive-500/50 dark:text-cream-200/40">
                  {cert.date}
                </span>
              </div>

              {/* Title */}
              <h4 className="text-base font-bold font-sans text-olive-500 dark:text-cream-200 leading-tight">
                {cert.name}
              </h4>
              
              {/* Issuer */}
              <p className="text-xs font-mono text-olive-500/60 dark:text-cream-200/50 mt-1">
                Issued by {cert.issuer}
              </p>

              {/* Score / Description */}
              <p className="text-xs text-olive-500/75 dark:text-cream-200/60 font-sans mt-3 leading-relaxed">
                {cert.score}
              </p>
            </div>

            {/* Action */}
            <div className="mt-6 pt-3 border-t border-olive-200/10 dark:border-cream-200/5 flex justify-between items-center text-xs font-mono">
              <span className="text-[10px] text-olive-500/40 dark:text-cream-200/30">
                AUTHORITY: EF_SET
              </span>
              <a
                href={cleanLink(cert.verifyUrl)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-olive-500 dark:hover:text-cream-200 font-bold opacity-80 hover:opacity-100 transition-all"
              >
                <span>verify credential</span>
                <ExternalLink size={10} />
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
