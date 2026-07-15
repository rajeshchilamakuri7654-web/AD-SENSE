import { useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BlogArticleWrapperProps {
  children: React.ReactNode;
}

/**
 * Wraps blog article content with the scroll-reveal IntersectionObserver.
 * The `<article>` element is the container; direct children (h1, h2, p, div, etc.)
 * receive staggered fade-up animation as they enter the viewport.
 *
 * SEO safety: `.reveal` class (opacity:0) is applied by JS after hydration only —
 * the prerendered HTML contains no `.reveal` class so crawlers read full content.
 */
export default function BlogArticleWrapper({ children }: BlogArticleWrapperProps) {
  const ref = useRef<HTMLElement>(null);
  useScrollReveal(ref);

  return (
    <article className="blog-article" ref={ref}>
      {children}
    </article>
  );
}
