"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/outbound", label: "Outbound Destinations" },
  { href: "/inbound", label: "Inbound & Ethiopia" },
  { href: "/business", label: "Business & Corporate" },
  { href: "/contact", label: "Contact Us" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        // Scrolling up or at the top
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsVisible(false);
        setMobileOpen(false); // Close mobile menu when hiding
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full",
      )}
    >
      {/* Top Bar */}
      <div className="h-10 bg-primary-foreground/5 backdrop-blur-sm border-b border-primary-foreground/10">
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-4 text-xs text-primary-foreground/70">
            <a
              href="tel:+251911000000"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Phone className="h-3 w-3" />
              <span className="hidden sm:inline">+251 96 307 1000</span>
            </a>
            <a
              href="mailto:travels@asharabusiness.com"
              className="flex items-center gap-1.5 hover:text-secondary transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span className="hidden sm:inline">
                travels@asharabusiness.com
              </span>
            </a>
          </div>
          <div className="text-xs text-primary-foreground/70">
            <span className="hidden md:inline">Your Journey Begins Here</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-primary/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Ashara Travels"
              width={250}
              height={80}
              className="h-auto w-36 "
            />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors uppercase",
                  pathname === link.href
                    ? "bg-secondary text-accent-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:+251911000000"
              className="flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-secondary/90"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-md p-2 text-primary-foreground lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-primary-foreground/10 bg-primary lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-4 py-3 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-secondary text-accent-foreground"
                    : "text-primary-foreground/80 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+251911000000"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-secondary px-4 py-3 text-sm font-semibold text-accent-foreground"
            >
              <Phone className="h-4 w-4" />
              Call Us
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
