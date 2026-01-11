import { ReactLenis } from "@studio-freight/react-lenis";

function SmoothScrolling({ children }) {
  return (
    <ReactLenis 
  root 
  options={{ 
    lerp: 0.08,  // Slightly lower for better performance
    smoothTouch: false,  // Disable on touch devices for better performance
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  }}
>
      {children}
    </ReactLenis>
  );
}

export default SmoothScrolling;
