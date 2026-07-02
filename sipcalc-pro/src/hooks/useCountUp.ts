import { useEffect, useRef, useState } from 'react';

export function useCountUp(target: number, duration: number = 700): number {
  // Initialise to `target` so the correct value is shown on first render
  // (avoids a flash of "0" after SSR hydration).
  const [current, setCurrent] = useState(target);
  const startRef = useRef(target);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const start = startRef.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();

    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - progress, 3);
      setCurrent(Math.round(start + (end - start) * eased));
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        startRef.current = end;
      }
    };

    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return current;
}
