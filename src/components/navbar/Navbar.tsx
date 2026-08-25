"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, Menu, X } from "lucide-react";
import styles from "../hero/GlitchverseHero.module.css";

function smoothScrollTo(targetSelector: string) {
  const header = document.querySelector("header");
  const offset = header ? header.offsetHeight : 0;
  let destinationY = 0;

  if (!targetSelector || targetSelector === "#" || targetSelector === "#top") {
    destinationY = 0;
  } else {
    const element = document.querySelector(targetSelector);

    if (!element) return;

    const rect = element.getBoundingClientRect();
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

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  target?: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children, target }) => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (target === "_blank") return;

    if (href.startsWith("/")) {
      event.preventDefault();
      router.push(href);
      return;
    }

    if (!href.startsWith("#")) return;

    event.preventDefault();
    if (window.location.pathname !== "/") {
      router.push(`/${href}`);
      return;
    }

    smoothScrollTo(href);
  };

  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      onClick={handleClick}
    >
      {children}
    </a>
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
}) => {
  const router = useRouter();

  return (
    <a
      href={href}
      onClick={(event) => {
        if (href.startsWith("/")) {
          event.preventDefault();
          router.push(href);
          setMobileOpen(false);
          return;
        }

        if (href.startsWith("#")) {
          event.preventDefault();
          if (window.location.pathname !== "/") {
            router.push(`/${href}`);
            setMobileOpen(false);
            return;
          }
          smoothScrollTo(href);
        }

        setMobileOpen(false);
      }}
      className="block min-h-12 w-full border-b border-[#faeb9218] px-6 py-4 text-center text-[12px] font-black tracking-[0.15em] text-[#faeb92] decoration-[#ff5fcf] underline-offset-[6px] transition-colors duration-200 hover:text-[#ff5fcf] hover:underline focus-visible:text-[#ff5fcf] focus-visible:underline uppercase"
      style={{ fontFamily: "var(--font-body)" }}
    >
      {children}
    </a>
  );
};

export function Navbar({ variant = "default" }: { variant?: "default" | "back-to-home" }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const isBackToHome = variant === "back-to-home";

  useEffect(() => {
    if (!mobileOpen) return;

    const previousOverflow = document.body.style.overflow;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    const handleResize = () => {
      if (window.innerWidth >= 768) setMobileOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
    };
  }, [mobileOpen]);

  const handleHomeClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    if (isBackToHome) {
      router.push("/");
      setMobileOpen(false);
      return;
    }
    smoothScrollTo("#top");
    setMobileOpen(false);
  };

  const homeHref = isBackToHome ? "/" : "#top";

  return (
    <>
      <header
        className={styles.navbar}
        style={{ zIndex: mobileOpen ? 50 : 20 }}
      >
        <div className="flex items-center gap-4">
          {isBackToHome ? (
            <Link
              href="/#top"
              onClick={() => {
                document.documentElement.dataset.heroReturn = "true";
              }}
              className={`${styles.mobileOnly} min-h-11 items-center gap-2 border border-[#faeb9238] px-3 text-[10px] font-black tracking-[0.1em] text-[#faeb92] transition-colors hover:border-[#ff5fcf] hover:text-[#ff5fcf] focus-visible:border-[#ff5fcf] focus-visible:text-[#ff5fcf] whitespace-nowrap`}
              aria-label="Back to home"
            >
              <ArrowLeft size={17} strokeWidth={2.4} aria-hidden="true" />
              <span>BACK TO HOME</span>
            </Link>
          ) : (
            <button
              type="button"
              className={`${styles.mobileOnly} min-h-11 min-w-11 items-center justify-center border border-transparent text-[#faeb92] transition-colors hover:border-[#ff5fcf80] hover:text-[#ff5fcf] focus-visible:border-[#ff5fcf] cursor-pointer`}
              onClick={() => setMobileOpen((open) => !open)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-navigation"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          )}

          <div className={`${styles.desktopOnly} items-center gap-4`}>
              <a href={homeHref} aria-label="CodeUtsava home" onClick={handleHomeClick}>
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

        <div className="flex items-center justify-center">
          {!isBackToHome && (
            <a
              href={homeHref}
              aria-label="CodeUtsava home"
              onClick={handleHomeClick}
              className={`${styles.mobileOnly} items-center justify-center`}
            >
              <Image
                src="/images/codeutsava/codeutsava-logo.png"
                alt="CodeUtsava Logo"
                width={42}
                height={42}
                unoptimized
                className="h-[42px] w-[42px] object-contain drop-shadow-[0_0_8px_rgba(255,95,207,0.5)]"
              />
            </a>
          )}

          <nav className={`${styles.navLinks} ${styles.desktopOnly}`} aria-label="Primary navigation">
            {isBackToHome ? (
              <NavItem href="/">BACK TO HOME</NavItem>
            ) : (
              <>
                <NavItem href="#top">HOME</NavItem>
                <NavItem href="#about">ABOUT US</NavItem>
                <NavItem href="#faq">FAQ</NavItem>
                <NavItem href="/contact-us">CONTACT US</NavItem>
                <NavItem href="/team">TEAM</NavItem>
              </>
            )}
          </nav>
        </div>

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
                <NavItem href="/Brochure.pdf" target="_blank">
                  BROCHURE
                </NavItem>
              </div>
              <a href={homeHref} aria-label="CodeUtsava home" onClick={handleHomeClick}>
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

      {mobileOpen && (
        <div className={styles.mobileMenuLayer}>
          <button
            type="button"
            className="fixed inset-0 z-40 cursor-default bg-black/70 backdrop-blur-[2px]"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation menu"
          />

          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="fixed left-[10px] right-[10px] top-[80px] z-[60] max-h-[calc(100dvh-92px)] overflow-y-auto border border-[#faeb9240] bg-black/95 shadow-[0_14px_45px_rgba(153,41,234,0.38)] backdrop-blur-md"
          >
          <div className="flex flex-col font-sans">
            {isBackToHome ? (
              <MobileNavLink href="/" setMobileOpen={setMobileOpen}>
                BACK TO HOME
              </MobileNavLink>
            ) : (
              <>
                <MobileNavLink href="#top" setMobileOpen={setMobileOpen}>
                  HOME
                </MobileNavLink>
                <MobileNavLink href="#about" setMobileOpen={setMobileOpen}>
                  ABOUT US
                </MobileNavLink>
                <MobileNavLink href="#faq" setMobileOpen={setMobileOpen}>
                  FAQ
                </MobileNavLink>
                <MobileNavLink href="/contact-us" setMobileOpen={setMobileOpen}>
                  CONTACT US
                </MobileNavLink>
                <MobileNavLink href="/team" setMobileOpen={setMobileOpen}>
                  TEAM
                </MobileNavLink>
              </>
            )}

            <div className="grid grid-cols-2 border-t border-[#faeb9226]">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSfHv8OJ7jkp9thPyPx1HrWJNPoGZ2z7FaFtIqpz7lO3dIqqgg/viewform?pli=1"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center justify-center border-r border-[#faeb9226] px-3 text-center text-[10px] font-black tracking-[0.12em] text-[#faeb92] transition-colors hover:text-[#ff5fcf] focus-visible:text-[#ff5fcf]"
              >
                FEEDBACK
              </a>
              <a
                href="/Brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="flex min-h-12 items-center justify-center px-3 text-center text-[10px] font-black tracking-[0.12em] text-[#faeb92] transition-colors hover:text-[#ff5fcf] focus-visible:text-[#ff5fcf]"
              >
                BROCHURE
              </a>
            </div>

          </div>
          </nav>
        </div>
      )}
    </>
  );
}
