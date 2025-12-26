import { useEffect, useRef } from 'react';

const SnowEffect = ({ maxSnow = 200, maxSnowSize = 7, maxSnowSpeed = 1 }) => {
  const containerRef = useRef(null);
  const snowflakesRef = useRef([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create snowflakes
    const createSnowflakes = () => {
      snowflakesRef.current = [];
      
      for (let i = 0; i < maxSnow; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = `snowflake-${i}`;
        
        const width = Math.floor(Math.random() * maxSnowSize);
        const height = width;
        const blur = Math.floor(Math.random() * 5 + 2);
        const left = Math.floor(Math.random() * window.innerWidth);
        const top = -window.innerHeight + Math.floor(Math.random() * window.innerHeight);
        
        snowflake.style.position = 'absolute';
        snowflake.style.width = `${width}px`;
        snowflake.style.height = `${height}px`;
        snowflake.style.borderRadius = '50%';
        snowflake.style.backgroundColor = 'white';
        snowflake.style.filter = `blur(${blur}px)`;
        snowflake.style.left = `${left}px`;
        snowflake.style.top = `${top}px`;
        snowflake.style.pointerEvents = 'none';
        
        container.appendChild(snowflake);
        
        snowflakesRef.current.push({
          element: snowflake,
          speed: Math.random() * maxSnowSpeed + 0.5,
          horizontalSpeed: (Math.random() - 0.5) * 0.5,
          wobble: Math.random() * 2 * Math.PI,
          wobbleSpeed: Math.random() * 0.02 + 0.01
        });
      }
    };

    createSnowflakes();

    // Animation loop
    let animationFrameId;
    const animate = () => {
      snowflakesRef.current.forEach((snowflake) => {
        const { element, speed, horizontalSpeed, wobble, wobbleSpeed } = snowflake;
        
        const currentTop = parseFloat(element.style.top);
        const currentLeft = parseFloat(element.style.left);
        
        // Update vertical position
        let newTop = currentTop + speed;
        
        // Update horizontal position with wobble
        snowflake.wobble += wobbleSpeed;
        const wobbleOffset = Math.sin(snowflake.wobble) * 2;
        let newLeft = currentLeft + horizontalSpeed + wobbleOffset;
        
        // Reset position if snowflake goes off screen
        if (newTop > window.innerHeight) {
          newTop = -20;
          newLeft = Math.floor(Math.random() * window.innerWidth);
          
          // Randomize properties
          const width = Math.floor(Math.random() * maxSnowSize);
          const blur = Math.floor(Math.random() * 5 + 2);
          element.style.width = `${width}px`;
          element.style.height = `${width}px`;
          element.style.filter = `blur(${blur}px)`;
        }
        
        // Keep snowflake within horizontal bounds
        if (newLeft < -20) newLeft = window.innerWidth;
        if (newLeft > window.innerWidth + 20) newLeft = -20;
        
        element.style.top = `${newTop}px`;
        element.style.left = `${newLeft}px`;
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      snowflakesRef.current.forEach(({ element }) => {
        if (element.parentNode) {
          element.parentNode.removeChild(element);
        }
      });
      snowflakesRef.current = [];
    };
  }, [maxSnow, maxSnowSize, maxSnowSpeed]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        overflow: 'hidden'
      }}
    />
  );
};

export default SnowEffect;
