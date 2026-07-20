import React, { useState } from 'react';
import { Award, Users, Terminal, BookOpen, ArrowUpRight, Zap, Brain } from 'lucide-react';

const cleanLink = (url) => {
  if (!url) return '';
  const match = url.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : url;
};

export default function Hero({ content }) {
  const { personal, projects, experience, speaking, leadership } = content;
  const [imageError, setImageError] = useState(false);

  // Calculate stats dynamically from data
  const internshipHours = 900; // 400 hours at Argon + 500 hours at Motolite
  const totalProjects = projects ? projects.length : 0;
  const speakingGigs = speaking ? speaking.length : 0;
  const leadershipRoles = leadership ? leadership.length : 0;

  const stats = [
    { value: `${totalProjects}`, label: "PROJECTS SHIPPED" },
    { value: `${internshipHours}h`, label: "INTERNSHIP HOURS" },
    { value: `${leadershipRoles}`, label: "LEADERSHIP ORGS" },
    { value: `${speakingGigs}`, label: "WORKSHOPS HELD" }
  ];

  // Map titles to custom descriptions to highlight them as core identities
  const identitiesMap = {
    "Full-Stack Software Engineer": "Designing and building robust web, mobile, and IoT systems with a focus on scalable software architecture, clean code, and user experience. Experienced in technical project management and agile workflows.",
    "Researcher": "Investigating complex technical and operational problems, publishing systems integration research, and presenting findings at national academic forums.",
    "AI Trainer & Annotator": "Evaluating LLM responses, refining prompts, and reviewing code output for technical accuracy. Specializing in RLHF/SFT alignment, tagger/evaluator pipelines, and multilingual validation."
  };

  // Map subtitles to custom highlights
  const achievementsMap = {
    "Magna Cum Laude": {
      metric: "Latin Honors (NU Baliwag)",
      desc: "Outstanding academic performance in Information Technology, specializing in Mobile & Web Application Development."
    },
    "Student Leader": {
      metric: "AWS Club Co-Captain & Scholars' Society VP",
      desc: "Co-led cloud initiatives, student mentoring, financial planning, and external academic sponsorships."
    }
  };

  return (
    <section id="intro" className="py-8 md:py-16 space-y-12 border-b border-olive-200/20 dark:border-cream-200/10">
      
      {/* Intro Header Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Profile Image Column (Span 4) */}
        <div className="md:col-span-4 flex justify-center md:justify-start">
          <div className="relative w-48 h-48 md:w-full md:h-auto aspect-square border border-olive-300 dark:border-cream-300 bg-cream-100 dark:bg-olive-600/50 p-1.5 overflow-hidden group">
            
            {/* Visual background dots for depth */}
            <div className="absolute inset-0 bg-dot-grid opacity-30 z-0"></div>
            
            {/* Retro scanline overlay */}
            <div className="absolute inset-0 retro-overlay z-20 pointer-events-none"></div>

            {/* Profile Image or fallback placeholder */}
            {!imageError && personal.profileImage ? (
              <img
                src={personal.profileImage}
                alt={personal.name}
                onError={() => setImageError(true)}
                className="w-full h-full object-cover stark-profile-img z-10 relative transition-transform duration-500 group-hover:scale-105"
              />
            ) : (
              // Typographic/SVG stark placeholder
              <div className="w-full h-full flex flex-col justify-between p-4 bg-olive-100/50 dark:bg-olive-800/40 relative z-10 font-mono text-[9px] text-olive-500/70 dark:text-cream-200/50 select-none">
                <div className="flex justify-between items-center border-b border-olive-300/30 dark:border-cream-300/20 pb-2">
                  <span>SYS.IMG_01</span>
                  <Terminal size={10} />
                </div>
                <div className="text-center py-6">
                  <span className="text-lg font-bold block leading-none font-sans text-olive-500 dark:text-cream-200">J.L.C.</span>
                  <span className="text-[10px] mt-1 block">PROFILE_PLACEHOLDER</span>
                </div>
                <div className="text-left border-t border-olive-300/30 dark:border-cream-300/20 pt-2 flex justify-between">
                  <span>RESOL: 8bit_gray</span>
                  <span>STATUS: OFF</span>
                </div>
              </div>
            )}
            
            {/* High-contrast border frame detail */}
            <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-olive-500 dark:border-cream-200 z-20"></div>
            <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-olive-500 dark:border-cream-200 z-20"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-olive-500 dark:border-cream-200 z-20"></div>
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-olive-500 dark:border-cream-200 z-20"></div>
          </div>
        </div>

        {/* Introduction Column (Span 8) */}
        <div className="md:col-span-8 space-y-4 text-left font-sans">
          <div className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-olive-500/60 dark:text-cream-200/50 border border-olive-200/30 dark:border-cream-200/10 px-2 py-0.5 rounded-full bg-cream-300/20 dark:bg-olive-750/30">
            <span className="w-1.5 h-1.5 rounded-full bg-olive-500 dark:bg-cream-200 animate-pulse"></span>
            Software Engineer &bull; Researcher &bull; AI Specialist
          </div>
          
          <h2 className="text-2xl md:text-3.5xl lg:text-4xl font-bold tracking-tight leading-none text-olive-500 dark:text-cream-200">
            {personal.headline}
          </h2>
          
          <p className="text-sm text-olive-500/80 dark:text-cream-200/70 leading-relaxed max-w-xl">
            I am a Software Engineer, Systems Researcher, and AI Trainer/Annotator with 4+ years of hands-on experience across corporate IT internships, cloud leadership, and academic projects. Leveraging deep proficiency in advanced prompt engineering and developer AI tools (such as Claude Code, Antigravity, and OpenAI Codex), I rapidly build scalable applications, evaluate LLM outputs for technical accuracy, and automate complex workflows.
          </p>

          <div className="flex gap-4 pt-2">
            <a
              href="#projects"
              className="px-4 py-2 border border-olive-500 bg-olive-500 text-cream-200 hover:bg-olive-600 dark:border-cream-200 dark:bg-cream-200 dark:text-olive-500 dark:hover:bg-cream-100 hover:-translate-y-0.5 transition-all text-xs font-mono font-bold flex items-center gap-1"
            >
              Browse Projects <ArrowUpRight size={14} />
            </a>
            <a
              href={personal.linkedin ? cleanLink(personal.linkedin) : "#"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-olive-500/30 dark:border-cream-200/20 hover:border-olive-500 dark:hover:border-cream-200 hover:-translate-y-0.5 transition-all text-xs font-mono flex items-center gap-1"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Statistics Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 border border-olive-200/40 dark:border-cream-200/10 divide-x divide-y md:divide-y-0 divide-olive-200/40 dark:divide-cream-200/10 bg-cream-100/35 dark:bg-olive-800/10">
        {stats.map((stat, idx) => (
          <div key={idx} className="p-4 md:p-6 text-center md:text-left flex flex-col justify-center">
            <div className="text-xl md:text-2xl font-bold font-mono tracking-tight text-olive-500 dark:text-cream-200 flex items-center justify-center md:justify-start gap-0.5">
              {stat.value}
              <span className="text-[10px] opacity-40 font-normal">^</span>
            </div>
            <div className="text-[9px] font-mono text-olive-500/50 dark:text-cream-200/40 uppercase tracking-widest mt-1">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Core Focus (3 Columns) */}
      <div id="identities" className="scroll-mt-8 space-y-4 text-left">
        <div className="font-mono text-xs text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest">
          02 // Core Focus
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {personal.titles && personal.titles.map((title, index) => {
            const isDev = title.toLowerCase().includes('develop');
            const isRes = title.toLowerCase().includes('research');
            return (
              <div
                key={index}
                className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 bg-cream-100/40 dark:bg-olive-800/20 hover:shadow-brutalist dark:hover:shadow-brutalist-cream transition-all duration-300 relative group overflow-hidden flex flex-col justify-between"
              >
                <div>
                  <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-100 transition-opacity text-olive-500 dark:text-cream-200">
                    {isDev ? <Terminal size={24} /> : isRes ? <BookOpen size={24} /> : <Brain size={24} />}
                  </div>
                  <h3 className="text-base font-bold font-sans text-olive-500 dark:text-cream-200 flex items-center gap-2">
                    {title}
                  </h3>
                  <p className="text-xs text-olive-500/80 dark:text-cream-100/90 mt-3 leading-relaxed font-sans">
                    {identitiesMap[title] || "Applying deep expertise across aligned computer science fields and software architecture environments."}
                  </p>
                </div>
                <div className="mt-4 pt-2 border-t border-olive-200/20 dark:border-cream-200/10 font-mono text-[8px] opacity-40 uppercase">
                  {isDev ? 'Engineering' : isRes ? 'Inquiry' : 'Alignment'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Achievements Block */}
      <div className="space-y-4 text-left">
        <div className="font-mono text-xs text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest">
          Key Achievements
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {personal.subtitles && personal.subtitles.map((sub, index) => {
            const extra = achievementsMap[sub] || { metric: "Accolade", desc: "Recognized honors and community contributions." };
            return (
              <div
                key={index}
                className="border border-olive-500/20 dark:border-cream-200/10 rounded p-5 bg-cream-100/10 dark:bg-olive-800/5 flex flex-col justify-between"
              >
                <div>
                  <h4 className="text-sm font-bold font-sans text-olive-500 dark:text-cream-200 flex items-center gap-1.5">
                    {sub.toLowerCase().includes('laude') ? (
                      <Award size={15} className="text-amber-600/70 dark:text-amber-500/70" />
                    ) : (
                      <Users size={15} className="text-olive-400" />
                    )}
                    {sub}
                  </h4>
                  <div className="text-xs font-mono text-olive-500/60 dark:text-cream-200/40 mt-0.5">
                    {extra.metric}
                  </div>
                  <p className="text-xs text-olive-500/70 dark:text-cream-200/60 mt-2 font-sans">
                    {extra.desc}
                  </p>
                </div>
                <div className="border-t border-olive-200/10 dark:border-cream-200/5 pt-3 mt-4 flex justify-between items-center text-[10px] font-mono">
                  <span className="opacity-50">VERIFIED STATUS</span>
                  <a
                    href="#education"
                    className="hover:underline flex items-center gap-0.5 text-olive-500 dark:text-cream-200 font-bold"
                  >
                    View details <Zap size={10} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </section>
  );
}
