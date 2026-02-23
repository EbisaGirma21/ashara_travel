"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dubai from "@/public/images/dubai.jpg";
import kenya from "@/public/images/kenya.jpg";
import thailand from "@/public/images/thailand.jpg";

const slides = [
  {
    image: kenya,
    alt: "African savanna landscape at golden hour",
  },
  {
    image: dubai,
    alt: "Dubai skyline at dusk",
  },
  {
    image: thailand,
    alt: "Thailand",
  },
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
          Welcome to Ashara Travels
        </p>
        <h1 className="max-w-4xl font-serif text-4xl font-bold leading-tight text-primary-foreground md:text-6xl lg:text-7xl">
          <span className="text-balance">
            Your Gateway to the World, Based in the Heart of Africa.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl">
          Based in Addis Ababa, Ashara Travel is your premier partner for
          exceptional travel experiences.
        </p>
        <Link
          href="/outbound"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
        >
          Explore Our Destinations
        </Link>
      </div>

      <button
        type="button"
        onClick={prev}
        className="absolute left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-secondary hover:text-accent-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        type="button"
        onClick={next}
        className="absolute right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground backdrop-blur-sm transition-colors hover:bg-secondary hover:text-accent-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current
                ? "w-8 bg-secondary"
                : "w-2 bg-primary-foreground/40"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
