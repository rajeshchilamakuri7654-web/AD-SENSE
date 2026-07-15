import { useEffect } from 'react';

/**
 * Attaches IntersectionObserver to elements matching `selector` inside `containerRef`.
 * When they enter the viewport they receive `is-visible` class (triggering CSS animation).
 * The `.reveal` base class (which sets opacity:0) is applied from CSS only — the SSR
 * prerendered HTML does NOT have the class, so content is always readable without JS.
 * The hook uses JS to add `.reveal` first (so it starts invisible on hydration), then
 * observer reveals them in as they scroll into view.
 */
export function useScrollReveal(containerRef: React.RefObject<Element | null>, selector: string = '.blog-article > *') {
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Respect prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(container.querySelectorAll<HTMLElement>(selector));
    // Stagger: we give each element a sequential delay
    elements.forEach((el, i) => {
      el.classList.add('reveal');
      el.style.animationDelay = `${Math.min(i * 35, 300)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [containerRef, selector]);
}
