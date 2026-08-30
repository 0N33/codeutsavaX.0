'use client';

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from 'react';
import Image from 'next/image';

export type PixelRevealProps = {
  imageSrc?: string;
  alt?: string;
  gridSize?: number;
  edgeHeight?: number;
  transitionColor?: string;
  transition?: { type?: string; duration?: number; ease?: string };
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
  imageClassName?: string;
  sizes?: string;
  style?: CSSProperties;
  onRevealComplete?: () => void;
  isStatic?: boolean;
};

function getDriveId(url: string): string | null {
  try {
    const trimmed = url.trim();
    if (!trimmed) return null;
    const match =
      trimmed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) ||
      trimmed.match(/\/d\/([a-zA-Z0-9_-]+)/) ||
      trimmed.match(/[?&]id=([a-zA-Z0-9_-]+)/) ||
      trimmed.match(/id=([a-zA-Z0-9_-]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

function buildSourceCandidates(originalUrl: string): string[] {
  if (!originalUrl) return [];
  const driveId = getDriveId(originalUrl);
  if (!driveId) return [originalUrl];
  return [
    `https://lh3.googleusercontent.com/d/${driveId}=w600`,
    `https://drive.google.com/thumbnail?id=${driveId}&sz=w600`,
    `https://drive.google.com/uc?export=view&id=${driveId}`,
  ];
}

export default function PixelReveal({
  imageSrc,
  alt = '',
  className,
  imageClassName,
  sizes = '(max-width: 768px) 100vw, 33vw',
  style,
  onRevealComplete,
}: PixelRevealProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const candidates = useMemo(() => buildSourceCandidates(imageSrc ?? ''), [imageSrc]);
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Reset when imageSrc changes
  useEffect(() => {
    setCandidateIndex(0);
    setIsLoaded(false);
    setRevealed(false);
    setHasError(false);
    setIsVisible(false);
  }, [imageSrc]);

  // Only start loading images when card scrolls into view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Trigger reveal animation shortly after image loads
  useEffect(() => {
    if (isLoaded && !revealed) {
      const timer = setTimeout(() => {
        setRevealed(true);
        onRevealComplete?.();
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [isLoaded, revealed, onRevealComplete]);

  const currentSrc = candidates[candidateIndex];

  const handleImageError = () => {
    if (candidateIndex + 1 < candidates.length) {
      setCandidateIndex((prev) => prev + 1);
    } else {
      setHasError(true);
    }
  };

  if (!imageSrc || hasError || !currentSrc) return null;

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        ...style,
      }}
    >
      {isVisible && (
        <Image
          key={currentSrc}
          src={currentSrc}
          alt={alt}
          fill
          loading="lazy"
          sizes={sizes}
          className={imageClassName}
          unoptimized
          referrerPolicy="no-referrer"
          crossOrigin="anonymous"
          onLoad={() => setIsLoaded(true)}
          onError={handleImageError}
          style={{
            transition: 'opacity 0.55s ease, filter 0.55s ease',
            opacity: revealed ? 1 : 0,
            filter: revealed ? 'none' : 'blur(10px) contrast(1.1)',
          }}
        />
      )}
    </div>
  );
}
