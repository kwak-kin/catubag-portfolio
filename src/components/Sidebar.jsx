import React, { useState, useEffect } from 'react';
import { Sun, Moon, Mail, Github, Linkedin, MapPin, Copy, Check, FileText } from 'lucide-react';

// Helper to clean Markdown-style link strings: [label](url) -> url
const cleanLink = (url) => {
  if (!url) return '';
  const match = url.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : url;
};

export default function Sidebar({ theme, toggleTheme, content }) {
  const [copied, setCopied] = useState(false);
  const [activeSection, setActiveSection] = useState('intro');

  const { personal } = content;

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Ignore if user is typing in an input
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      
      const key = e.key.toLowerCase();
      if (key === 't') {
        toggleTheme();
      } else if (key === 'g' && personal.github) {
        window.open(cleanLink(personal.github), '_blank');
      } else if (key === 'l' && personal.linkedin) {
        window.open(cleanLink(personal.linkedin), '_blank');
      } else if (key === 'c') {
        copyEmailToClipboard();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [theme, personal]);

  // Scrollspy logic
  useEffect(() => {
    const sections = ['intro', 'experience', 'projects', 'leadership', 'education'];

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Trigger active state when section occupies mid-viewport
      threshold: 0,
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { id: 'intro', label: '01. Intro' },
    { id: 'experience', label: '02. Experience' },
    { id: 'projects', label: '03. Projects' },
    { id: 'leadership', label: '04. Leadership & Gigs' },
    { id: 'education', label: '05. Credentials & Skills' },
  ];

  return (
    <aside className="w-full lg:w-80 lg:h-screen lg:fixed lg:top-0 lg:left-0 border-b lg:border-b-0 lg:border-r border-olive-200/40 dark:border-cream-200/10 flex flex-col justify-between p-6 lg:p-8 bg-cream-100/50 dark:bg-olive-600/35 backdrop-blur-sm z-30">
      
      {/* Top Section */}
      <div>
        {/* Name & Title */}
        <div className="mb-8 text-left">
          <h1 className="text-xl font-bold tracking-tight font-sans text-olive-500 dark:text-cream-200">
            {personal.name}
          </h1>
          <p className="text-xs font-mono text-olive-500/70 dark:text-cream-200/60 mt-1.5 leading-relaxed">
            {personal.titles && personal.titles.join(' / ')}
          </p>
          <div className="flex flex-wrap gap-1 mt-2.5">
            {personal.subtitles && personal.subtitles.map((sub, index) => (
              <span key={index} className="text-[9px] font-mono px-1.5 py-0.5 border border-olive-300/30 dark:border-cream-300/15 rounded text-olive-500/60 dark:text-cream-200/50">
                {sub}
              </span>
            ))}
          </div>
        </div>

        {/* Scrollspy Navigation */}
        <nav className="space-y-2 mb-10 hidden md:block">
          <div className="text-[10px] font-mono text-olive-500/40 dark:text-cream-200/30 uppercase tracking-widest mb-3">
            Navigation
          </div>
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`flex items-center text-sm font-mono py-1.5 transition-all duration-200 ${
                activeSection === link.id
                  ? 'text-olive-500 font-bold translate-x-1.5 dark:text-cream-200'
                  : 'text-olive-500/50 hover:text-olive-500/80 dark:text-cream-200/40 dark:hover:text-cream-200/70'
              }`}
            >
              <span className={`mr-2 transition-all ${
                activeSection === link.id ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
              }`}>
                &gt;
              </span>
              {link.label}
            </a>
          ))}
        </nav>

        {/* Keyboard Shortcuts Dashboard Card */}
        <div className="border border-olive-200/40 dark:border-cream-200/10 rounded p-4 font-mono text-xs bg-cream-200/30 dark:bg-olive-700/20 mb-8 hidden lg:block text-left">
          <div className="text-[9px] text-olive-500/40 dark:text-cream-200/30 uppercase tracking-wider mb-2 font-bold">
            Interactive Console
          </div>
          <div className="space-y-1.5 text-olive-500/70 dark:text-cream-200/60">
            <div className="flex justify-between">
              <span>Toggle Theme</span>
              <kbd className="px-1.5 py-0.5 border border-olive-300/40 dark:border-cream-300/20 rounded bg-cream-100 dark:bg-olive-600 text-[10px]">T</kbd>
            </div>
            <div className="flex justify-between">
              <span>Go to Github</span>
              <kbd className="px-1.5 py-0.5 border border-olive-300/40 dark:border-cream-300/20 rounded bg-cream-100 dark:bg-olive-600 text-[10px]">G</kbd>
            </div>
            <div className="flex justify-between">
              <span>Go to LinkedIn</span>
              <kbd className="px-1.5 py-0.5 border border-olive-300/40 dark:border-cream-300/20 rounded bg-cream-100 dark:bg-olive-600 text-[10px]">L</kbd>
            </div>
            <div className="flex justify-between">
              <span>Copy Email</span>
              <kbd className="px-1.5 py-0.5 border border-olive-300/40 dark:border-cream-300/20 rounded bg-cream-100 dark:bg-olive-600 text-[10px]">C</kbd>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-6">
        
        {/* Contact info */}
        <div className="space-y-2.5 text-xs font-mono text-left">
          <div className="flex items-center text-olive-500/70 dark:text-cream-200/60">
            <MapPin size={14} className="mr-2 opacity-70" />
            <span className="leading-tight">{personal.location}</span>
          </div>
          
          <button
            onClick={copyEmailToClipboard}
            className="flex items-center text-olive-500/70 dark:text-cream-200/60 hover:text-olive-500 dark:hover:text-cream-200 transition-colors w-full group text-left"
          >
            <Mail size={14} className="mr-2 opacity-70" />
            <span className="truncate flex-1">{personal.email}</span>
            <span className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity">
              {copied ? <Check size={12} className="text-emerald-600" /> : <Copy size={12} />}
            </span>
          </button>
        </div>

        {/* Social Actions / Links */}
        <div className="flex items-center justify-between pt-4 border-t border-olive-200/20 dark:border-cream-200/10">
          <div className="flex space-x-3">
            {personal.github && (
              <a
                href={cleanLink(personal.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-olive-200/40 dark:border-cream-200/15 rounded hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-500 transition-all duration-200"
                title="GitHub"
              >
                <Github size={16} />
              </a>
            )}
            {personal.linkedin && (
              <a
                href={cleanLink(personal.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-olive-200/40 dark:border-cream-200/15 rounded hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-500 transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            )}
          </div>

          {/* Theme Switcher Button */}
          <button
            onClick={toggleTheme}
            className="p-2 border border-olive-200/40 dark:border-cream-200/15 rounded hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-500 transition-all duration-200"
            title="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </aside>
  );
}
