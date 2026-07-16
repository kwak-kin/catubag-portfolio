import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Projects, { MobileWireframe } from './components/Projects';
import Experience from './components/Experience';
import Leadership from './components/Leadership';
import Certifications from './components/Certifications';
import Education from './components/Education';
import { portfolioData } from './data/content';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function App() {
  const [theme, setTheme] = useState(() => {
    // Read starting theme from HTML configuration or storage
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) return savedTheme;
      return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    }
    return 'light';
  });

  const [lightbox, setLightbox] = useState(null); // { items: [...], index: 0, layoutType: '...' }

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  // Handle escape and arrow navigation keys for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === 'Escape') {
        setLightbox(null);
      } else if (e.key === 'ArrowRight') {
        setLightbox((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            index: (prev.index + 1) % prev.items.length
          };
        });
      } else if (e.key === 'ArrowLeft') {
        setLightbox((prev) => {
          if (!prev) return null;
          return {
            ...prev,
            index: (prev.index - 1 + prev.items.length) % prev.items.length
          };
        });
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const handleOpenLightbox = (mediaItems, startIndex, layoutType) => {
    setLightbox({
      items: mediaItems,
      index: startIndex,
      layoutType: layoutType
    });
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index - 1 + prev.items.length) % prev.items.length
      };
    });
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setLightbox((prev) => {
      if (!prev) return null;
      return {
        ...prev,
        index: (prev.index + 1) % prev.items.length
      };
    });
  };

  const content = portfolioData;

  // Active zoomed item parameters
  const activeItem = lightbox ? lightbox.items[lightbox.index] : null;

  return (
    <div className="min-h-screen w-full relative bg-cream-200 text-olive-500 transition-colors duration-300 dark:bg-olive-500 dark:text-cream-200 antialiased font-sans bg-dot-grid">
      
      {/* Sidebar Panel */}
      <Sidebar theme={theme} toggleTheme={toggleTheme} content={content} />

      {/* Main Content Area */}
      <main className="lg:ml-80 min-h-screen flex flex-col justify-between">
        
        {/* Sections Container */}
        <div className="w-full max-w-4xl mx-auto px-6 py-8 md:px-12 md:py-12 lg:py-16 space-y-12">
          
          {/* Section 1: Intro / Hero */}
          <Hero content={content} />

          {/* Section 2: Experience */}
          <Experience content={content} />

          {/* Section 3: Projects */}
          <Projects content={content} onZoom={handleOpenLightbox} />

          {/* Section 4: Leadership & Gigs */}
          <Leadership content={content} onZoom={handleOpenLightbox} />

          {/* Section 5: Certifications */}
          <Certifications content={content} />

          {/* Section 6: Education & Skills */}
          <Education content={content} />
          
        </div>

        {/* Footer */}
        <footer className="w-full max-w-4xl mx-auto px-6 pb-12 md:px-12 text-left border-t border-olive-200/10 dark:border-cream-200/5 pt-6 text-[10px] font-mono opacity-50 flex flex-col sm:flex-row sm:justify-between gap-4">
          <div>
            <span>&copy; {new Date().getFullYear()} {content.personal.name}. All rights reserved.</span>
          </div>
          <div className="flex gap-4">
            <span>Built with React + Vite + Tailwind CSS</span>
            <span>&bull;</span>
            <a href="#intro" className="hover:underline">Back to top</a>
          </div>
        </footer>
      </main>

      {/* Unified Global Lightbox Modal */}
      {lightbox && activeItem && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-olive-750/90 dark:bg-olive-950/95 backdrop-blur-md p-4 cursor-zoom-out animate-fadeIn select-none"
        >
          {/* Navigation Controls: Prev Chevron */}
          {lightbox.items.length > 1 && (
            <button
              onClick={handlePrev}
              className="fixed left-3 md:left-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-cream-300/30 bg-olive-850/80 text-cream-200 hover:bg-cream-200 hover:text-olive-750 transition-colors z-30 shadow-md cursor-pointer pointer-events-auto"
              title="Previous (ArrowLeft)"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Navigation Controls: Next Chevron */}
          {lightbox.items.length > 1 && (
            <button
              onClick={handleNext}
              className="fixed right-3 md:right-6 top-1/2 -translate-y-1/2 p-2 rounded-full border border-cream-300/30 bg-olive-850/80 text-cream-200 hover:bg-cream-200 hover:text-olive-750 transition-colors z-30 shadow-md cursor-pointer pointer-events-auto"
              title="Next (ArrowRight)"
            >
              <ChevronRight size={24} />
            </button>
          )}

          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[92vh] flex flex-col items-center justify-center p-6 bg-cream-200 dark:bg-olive-800 border border-olive-400/40 dark:border-cream-300/10 shadow-brutalist dark:shadow-brutalist-cream rounded-sm cursor-default pointer-events-auto"
          >
            {/* Close Button */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-2 right-2 px-2.5 py-1 font-mono text-[9px] border border-olive-500/40 text-olive-500 hover:bg-olive-500 hover:text-cream-200 dark:border-cream-200/20 dark:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-650 transition-colors rounded-sm font-bold animate-pulse"
            >
              [ Esc / Close ]
            </button>

            {/* Slide Index Counter Badge */}
            <div className="absolute top-2 left-2 px-2 py-0.5 rounded font-mono text-[8px] bg-olive-500/90 text-cream-200 dark:bg-cream-200 dark:text-olive-500 font-bold">
              {String(lightbox.index + 1).padStart(2, '0')} / {String(lightbox.items.length).padStart(2, '0')}
            </div>

            {/* Lightbox Content Viewer */}
            <div className="flex flex-col items-center gap-4 mt-6">
              
              {activeItem.url ? (
                <div className={`overflow-hidden rounded border border-olive-200/45 dark:border-cream-200/10 flex items-center justify-center ${
                  lightbox.layoutType === 'portrait'
                    ? 'w-64 h-[400px] md:w-72 md:h-[480px]'
                    : lightbox.layoutType === 'square'
                    ? 'w-72 h-72 sm:w-85 sm:h-85 md:w-96 md:h-96 aspect-square bg-cream-100 dark:bg-olive-850 p-3'
                    : 'max-w-full max-h-[55vh] aspect-video'
                }`}>
                  <img
                    src={activeItem.url}
                    alt={activeItem.caption}
                    className={`w-full h-full ${
                      lightbox.layoutType === 'square' ? 'object-contain' : 'object-cover'
                    }`}
                  />
                </div>
              ) : (
                // Render Mobile App Placeholder Screen inside the Lightbox
                <div className="w-64 h-[400px] md:w-72 md:h-[480px] border-4 border-olive-500 dark:border-cream-200 rounded-[20px] overflow-hidden shadow-lg bg-cream-100 dark:bg-olive-900">
                  <MobileWireframe type={activeItem.type} />
                </div>
              )}

              {/* Text Caption details */}
              <div className="text-left w-full border-t border-olive-200/30 dark:border-cream-200/10 pt-4 mt-2 max-w-xl">
                <h5 className="font-mono text-xs font-bold text-olive-500 dark:text-cream-100 uppercase tracking-wide flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                  {activeItem.caption}
                </h5>
                <p className="text-xs text-olive-500/90 dark:text-cream-200/95 font-sans mt-2 leading-relaxed">
                  {activeItem.description}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
