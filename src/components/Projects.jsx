import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Terminal, Play, BookOpen, Layers, Award, ChevronLeft, ChevronRight, Smartphone, Globe, Eye, Zap, Presentation } from 'lucide-react';

const cleanLink = (url) => {
  if (!url) return '';
  const match = url.match(/\[.*?\]\((.*?)\)/);
  return match ? match[1] : url;
};

const getYoutubeEmbedUrl = (url) => {
  if (!url) return '';
  const cleaned = cleanLink(url);
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
  const match = cleaned.match(regExp);
  if (match && match[2].length === 11) {
    return `https://www.youtube.com/embed/${match[2]}`;
  }
  return cleaned;
};

// High-fidelity Mobile app wireframe placeholders
function MobileWireframe({ type }) {
  if (type === 'consumption') {
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 bg-cream-100 dark:bg-olive-900 text-olive-500 dark:text-cream-200 font-mono text-[9px] select-none h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center border-b border-olive-200/30 pb-1.5 opacity-60">
          <span>12:30 PM</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4.5 h-2.5 border border-olive-500 dark:border-cream-200 p-0.5 flex"><div className="w-2.5 h-full bg-olive-500 dark:bg-cream-200"></div></div>
          </div>
        </div>
        
        {/* App Title */}
        <div className="text-center py-1 border-b border-dashed border-olive-200/20">
          <span className="font-bold text-[10px]">ENERVISIO MOBILE</span>
        </div>

        {/* Live Power Reading */}
        <div className="text-center py-4 space-y-1">
          <div className="text-[8px] opacity-60">LIVE CONSUMPTION</div>
          <div className="text-2xl font-bold tracking-tight text-olive-500 dark:text-cream-200 flex items-center justify-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            145.8<span className="text-xs font-normal">W</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-2">
          <div className="border border-olive-300/40 p-2 bg-cream-200/30 rounded-sm">
            <div className="opacity-50 text-[7px]">TODAY (PHP)</div>
            <div className="text-[11px] font-bold mt-0.5 text-emerald-600 dark:text-emerald-400">₱14.80</div>
          </div>
          <div className="border border-olive-300/40 p-2 bg-cream-200/30 rounded-sm">
            <div className="opacity-50 text-[7px]">TODAY (kWh)</div>
            <div className="text-[11px] font-bold mt-0.5">1.28 kWh</div>
          </div>
        </div>

        {/* mini chart */}
        <div className="border border-olive-300/40 p-2 bg-cream-200/30 rounded-sm flex-1 mt-2 flex flex-col justify-between">
          <div className="opacity-50 text-[7px]">HOURLY TRACKING</div>
          <div className="flex items-end justify-between h-12 pt-2 gap-1 px-1">
            <div className="w-3 bg-olive-500/20 h-4"></div>
            <div className="w-3 bg-olive-500/30 h-6"></div>
            <div className="w-3 bg-olive-500/40 h-5"></div>
            <div className="w-3 bg-olive-500/60 h-8"></div>
            <div className="w-3 bg-olive-500/80 h-11"></div>
            <div className="w-3 bg-olive-500 h-9"></div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="w-16 h-1 bg-olive-500/40 dark:bg-cream-200/30 rounded-full mx-auto mt-3"></div>
      </div>
    );
  }

  if (type === 'control') {
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 bg-cream-100 dark:bg-olive-900 text-olive-500 dark:text-cream-200 font-mono text-[9px] select-none h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center border-b border-olive-200/30 pb-1.5 opacity-60">
          <span>12:30 PM</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4.5 h-2.5 border border-olive-500 dark:border-cream-200 p-0.5 flex"><div className="w-2.5 h-full bg-olive-500 dark:bg-cream-200"></div></div>
          </div>
        </div>

        <div className="text-center py-1 border-b border-dashed border-olive-200/20">
          <span className="font-bold text-[10px]">SMART CONTROL</span>
        </div>

        {/* Device Switcher list */}
        <div className="flex-1 py-3 space-y-2 overflow-y-auto">
          {/* Socket 1 */}
          <div className="border border-olive-300/40 p-2 bg-cream-200/50 dark:bg-olive-850/40 rounded-sm flex justify-between items-center">
            <div>
              <div className="font-bold text-[9px]">SOCKET_01</div>
              <div className="text-[7px] opacity-60">Air Conditioner</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-emerald-600 font-bold">ON</span>
              <div className="w-7 h-4 bg-emerald-500 dark:bg-emerald-600 rounded-full p-0.5 flex justify-end cursor-pointer"><div className="w-3 h-3 bg-cream-200 rounded-full"></div></div>
            </div>
          </div>
          {/* Socket 2 */}
          <div className="border border-olive-300/40 p-2 bg-cream-200/20 dark:bg-olive-850/20 rounded-sm flex justify-between items-center opacity-70">
            <div>
              <div className="font-bold text-[9px]">SOCKET_02</div>
              <div className="text-[7px] opacity-60">Living Room Lamp</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] opacity-60">OFF</span>
              <div className="w-7 h-4 bg-olive-300 dark:bg-olive-700 rounded-full p-0.5 flex justify-start cursor-pointer"><div className="w-3 h-3 bg-cream-200 rounded-full"></div></div>
            </div>
          </div>
          {/* Socket 3 */}
          <div className="border border-olive-300/40 p-2 bg-cream-200/50 dark:bg-olive-850/40 rounded-sm flex justify-between items-center">
            <div>
              <div className="font-bold text-[9px]">SOCKET_03</div>
              <div className="text-[7px] opacity-60">Water Dispenser</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[7px] text-emerald-600 font-bold">ON</span>
              <div className="w-7 h-4 bg-emerald-500 dark:bg-emerald-600 rounded-full p-0.5 flex justify-end cursor-pointer"><div className="w-3 h-3 bg-cream-200 rounded-full"></div></div>
            </div>
          </div>
        </div>

        {/* Add Device */}
        <div className="border border-dashed border-olive-300/50 p-2 text-center rounded-sm cursor-pointer hover:bg-olive-500/5">
          <span>+ PAIR NEW SMART PLUG</span>
        </div>

        {/* Home Indicator */}
        <div className="w-16 h-1 bg-olive-500/40 dark:bg-cream-200/30 rounded-full mx-auto mt-3"></div>
      </div>
    );
  }

  if (type === 'ai') {
    return (
      <div className="w-full h-full flex flex-col justify-between p-4 bg-cream-100 dark:bg-olive-900 text-olive-500 dark:text-cream-200 font-mono text-[9px] select-none h-full">
        {/* Status Bar */}
        <div className="flex justify-between items-center border-b border-olive-200/30 pb-1.5 opacity-60">
          <span>12:30 PM</span>
          <div className="flex items-center gap-1">
            <span>5G</span>
            <div className="w-4.5 h-2.5 border border-olive-500 dark:border-cream-200/10 p-0.5 flex"><div className="w-2.5 h-full bg-olive-500 dark:bg-cream-200"></div></div>
          </div>
        </div>

        <div className="text-center py-1 border-b border-dashed border-olive-200/20 flex items-center justify-center gap-1">
          <Zap size={10} className="text-amber-500" />
          <span className="font-bold text-[10px]">ENERVISIO AI</span>
        </div>

        {/* Chat Thread */}
        <div className="flex-1 py-3 space-y-3 overflow-y-auto flex flex-col justify-end">
          {/* User Message */}
          <div className="self-end max-w-[85%] bg-olive-500 text-cream-100 dark:bg-cream-200 dark:text-olive-650 p-2 rounded-sm text-[8px] leading-relaxed">
            Why is my electricity bill higher this week?
          </div>
          {/* AI Reply */}
          <div className="self-start max-w-[85%] border border-olive-300/40 bg-cream-200 dark:bg-olive-850 p-2 rounded-sm text-[8px] leading-relaxed">
            I noticed standby spikes on <span className="font-bold underline">Socket #3</span> (TV Standby) between 1 AM and 6 AM, drawing 40W. Setting a sleep timer could save you roughly <span className="font-bold text-emerald-600">₱75.00</span> this billing cycle.
          </div>
        </div>

        {/* Input box */}
        <div className="border border-olive-300/40 p-1.5 rounded-sm bg-cream-200/50 flex justify-between items-center text-[7px]">
          <span className="opacity-50">Ask Coach...</span>
          <div className="w-3.5 h-3.5 bg-olive-500 dark:bg-cream-200 text-cream-200 dark:text-olive-600 flex items-center justify-center rounded-sm">&gt;</div>
        </div>

        {/* Home Indicator */}
        <div className="w-16 h-1 bg-olive-500/40 dark:bg-cream-200/30 rounded-full mx-auto mt-3"></div>
      </div>
    );
  }

  return null;
}

function ProjectCard({ project, idx, onZoom }) {
  const [activeTab, setActiveTab] = useState(() => {
    if (project.id === 'enervisio-ai') return 'web';
    if (project.id === 'tatak-pancho') return 'video';
    return '';
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [imgErrors, setImgErrors] = useState({});

  // Reset slide index when switching tabs
  useEffect(() => {
    setActiveSlide(0);
  }, [activeTab]);

  const handleImgError = (imgIdx) => {
    setImgErrors((prev) => ({
      ...prev,
      [`${activeTab}-${imgIdx}`]: true,
    }));
  };

  const getMediaList = () => {
    if (activeTab === 'web') return project.webMedia || [];
    if (activeTab === 'mobile') return project.mobileMedia || [];
    if (activeTab === 'amy') return project.amyMedia || [];
    if (activeTab === 'ircite') return project.irciteMedia || [];
    return [];
  };

  const currentMedia = getMediaList();

  const nextSlide = (e) => {
    e.stopPropagation();
    if (currentMedia.length === 0) return;
    setActiveSlide((prev) => (prev + 1) % currentMedia.length);
  };

  const prevSlide = (e) => {
    e.stopPropagation();
    if (currentMedia.length === 0) return;
    setActiveSlide((prev) => (prev - 1 + currentMedia.length) % currentMedia.length);
  };

  // Determine current active section description
  const getTabDescription = () => {
    if (activeTab === 'web') return project.webDescription;
    if (activeTab === 'mobile') return project.mobileDescription;
    if (activeTab === 'amy') return project.amyDescription;
    if (activeTab === 'ircite') return project.irciteDescription;
    return project.description;
  };

  // Layout mode logic
  const getLayoutType = () => {
    if (activeTab === 'mobile') return 'portrait';
    if (activeTab === 'amy' || activeTab === 'ircite') return 'square';
    return 'landscape'; // 'web' uses landscape
  };

  const layoutType = getLayoutType();

  return (
    <div
      className="border border-olive-200/40 dark:border-cream-200/10 rounded p-6 lg:p-8 bg-cream-100/45 dark:bg-olive-800/10 hover:border-olive-500/80 dark:hover:hover:border-cream-200/60 hover:shadow-brutalist dark:hover:shadow-brutalist-cream transition-all duration-300 text-left group flex flex-col justify-between"
    >
      <div>
        {/* Category and Index */}
        <div className="flex justify-between items-baseline mb-2">
          <span className="font-mono text-[10px] text-olive-500/60 dark:text-cream-200/50 uppercase tracking-widest flex items-center gap-1">
            <Layers size={10} />
            {project.tagline}
          </span>
          <span className="font-mono text-[9px] text-olive-500/40 dark:text-cream-200/30">
            SYS.PROJ_0{idx + 1}
          </span>
        </div>

        {/* Title */}
        <h4 className="text-xl font-bold font-sans text-olive-500 dark:text-cream-200 flex items-center gap-2 leading-snug">
          <Terminal size={16} className="opacity-70 group-hover:translate-x-0.5 transition-transform" />
          {project.title}
        </h4>

        {/* Roles Badges */}
        {project.roles && (
          <div className="flex flex-wrap gap-1 mt-2.5">
            {project.roles.map((role, rIdx) => (
              <span
                key={rIdx}
                className="text-[9px] font-mono px-1.5 py-0.5 border border-dashed border-olive-400/45 dark:border-cream-300/35 text-olive-500/85 dark:text-cream-200/90 rounded-sm"
              >
                {role}
              </span>
            ))}
          </div>
        )}

        {/* Description */}
        <p className="text-sm text-olive-500/90 dark:text-cream-100/95 font-sans mt-4 leading-relaxed">
          {project.description}
        </p>

        {/* Project Achievements / Awards */}
        {project.achievements && project.achievements.map((ach, aIdx) => (
          <div key={aIdx} className="mt-3 p-3 border border-olive-350/40 dark:border-cream-300/20 bg-cream-200/30 dark:bg-olive-850/20 rounded flex items-start gap-2 text-xs font-sans">
            <Award size={14} className="text-amber-600 dark:text-amber-400 mt-0.5 shrink-0" />
            <span className="text-olive-500/90 dark:text-cream-100/95">{ach}</span>
          </div>
        ))}

        {/* Media Rendering Block */}
        <div className="mt-6 space-y-4">
          
          {/* Tab Selection Header for Enervisio (Web/Mobile/AMY) */}
          {project.id === 'enervisio-ai' && (
            <div className="flex flex-wrap border-b border-olive-200/30 dark:border-cream-200/10 font-mono text-[10px]">
              <button
                onClick={() => setActiveTab('web')}
                className={`py-2 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
                  activeTab === 'web'
                    ? 'border-olive-500 text-olive-500 font-bold dark:border-cream-200 dark:text-cream-200'
                    : 'border-transparent text-olive-500/60 dark:text-cream-200/40 hover:text-olive-500 dark:hover:text-cream-200'
                }`}
              >
                <Globe size={11} />
                Web Dashboard
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`py-2 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
                  activeTab === 'mobile'
                    ? 'border-olive-500 text-olive-500 font-bold dark:border-cream-200 dark:text-cream-200'
                    : 'border-transparent text-olive-500/60 dark:text-cream-200/40 hover:text-olive-500 dark:hover:text-cream-200'
                }`}
              >
                <Smartphone size={11} />
                Mobile App
              </button>
              <button
                onClick={() => setActiveTab('amy')}
                className={`py-2 px-3 flex items-center gap-1.5 border-b-2 transition-all ${
                  activeTab === 'amy'
                    ? 'border-olive-500 text-olive-500 font-bold dark:border-cream-200 dark:text-cream-200'
                    : 'border-transparent text-olive-500/60 dark:text-cream-200/40 hover:text-olive-500 dark:hover:text-cream-200'
                }`}
              >
                <Award size={11} />
                AMY Awards 2025
              </button>
            </div>
          )}

          {/* Tab Selection Header for Tatak Pancho (Video/IRCITE) */}
          {project.id === 'tatak-pancho' && (
            <div className="flex border-b border-olive-200/30 dark:border-cream-200/10 font-mono text-[10px]">
              <button
                onClick={() => setActiveTab('video')}
                className={`py-2 px-4 flex items-center gap-1.5 border-b-2 transition-all ${
                  activeTab === 'video'
                    ? 'border-olive-500 text-olive-500 font-bold dark:border-cream-200 dark:text-cream-200'
                    : 'border-transparent text-olive-500/60 dark:text-cream-200/40 hover:text-olive-500 dark:hover:text-cream-200'
                }`}
              >
                <Play size={11} />
                Video Demo
              </button>
              <button
                onClick={() => setActiveTab('ircite')}
                className={`py-2 px-4 flex items-center gap-1.5 border-b-2 transition-all ${
                  activeTab === 'ircite'
                    ? 'border-olive-500 text-olive-500 font-bold dark:border-cream-200 dark:text-cream-200'
                    : 'border-transparent text-olive-500/60 dark:text-cream-200/40 hover:text-olive-500 dark:hover:text-cream-200'
                }`}
              >
                <Presentation size={11} />
                IRCITE 2025 Photos
              </button>
            </div>
          )}

          {/* Platform Specific Description */}
          {getTabDescription() && (
            <div className="text-[11px] leading-relaxed text-olive-550 dark:text-cream-200/85 font-sans border-l-2 border-olive-350/40 pl-3">
              {getTabDescription()}
            </div>
          )}

          {/* Media Slider (When not in video demo tab) */}
          {activeTab !== 'video' && currentMedia.length > 0 && (
            <div className="border border-olive-200/45 dark:border-cream-200/15 rounded overflow-hidden bg-cream-200/20 dark:bg-olive-900/15 p-3 space-y-4">
              
              {/* Display Viewport */}
              <div className="flex justify-center items-center py-2 bg-cream-200/40 dark:bg-olive-900/30 border border-olive-200/20 dark:border-cream-200/5 rounded">
                
                {layoutType === 'landscape' && (
                  // Landscape aspect-video (strictly uniform)
                  <div
                    onClick={() => onZoom(currentMedia, activeSlide, 'landscape')}
                    className="relative aspect-video w-full max-w-xl overflow-hidden bg-cream-200/80 dark:bg-olive-900/40 border border-olive-300/35 dark:border-cream-300/15 rounded-sm cursor-zoom-in group/slide shadow-sm"
                  >
                    {!imgErrors[activeSlide] ? (
                      <img
                        src={currentMedia[activeSlide].url}
                        alt={`${project.title} Snap ${activeSlide + 1}`}
                        onError={() => handleImgError(activeSlide)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover/slide:scale-101.5"
                      />
                    ) : (
                      <div className="p-4 text-center font-mono text-[9px] text-olive-500/60 dark:text-cream-200/45 flex flex-col justify-center h-full">
                        <div>SNAP_0{activeSlide + 1}</div>
                        <div className="opacity-80 mt-1">{currentMedia[activeSlide].caption}</div>
                      </div>
                    )}
                    
                    <div className="absolute top-2 left-2 p-1 rounded bg-olive-800/80 text-cream-200 opacity-0 group-hover/slide:opacity-100 transition-opacity z-20 pointer-events-none">
                      <Eye size={12} />
                    </div>

                    {/* Controls */}
                    <div className="absolute inset-y-0 top-1/2 -translate-y-1/2 flex justify-between px-2 w-full z-20 pointer-events-none">
                      <button
                        onClick={prevSlide}
                        className="p-1 rounded border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/80 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm"
                        title="Previous"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-1 rounded border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/80 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm"
                        title="Next"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded font-mono text-[8px] bg-olive-500/90 text-cream-200 dark:bg-cream-200 dark:text-olive-500 font-bold z-10">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(currentMedia.length).padStart(2, '0')}
                    </div>
                  </div>
                )}

                {layoutType === 'portrait' && (
                  // Portrait mobile viewport
                  <div
                    onClick={() => onZoom(currentMedia, activeSlide, 'portrait')}
                    className="relative w-56 h-[340px] md:w-60 md:h-[360px] border-4 border-olive-500 dark:border-cream-200 bg-cream-100 dark:bg-olive-900 rounded-[24px] overflow-hidden shadow-lg cursor-zoom-in group/slide flex flex-col justify-between"
                  >
                    {/* Ear Speaker Notch */}
                    <div className="absolute top-1 left-1/2 -translate-x-1/2 w-16 h-3 bg-olive-500 dark:bg-cream-200 rounded-b-md z-20 flex justify-center items-end pb-0.5">
                      <div className="w-6 h-0.5 bg-cream-200 dark:bg-olive-500 rounded-full"></div>
                    </div>

                    {currentMedia[activeSlide].url ? (
                      <img
                        src={currentMedia[activeSlide].url}
                        alt={`${project.title} Mobile ${activeSlide + 1}`}
                        className="w-full h-full object-cover pt-4"
                      />
                    ) : (
                      <div className="w-full h-full pt-4">
                        <MobileWireframe type={currentMedia[activeSlide].type} />
                      </div>
                    )}
                    
                    <div className="absolute top-5 left-3 p-1 rounded bg-olive-800/80 text-cream-200 opacity-0 group-hover/slide:opacity-100 transition-opacity z-20 pointer-events-none">
                      <Eye size={10} />
                    </div>

                    {/* Controls */}
                    <div className="absolute inset-y-0 top-1/2 -translate-y-1/2 flex justify-between px-2 w-full z-20 pointer-events-none">
                      <button
                        onClick={prevSlide}
                        className="p-1 rounded-full border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/80 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm"
                        title="Previous"
                      >
                        <ChevronLeft size={14} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-1 rounded-full border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/80 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm"
                        title="Next"
                      >
                        <ChevronRight size={14} />
                      </button>
                    </div>

                    <div className="absolute bottom-4 right-4 px-1.5 py-0.5 rounded font-mono text-[7px] bg-olive-500/95 text-cream-200 dark:bg-cream-200 dark:text-olive-500 font-bold z-10">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(currentMedia.length).padStart(2, '0')}
                    </div>
                  </div>
                )}

                {layoutType === 'square' && (
                  // Square viewport for social media post snaps - object-contain ensures NO text is cut off
                  <div
                    onClick={() => onZoom(currentMedia, activeSlide, 'square')}
                    className="relative aspect-square w-64 md:w-72 overflow-hidden bg-cream-200/95 dark:bg-olive-850 border border-olive-300/35 dark:border-cream-300/15 rounded-sm cursor-zoom-in group/slide shadow-md flex items-center justify-center p-2"
                  >
                    {!imgErrors[activeSlide] ? (
                      <img
                        src={currentMedia[activeSlide].url}
                        alt={`${project.title} Social Snap ${activeSlide + 1}`}
                        onError={() => handleImgError(activeSlide)}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover/slide:scale-101"
                      />
                    ) : (
                      <div className="p-4 text-center font-mono text-[9px] text-olive-500/60 dark:text-cream-200/45 flex flex-col justify-center h-full">
                        <div>SNAP_0{activeSlide + 1}</div>
                        <div className="opacity-80 mt-1">{currentMedia[activeSlide].caption}</div>
                      </div>
                    )}
                    
                    <div className="absolute top-2 left-2 p-1 rounded bg-olive-800/80 text-cream-200 opacity-0 group-hover/slide:opacity-100 transition-opacity z-20 pointer-events-none">
                      <Eye size={12} />
                    </div>

                    {/* Controls */}
                    <div className="absolute inset-y-0 top-1/2 -translate-y-1/2 flex justify-between px-2 w-full z-20 pointer-events-none">
                      <button
                        onClick={prevSlide}
                        className="p-1 rounded border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/85 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm cursor-pointer"
                        title="Previous"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={nextSlide}
                        className="p-1 rounded border border-olive-500/30 dark:border-cream-200/10 bg-cream-200/85 dark:bg-olive-750/90 text-olive-500 dark:text-cream-200 hover:bg-olive-500 hover:text-cream-200 dark:hover:bg-cream-200 dark:hover:text-olive-550 transition-colors pointer-events-auto shadow-sm cursor-pointer"
                        title="Next"
                      >
                        <ChevronRight size={16} />
                      </button>
                    </div>

                    <div className="absolute bottom-2 right-2 px-2 py-0.5 rounded font-mono text-[8px] bg-olive-500/90 text-cream-200 dark:bg-cream-200 dark:text-olive-500 font-bold z-10">
                      {String(activeSlide + 1).padStart(2, '0')} / {String(currentMedia.length).padStart(2, '0')}
                    </div>
                  </div>
                )}

              </div>

              {/* Caption & Explanation */}
              <div className="p-3 border border-olive-200/35 dark:border-cream-200/10 bg-cream-100/60 dark:bg-olive-850/40 rounded text-left">
                <div className="font-mono text-[10px] font-bold text-olive-500 dark:text-cream-100 uppercase tracking-wider mb-1 flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive-500 dark:bg-cream-200"></span>
                  {currentMedia[activeSlide].caption}
                </div>
                <p className="text-xs text-olive-500/90 dark:text-cream-200/95 font-sans leading-relaxed">
                  {currentMedia[activeSlide].description}
                </p>
              </div>

              {/* Thumbnails strip */}
              <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-thin scrollbar-thumb-olive-300 dark:scrollbar-thumb-cream-300">
                {currentMedia.map((slide, sIdx) => (
                  <button
                    key={sIdx}
                    onClick={() => setActiveSlide(sIdx)}
                    className={`relative rounded-sm overflow-hidden bg-cream-200 dark:bg-olive-900/30 flex-shrink-0 transition-all ${
                      layoutType === 'portrait' ? 'w-8 border-2 aspect-[9/16]' : 'w-12 border aspect-square'
                    } ${
                      activeSlide === sIdx
                        ? 'border-olive-500 dark:border-cream-200 ring-1 ring-olive-500 dark:ring-cream-200'
                        : 'border-olive-200/40 dark:border-cream-200/10 opacity-65 hover:opacity-100'
                    }`}
                  >
                    {slide.url ? (
                      <img
                        src={slide.url}
                        alt={`Thumbnail ${sIdx + 1}`}
                        className="w-full h-full object-contain p-0.5 bg-cream-200/70 dark:bg-olive-800"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-olive-500/10 dark:bg-cream-200/10 text-[6px] font-mono text-olive-500/60 dark:text-cream-200/60">
                        MOB_0{sIdx + 1}
                      </div>
                    )}
                  </button>
                ))}
              </div>

            </div>
          )}

          {/* Embedded YouTube video player (Tatak Pancho) */}
          {activeTab === 'video' && project.videoUrl && (
            <div className="relative aspect-video border border-olive-200/40 dark:border-cream-200/10 overflow-hidden bg-cream-200/60 dark:bg-olive-900/40 rounded">
              <iframe
                className="w-full h-full z-10 relative"
                src={getYoutubeEmbedUrl(project.videoUrl)}
                title={project.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          )}

          {/* Publication Info */}
          {project.mediaType === 'publication' && project.doi && (
            <div className="border border-dashed border-olive-350/40 dark:border-cream-300/20 bg-cream-200/25 dark:bg-olive-900/10 p-4 rounded font-mono text-xs space-y-2">
              <div className="flex justify-between items-center text-[10px] text-olive-500/50 dark:text-cream-200/40">
                <span className="flex items-center gap-1"><BookOpen size={12} /> ACADEMIC PUBLICATION</span>
                <span>DOI RESOLVER</span>
              </div>
              <div className="text-olive-500/90 dark:text-cream-100/95 py-1 select-all font-semibold">
                doi.org/{project.doi}
              </div>
              <div className="text-[9px] text-olive-500/50 dark:text-cream-200/45">
                Indexed under International Journal of Advanced Multidisciplinary Research (IJAMR).
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Project Footer & Stack */}
      <div className="mt-8 pt-4 border-t border-olive-200/10 dark:border-cream-200/5">
        
        {/* Stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.stack && project.stack.map((tech, tIdx) => (
            <span
              key={tIdx}
              className="font-mono text-[9px] px-2 py-0.5 border border-olive-200/30 dark:border-cream-200/10 rounded bg-cream-200/40 dark:bg-olive-700/20 text-olive-500/90 dark:text-cream-100/90"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action Links */}
        <div className="flex justify-between items-center text-xs font-mono">
          <div className="flex space-x-3">
            {project.links && project.links.map((link, lIdx) => (
              <a
                key={lIdx}
                href={cleanLink(link.url)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-olive-500 dark:hover:text-cream-200 opacity-70 hover:opacity-100 transition-all font-bold group"
              >
                <span>{link.label.toLowerCase()}</span>
                <ExternalLink size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            ))}
          </div>
          <span className="text-[9px] text-olive-500/40 dark:text-cream-200/30">
            STATUS: LIVE_OK
          </span>
        </div>

      </div>
    </div>
  );
}

export default function Projects({ content, onZoom }) {
  const { projects } = content;

  return (
    <section id="projects" className="py-12 border-b border-olive-200/20 dark:border-cream-200/10 scroll-mt-8">
      
      {/* Section Header */}
      <div className="flex justify-between items-baseline mb-8 text-left">
        <h3 className="font-mono text-xs text-olive-500/45 dark:text-cream-200/35 uppercase tracking-widest">
          03 // Projects
        </h3>
        <span className="font-mono text-[10px] text-olive-500/40 dark:text-cream-200/30">
          PORTFOLIO.BIN
        </span>
      </div>

      {/* Grid of Projects */}
      <div className="grid grid-cols-1 gap-8">
        {projects && projects.map((project, idx) => (
          <ProjectCard key={project.id || idx} project={project} idx={idx} onZoom={onZoom} />
        ))}
      </div>
    </section>
  );
}
export { MobileWireframe };
