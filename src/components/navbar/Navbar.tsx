"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import { EasePack } from "gsap/EasePack";
import { usePathname } from "next/navigation";
import styles from "../hero/GlitchverseHero.module.css";

function smoothScrollTo(targetSelector: string) {
  const header = document.querySelector("header");
  const offset = header ? header.offsetHeight : 0;
  let destinationY = 0;

  if (!targetSelector || targetSelector === "#" || targetSelector === "#top") {
    destinationY = 0;
  } else {
    const el = document.querySelector(targetSelector);

    if (!el) return;

    const rect = el.getBoundingClientRect();
    destinationY = window.scrollY + rect.top - offset - 8;
  }

  // @ts-expect-error - lenis might be globally present
  if (window.lenis && typeof window.lenis.scrollTo === "function") {
    // @ts-expect-error - lenis might be globally present
    window.lenis.scrollTo(destinationY, {
      easing: (t: number) => 1 - Math.pow(1 - t, 3),
    });
  } else {
    window.scrollTo({
      top: destinationY,
      behavior: "smooth",
    });
  }
}

const NavItem = ({
  children,
  href,
  delay = 0,
  target,
}: {
  children: React.ReactNode;
  href: string;
  delay?: number;
  target?: string;
}) => {
  const containerRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.registerPlugin(EasePack);
    }
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const purpleRects = gsap.utils.toArray(".purple-rect", container);
    const pinkRects = gsap.utils.toArray(".pink-rect", container);

    gsap.set(purpleRects, { xPercent: -100 });
    gsap.set(pinkRects, { xPercent: -100 });
  }, []);

  const handleMouseEnter = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const purpleRects = gsap.utils.shuffle(
      gsap.utils.toArray(".purple-rect", container)
    );
    const pinkRects = gsap.utils.shuffle(
      gsap.utils.toArray(".pink-rect", container)
    );

    gsap.to(purpleRects, {
      duration: 0.4,
      ease: "rough({ template: none.out, strength: 5, points: 15, taper: none, randomize: false, clamp: false })",
      xPercent: 100,
      stagger: 0.03,
      overwrite: true,
    });

    gsap.to(pinkRects, {
      duration: 0.4,
      ease: "rough({ template: none.out, strength: 5, points: 15, taper: none, randomize: false, clamp: false })",
      xPercent: 100,
      stagger: 0.01,
      overwrite: true,
    });
  };

  const handleMouseLeave = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    const purpleRects = gsap.utils.shuffle(
      gsap.utils.toArray(".purple-rect", container)
    );
    const pinkRects = gsap.utils.shuffle(
      gsap.utils.toArray(".pink-rect", container)
    );

    gsap.to(purpleRects, {
      duration: 0.4,
      ease: "rough({ template: none.out, strength: 5, points: 15, taper: none, randomize: false, clamp: false })",
      xPercent: -100,
      stagger: 0.03,
      overwrite: true,
    });

    gsap.to(pinkRects, {
      duration: 0.4,
      ease: "rough({ template: none.out, strength: 5, points: 15, taper: none, randomize: false, clamp: false })",
      xPercent: -100,
      stagger: 0.01,
      overwrite: true,
    });
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === "_blank") {
      return;
    }

    if (!href.startsWith("#")) {
      return;
    }

    e.preventDefault();
    smoothScrollTo(href);
  };

  const slices = 5;
  const sliceHeight = 100 / slices;

  return (
    <motion.a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      ref={containerRef}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{
        opacity: 0,
        y: -10,
        filter: "blur(2px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{
        scale: 1.05,
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
      }}
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <svg
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          zIndex: 0,
        }}
        preserveAspectRatio="none"
      >
        <g className="purple">
          {Array.from({ length: slices }).map((_, i) => (
            <rect
              key={`purple-${i}`}
              className="purple-rect"
              x="0"
              y={`${i * sliceHeight}%`}
              width="100%"
              height={`${sliceHeight + 1}%`}
              fill="#9929ea"
            />
          ))}
        </g>

        <g className="pink">
          {Array.from({ length: slices }).map((_, i) => (
            <rect
              key={`pink-${i}`}
              className="pink-rect"
              x="0"
              y={`${i * sliceHeight}%`}
              width="100%"
              height={`${sliceHeight + 1}%`}
              fill="#ff5fcf"
            />
          ))}
        </g>
      </svg>

      <span style={{ position: "relative", zIndex: 10 }}>{children}</span>
    </motion.a>
  );
};

const MobileNavLink = ({
  href,
  children,
  setMobileOpen,
}: {
  href: string;
  children: React.ReactNode;
  setMobileOpen: (open: boolean) => void;
}) => (
  <a
    href={href}
    onClick={(e) => {
      if (href.startsWith("#")) {
        e.preventDefault();
        smoothScrollTo(href);
      }

      setMobileOpen(false);
    }}
    className="block w-full px-6 py-4 text-[12px] font-black tracking-[0.15em] text-[#faeb92] border-b border-[#faeb9220] hover:bg-[#faeb9220] transition-colors uppercase text-center"
    style={{
      fontFamily: "var(--font-body)",
    }}
  >
    {children}
  </a>
);

type NavbarProps = {
  variant?: string;
};

export function Navbar({ variant }: NavbarProps){
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isLargeScreen, setIsLargeScreen] = useState(true);

  const pathname = usePathname();

  const isBackToHome = variant === "back-to-home" || pathname !== "/";
  const homeHref = pathname === "/" ? "#top" : "/";
  
  const getSectionHref = (id: string) => pathname === "/" ? id : `/${id}`;

  const handleHomeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isBackToHome) {
      return;
    }

    e.preventDefault();
    smoothScrollTo("#top");
  };

  useEffect(() => {
    const checkScreen = () => {
      setIsLargeScreen(window.innerWidth >= 768);
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => {
      window.removeEventListener("resize", checkScreen);
    };
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}

      <header
        className={styles.navbar}
        style={{
          zIndex: mobileOpen ? 50 : 20,
        }}
      >
        {/* ================= LEFT COLUMN ================= */}
        <div className="flex items-center gap-4">
          {!isLargeScreen ? (
            <button
              className="text-[#faeb92] p-2 hover:bg-[#faeb9220] rounded-md transition-colors cursor-pointer"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          ) : null}

          <div className={`${styles.desktopOnly} items-center gap-4`}>
            <a
              href={homeHref}
              aria-label="CodeUtsava home"
              onClick={handleHomeClick}
            >
              <Image
                src="/images/codeutsava/codeutsava-logo.png"
                alt="CodeUtsava Logo"
                width={52}
                height={52}
                unoptimized
                className="w-[52px] h-[52px] object-contain drop-shadow-[0_0_8px_rgba(255,95,207,0.5)]"
              />
            </a>

            <div className={`${styles.navLinks} ${styles.navButton}`}>
              <NavItem
                href="https://docs.google.com/forms/d/e/1FAIpQLSfHv8OJ7jkp9thPyPx1HrWJNPoGZ2z7FaFtIqpz7lO3dIqqgg/viewform?pli=1"
                target="_blank"
              >
                FEEDBACK
              </NavItem>
            </div>
          </div>
        </div>

        {/* ================= CENTER COLUMN ================= */}
        {isLargeScreen ? (
          <nav
            className={styles.navLinks}
            aria-label="Primary navigation"
          >
            <NavItem href={getSectionHref("#top")} delay={0.2}>
              HOME
            </NavItem>

            <NavItem href={getSectionHref("#about")} delay={0.3}>
              ABOUT US
            </NavItem>

            <NavItem href={getSectionHref("#faq")} delay={0.4}>
              FAQ
            </NavItem>

            <NavItem href="/contact-us" delay={0.5}>
              CONTACT US
            </NavItem>

            <NavItem href="/team" delay={0.6}>
              TEAM
            </NavItem>
          </nav>
        ) : (
          <div className="flex items-center justify-center">
            <a
              href={homeHref}
              aria-label="CodeUtsava home"
              onClick={(e) => {
                if (isBackToHome) {
                  return;
                }

                e.preventDefault();
                smoothScrollTo("#top");
                setMobileOpen(false);
              }}
            >
              <Image
                src="/images/codeutsava/codeutsava-logo.png"
                alt="CodeUtsava Logo"
                width={44}
                height={44}
                className="w-[44px] h-[44px] object-contain drop-shadow-[0_0_8px_rgba(255,95,207,0.5)]"
              />
            </a>
          </div>
        )}

        <div
          style={{
            justifySelf: "end",
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div className={`${styles.desktopOnly} items-center gap-4`}>
            <div className={`${styles.navLinks} ${styles.navButton}`}>
              <NavItem href="/CU X.0 Brochure.pdf" target="_blank">
                BROCHURE
              </NavItem>
            </div>

            <a
              href={homeHref}
              aria-label="CodeUtsava home"
              onClick={handleHomeClick}
            >
              <Image
                src="/images/codeutsava/tcp-logo.png"
                alt="TCP Logo"
                width={52}
                height={52}
                className="w-[52px] h-[52px] object-contain drop-shadow-[0_0_8px_rgba(255,95,207,0.5)]"
              />
            </a>
          </div>

          <a
            href={homeHref}
            aria-label="CodeUtsava home"
            onClick={handleHomeClick}
            className={`${styles.mobileOnly} items-center justify-center`}
          >
            <Image
              src="/images/codeutsava/tcp-logo.png"
              alt="TCP Logo"
              width={42}
              height={42}
              className="h-[42px] w-[42px] object-contain drop-shadow-[0_0_8px_rgba(255,95,207,0.5)]"
            />
          </a>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}

      <AnimatePresence>
        {!isLargeScreen && mobileOpen && (
          <motion.div
            initial={{
              height: 0,
              opacity: 0,
            }}
            animate={{
              height: "auto",
              opacity: 1,
            }}
            exit={{
              height: 0,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
              ease: [0.25, 0.3, 0.35, 0.4],
            }}
            className="fixed left-4 right-4 z-9999 bg-black/95 backdrop-blur-md border border-[#faeb9240] overflow-hidden shadow-[0_10px_40px_rgba(153,41,234,0.3)]"
            style={{
              top: "100px",
              borderRadius: "12px",
            }}
          >
            <div className="flex flex-col font-sans">
                <>
                  <MobileNavLink
                    href={getSectionHref("#top")}
                    setMobileOpen={setMobileOpen}
                  >
                    HOME
                  </MobileNavLink>

                  <MobileNavLink
                    href={getSectionHref("#about")}
                    setMobileOpen={setMobileOpen}
                  >
                    ABOUT US
                  </MobileNavLink>

                  <MobileNavLink
                    href={getSectionHref("#faq")}
                    setMobileOpen={setMobileOpen}
                  >
                    FAQ
                  </MobileNavLink>

                  <MobileNavLink
                    href="/contact-us"
                    setMobileOpen={setMobileOpen}
                  >
                    CONTACT US
                  </MobileNavLink>

                  <MobileNavLink
                    href="/team"
                    setMobileOpen={setMobileOpen}
                  >
                    TEAM
                  </MobileNavLink>
                </>

              <div className="grid grid-cols-2 border-t border-[#faeb9226]">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeMsw6RCVMV0lCvvX3bGlYOomZgv0hi9fh_4sLfrfyKRsF67A/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center justify-center border-r border-[#faeb9226] px-3 text-center text-[10px] font-black tracking-[0.12em] text-[#faeb92] transition-colors hover:text-[#ff5fcf] focus-visible:text-[#ff5fcf]"
                >
                  FEEDBACK
                </a>

                <a
                  href="/CU X.0 Brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="flex min-h-12 items-center justify-center px-3 text-center text-[10px] font-black tracking-[0.12em] text-[#faeb92] transition-colors hover:text-[#ff5fcf] focus-visible:text-[#ff5fcf]"
                >
                  BROCHURE
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
