import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Clock,
  Globe,
} from "lucide-react";

const footerLinks = {
  services: [
    { href: "/outbound", label: "Outbound Tours" },
    { href: "/inbound", label: "Inbound & Ethiopia" },
    { href: "/business", label: "Business Travel" },
    { href: "/contact", label: "Custom Packages" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact" },
    { href: "#", label: "Careers" },
    { href: "#", label: "Blog" },
  ],
  support: [
    { href: "#", label: "FAQs" },
    { href: "#", label: "Terms & Conditions" },
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Travel Insurance" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-primary text-primary-foreground">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/images/wenchi.jpg"
          alt=""
          fill
          className="object-cover opacity-20 "
        />
        <div className="absolute inset-0 bg-primary/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Ashara Travels"
                width={308}
                height={99}
                className="h-[106px] w-auto"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-primary-foreground/70">
              Your Gateway to the World, Based in the Heart of Africa. We curate
              journeys that inspire, connect, and create lifelong memories.
            </p>

            {/* Contact Info */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  Addis Ababa, Bole Sub City, Woreda 13 BMA Building 13 floor.
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href="mailto:travels@asharabusiness.com"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  travels@asharabusiness.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <a
                  href="tel:+251963071000"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  +251 96 307 1000
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-secondary" />
                <span className="text-sm text-primary-foreground/70">
                  Mon - Fri: 9:00 AM - 6:00 PM
                </span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary hover:text-accent-foreground"
              >
                <Facebook className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary hover:text-accent-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 transition-colors hover:bg-secondary hover:text-accent-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Services
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.services.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Company
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.company.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary">
              Support
            </h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="mt-12 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <h4 className="text-sm font-semibold text-secondary">
                Subscribe to Our Newsletter
              </h4>
              <p className="mt-1 text-xs text-primary-foreground/50">
                Get travel tips, exclusive deals, and destination inspiration
              </p>
            </div>
            <div className="flex w-full max-w-md gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-md border border-primary-foreground/20 bg-primary-foreground/5 px-4 py-2 text-sm text-primary-foreground placeholder:text-primary-foreground/40 focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
              />
              <button className="rounded-md bg-secondary px-6 py-2 text-sm font-semibold text-accent-foreground transition-colors hover:bg-secondary/90">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-primary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-xs text-primary-foreground/50">
              {"© 2026 Ashara Travels. All rights reserved."}
            </p>
            <div className="flex items-center gap-4 text-xs text-primary-foreground/50">
              <span className="flex items-center gap-1">
                <Globe className="h-3 w-3" />
                Licensed Tour Operator
              </span>
              <span>•</span>
              <span>IATA Certified</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
