import { useState, useEffect } from 'react';

export default function useSectionObserver(sectionId: string, threshold : number = 0, rootMargin : string = '-100px 0px 0px 0px') {
  const [isLeaving, setIsLeaving] = useState(false);

  useEffect(() => {
    const section = document.getElementById(sectionId);
    
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // isLeaving becomes true when section is no longer intersecting
        // (navbar has left the section)
        setIsLeaving(!entry.isIntersecting);
      },
      { threshold, rootMargin }
    );

    observer.observe(section);

    return () => {
      observer.unobserve(section);
    };
  }, [sectionId, threshold, rootMargin]);

  return isLeaving;
}