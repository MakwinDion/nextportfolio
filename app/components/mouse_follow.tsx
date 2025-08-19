'use client';

import { useEffect, useState, useRef } from 'react';

const MouseFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);
  const [clicked, setClicked] = useState(false);
  const circleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleClick = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 500); // 0.5s glow
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
    };
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile && circleRef.current) {
      circleRef.current.style.left = `${mousePosition.x - 15}px`;
      circleRef.current.style.top = `${mousePosition.y - 15}px`;
    }
  }, [mousePosition, isMobile]);

  if (isMobile) return null;

  return (
    <>
      <div
        ref={circleRef}
        className={`mouse-circle ${clicked ? 'clicked' : ''}`}
        style={{
          position: 'fixed',
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          border: '2px solid white',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'top 0.1s ease, left 0.1s ease, background 0.2s, box-shadow 0.3s ease',
        }}
      ></div>

      <style jsx>{`
        .clicked {
          background: white;
          box-shadow: 0 0 20px 8px white;
        }
      `}</style>
    </>
  );
};

export default MouseFollower;
