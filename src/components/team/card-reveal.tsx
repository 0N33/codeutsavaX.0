'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import styles from './TeamPage.module.css';

type CardRevealProps = {
  children: ReactNode;
  delayIndex?: number;
};

const revealCallbacks = new Map<Element, () => void>();
let revealObserver: IntersectionObserver | null = null;

function getRevealObserver(): IntersectionObserver {
  if (!revealObserver) {
    revealObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          revealCallbacks.get(entry.target)?.();
          revealCallbacks.delete(entry.target);
          revealObserver?.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    );
  }

  return revealObserver;
}

export function CardReveal({ children, delayIndex = 0 }: CardRevealProps) {
  const itemRef = useRef<HTMLLIElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const observer = getRevealObserver();
    revealCallbacks.set(item, () => setIsVisible(true));
    observer.observe(item);

    return () => {
      revealCallbacks.delete(item);
      observer.unobserve(item);
    };
  }, []);

  return (
    <li
      ref={itemRef}
      className={`${styles.cardReveal} ${isVisible ? styles.cardRevealVisible : ''}`}
      style={{ '--card-reveal-delay': `${Math.min(delayIndex, 4) * 55}ms` } as CSSProperties}
    >
      {children}
    </li>
  );
}
