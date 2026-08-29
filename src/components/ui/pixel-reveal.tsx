'use client';

/* eslint-disable react/prop-types -- TypeScript provides this component's runtime-facing prop contract. */

import Image from 'next/image';
import * as React from 'react';
import { useEffect, useLayoutEffect, useRef } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right';

type PixelRevealTransition = {
  type?: 'tween' | 'spring';
  duration?: number;
  ease?: string | number[];
  [key: string]: unknown;
};

export type PixelRevealProps = {
  imageSrc?: string;
  alt?: string;
  gridSize?: number;
  transitionColor?: string;
  edgeHeight?: number;
  transition?: PixelRevealTransition;
  direction?: Direction;
  onRevealComplete?: () => void;
  style?: React.CSSProperties;
  className?: string;
  imageClassName?: string;
  sizes?: string;
};

type ResolvedProps = Required<
  Pick<PixelRevealProps, 'imageSrc' | 'alt' | 'gridSize' | 'transitionColor' | 'edgeHeight' | 'transition' | 'direction' | 'sizes'>
> & Pick<PixelRevealProps, 'onRevealComplete' | 'style' | 'className' | 'imageClassName'>;

const COMPONENT_DEFAULTS: ResolvedProps = {
  imageSrc: '',
  alt: '',
  gridSize: 15,
  transitionColor: '#ffffff',
  edgeHeight: 10,
  transition: { type: 'tween', duration: 2, ease: 'easeInOut' },
  direction: 'up',
  sizes: '100vw',
};

const ORIGINKIT_PRESET: Partial<ResolvedProps> = {
  gridSize: 21,
  edgeHeight: 15,
  transition: {
    ease: [0.44, 0, 0.56, 1],
    mass: 1,
    type: 'tween',
    damping: 60,
    duration: 1.5,
    stiffness: 800,
    delay: 0,
  },
  direction: 'down',
};

const useIsStaticRenderer = () => false;

function PixelRevealBase(inputProps: PixelRevealProps) {
  const props: ResolvedProps = { ...COMPONENT_DEFAULTS, ...ORIGINKIT_PRESET, ...inputProps };
  const {
    imageSrc,
    alt,
    gridSize,
    transitionColor,
    edgeHeight,
    transition,
    direction,
    onRevealComplete,
    style,
    className,
    imageClassName,
    sizes,
  } = props;

  const isStatic = useIsStaticRenderer();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const progressRef = useRef(0);
  const linearProgressRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const completedRef = useRef(false);
  const triggeredOnceRef = useRef(false);
  const gridRef = useRef<{
    cols: number;
    rows: number;
    cellW: number;
    cellH: number;
    cssW: number;
    cssH: number;
    thresholds: Float32Array;
  } | null>(null);

  const propsRef = useRef({
    gridSize,
    edgeHeight,
    direction,
    transition,
    transitionColor,
    onRevealComplete,
  });

  useEffect(() => {
    propsRef.current = {
      gridSize,
      edgeHeight,
      direction,
      transition,
      transitionColor,
      onRevealComplete,
    };
  }, [gridSize, edgeHeight, direction, transition, transitionColor, onRevealComplete]);

  const cubicBezier = (x1: number, y1: number, x2: number, y2: number) => {
    const cx = 3 * x1;
    const bx = 3 * (x2 - x1) - cx;
    const ax = 1 - cx - bx;
    const cy = 3 * y1;
    const by = 3 * (y2 - y1) - cy;
    const ay = 1 - cy - by;
    const sampleX = (t: number) => ((ax * t + bx) * t + cx) * t;
    const sampleY = (t: number) => ((ay * t + by) * t + cy) * t;

    return (x: number) => {
      if (x <= 0) return 0;
      if (x >= 1) return 1;

      let low = 0;
      let high = 1;
      let point = x;
      for (let index = 0; index < 12; index += 1) {
        const middle = (low + high) / 2;
        const sample = sampleX(middle);
        point = middle;
        if (Math.abs(sample - x) < 1e-6) break;
        if (sample < x) low = middle;
        else high = middle;
      }
      return sampleY(point);
    };
  };

  const resolveEasingFn = (currentTransition: PixelRevealTransition) => {
    const linear = (value: number) => value;
    if (!currentTransition || currentTransition.type === 'spring') return linear;

    const ease = currentTransition.ease;
    if (Array.isArray(ease) && ease.length === 4 && ease.every((value) => typeof value === 'number')) {
      const [x1, y1, x2, y2] = ease as [number, number, number, number];
      return cubicBezier(x1, y1, x2, y2);
    }

    if (typeof ease === 'string') {
      if (ease === 'easeIn' || ease === 'circIn') return (value: number) => value * value;
      if (ease === 'easeOut' || ease === 'circOut') return (value: number) => 1 - (1 - value) * (1 - value);
      if (ease === 'easeInOut' || ease === 'circInOut') {
        return (value: number) => value < 0.5 ? 2 * value * value : 1 - Math.pow(-2 * value + 2, 2) / 2;
      }
    }

    return linear;
  };

  const resolveDuration = (currentTransition: PixelRevealTransition) => {
    if (!currentTransition || currentTransition.type === 'spring') return 1;
    return typeof currentTransition.duration === 'number' && currentTransition.duration > 0
      ? currentTransition.duration
      : 1;
  };

  const rebuildGrid = (entry?: ResizeObserverEntry) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const contentRect = entry?.contentRect;
    const rect = container.getBoundingClientRect();
    const cssW = Math.max(1, Math.floor(contentRect?.width || container.clientWidth || rect.width) || 600);
    const cssH = Math.max(1, Math.floor(contentRect?.height || container.clientHeight || rect.height) || 400);
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = Math.floor(cssW * dpr);
    canvas.height = Math.floor(cssH * dpr);
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;

    const context = canvas.getContext('2d');
    if (!context) return;
    context.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctxRef.current = context;

    const cellSize = Math.max(1, propsRef.current.gridSize);
    const cols = Math.max(1, Math.ceil(cssW / cellSize));
    const rows = Math.max(1, Math.ceil(cssH / cellSize));
    const cellW = cssW / cols;
    const cellH = cssH / rows;
    const noise = Math.max(0, Math.min(1, propsRef.current.edgeHeight / 100));
    const currentDirection = propsRef.current.direction;
    const thresholds = new Float32Array(cols * rows);

    for (let row = 0; row < rows; row += 1) {
      for (let column = 0; column < cols; column += 1) {
        let base: number;
        if (currentDirection === 'up') base = rows === 1 ? 0 : 1 - row / (rows - 1);
        else if (currentDirection === 'down') base = rows === 1 ? 0 : row / (rows - 1);
        else if (currentDirection === 'left') base = cols === 1 ? 0 : 1 - column / (cols - 1);
        else base = cols === 1 ? 0 : column / (cols - 1);

        thresholds[row * cols + column] = base * (1 - noise) + Math.random() * noise;
      }
    }

    gridRef.current = { cols, rows, cellW, cellH, cssW, cssH, thresholds };
  };

  const draw = () => {
    const context = ctxRef.current;
    const grid = gridRef.current;
    if (!context || !grid) return;

    const { cols, rows, cellW, cellH, cssW, cssH, thresholds } = grid;
    context.clearRect(0, 0, cssW, cssH);
    context.fillStyle = propsRef.current.transitionColor;

    for (let row = 0; row < rows; row += 1) {
      const y = row * cellH;
      const rowOffset = row * cols;
      for (let column = 0; column < cols; column += 1) {
        if (thresholds[rowOffset + column] > progressRef.current) {
          context.fillRect(column * cellW, y, cellW + 1, cellH + 1);
        }
      }
    }
  };

  const stopRaf = () => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
    runningRef.current = false;
  };

  const loop = (now: number) => {
    if (!runningRef.current) return;

    const duration = Math.max(0.0001, resolveDuration(propsRef.current.transition));
    const easing = resolveEasingFn(propsRef.current.transition);
    if (startTimeRef.current === null) startTimeRef.current = now;

    const elapsed = (now - startTimeRef.current) / 1000;
    const linearProgress = Math.max(0, Math.min(1, elapsed / duration));
    linearProgressRef.current = linearProgress;
    progressRef.current = easing(linearProgress);
    draw();

    if (linearProgress >= 1) {
      stopRaf();
      if (!completedRef.current) {
        completedRef.current = true;
        propsRef.current.onRevealComplete?.();
      }
      return;
    }

    rafRef.current = requestAnimationFrame(loop);
  };

  const startRaf = () => {
    if (runningRef.current) return;
    if (isStatic) {
      progressRef.current = 1;
      linearProgressRef.current = 1;
      draw();
      return;
    }

    runningRef.current = true;
    const duration = Math.max(0.0001, resolveDuration(propsRef.current.transition));
    startTimeRef.current = performance.now() - linearProgressRef.current * duration * 1000;
    rafRef.current = requestAnimationFrame(loop);
  };

  const trigger = () => {
    completedRef.current = false;
    stopRaf();
    progressRef.current = 0;
    linearProgressRef.current = 0;
    startTimeRef.current = null;
    draw();
    startRaf();
  };

  useLayoutEffect(() => {
    if (isStatic) {
      progressRef.current = 1;
      linearProgressRef.current = 1;
    }
    rebuildGrid();
    draw();

    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver((entries) => {
      rebuildGrid(entries[0]);
      draw();
    });
    observer.observe(container);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useLayoutEffect(() => {
    rebuildGrid();
    draw();
  }, [gridSize, edgeHeight, direction]);

  useEffect(() => {
    draw();
  }, [transitionColor]);

  useEffect(() => {
    if (isStatic) return;
    const container = containerRef.current;
    if (!container) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.18 && !triggeredOnceRef.current) {
          triggeredOnceRef.current = true;
          trigger();
        }
      }
    }, {
      threshold: [0.18, 0.35],
      rootMargin: '0px 0px -6% 0px',
    });

    observer.observe(container);
    return () => {
      observer.disconnect();
      stopRaf();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isStatic]);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{ position: 'relative', width: '100%', height: '100%', overflow: 'hidden', ...style }}
    >
      {imageSrc ? (
        <Image
          src={imageSrc}
          alt={alt}
          fill
          draggable={false}
          sizes={sizes}
          className={imageClassName}
        />
      ) : null}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block', pointerEvents: 'none' }}
      />
    </div>
  );
}

export default function PixelReveal(props: PixelRevealProps) {
  return <PixelRevealBase {...props} />;
}
