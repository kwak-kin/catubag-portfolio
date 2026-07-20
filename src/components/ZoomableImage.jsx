import React, { useState, useEffect, useRef } from 'react';

export default function ZoomableImage({ src, alt, className }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  
  const touchStartDist = useRef(0);
  const touchStartScale = useRef(1);
  const containerRef = useRef(null);

  // Reset zoom when image changes
  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, [src]);

  const handleMouseDown = (e) => {
    if (scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging && scale > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e) => {
    // Zoom in/out using wheel scroll
    const zoomFactor = 0.15;
    const direction = e.deltaY < 0 ? 1 : -1;
    const nextScale = Math.min(Math.max(scale + direction * zoomFactor, 1), 4);
    
    setScale(nextScale);
    if (nextScale === 1) {
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleTouchStart = (e) => {
    if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
    } else if (e.touches.length === 2) {
      setIsDragging(false);
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDist.current = dist;
      touchStartScale.current = scale;
    }
  };

  const handleTouchMove = (e) => {
    if (isDragging && e.touches.length === 1 && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y
      });
    } else if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDist.current;
      const nextScale = Math.min(Math.max(touchStartScale.current * factor, 1), 4);
      setScale(nextScale);
      if (nextScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  const handleDoubleTap = () => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  const resetZoom = (e) => {
    e.stopPropagation();
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden w-full h-full flex items-center justify-center select-none bg-cream-100/50 dark:bg-olive-900/30"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onDoubleClick={handleDoubleTap}
    >
      <img
        src={src}
        alt={alt}
        className={`${className} transition-transform duration-75 ease-out`}
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          cursor: scale > 1 ? 'grab' : 'zoom-in',
          touchAction: 'none'
        }}
        draggable="false"
      />
      
      {/* Zoom info/reset badge */}
      {scale > 1 && (
        <button 
          onClick={resetZoom}
          className="absolute bottom-3 right-3 bg-olive-850/80 text-cream-200 px-2.5 py-1 text-[9px] font-mono rounded border border-cream-200/20 hover:bg-olive-900 transition-colors z-20"
        >
          Reset Zoom ({scale.toFixed(1)}x)
        </button>
      )}
    </div>
  );
}
