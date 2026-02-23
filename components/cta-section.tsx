"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

const leftColumnImages1 = [
  "/images/singapore.jpg",
  "/images/dubai.jpg",
  "/images/kenya.jpg",
  "/images/europe.jpg",
  "/images/zanzibar.jpg",
  "/images/bali.jpg",
  "/images/dubai1.jpg",
  "/images/seychelles.jpg",
];

const leftColumnImages2 = [
  "/images/beynuna.jpg",
  "/images/gondar.jpg",
  "/images/wenchi.jpg",
  "/images/babile.jpg",
  "/images/addis.jpg",
  "/images/semen.jpg",
  "/images/omo.jpg",
  "/images/danakil.jpg",
];

const rightColumnImages1 = [
  "/images/singapore.jpg",
  "/images/dubai.jpg",
  "/images/kenya.jpg",
  "/images/europe.jpg",
  "/images/zanzibar.jpg",
  "/images/bali.jpg",
  "/images/dubai1.jpg",
  "/images/seychelles.jpg",
];

const rightColumnImages2 = [
  "/images/aksum.jpg",
  "/images/afar.jpg",
  "/images/wenchi.jpg",
  "/images/babile.jpg",
  "/images/addis.jpg",
  "/images/semen.jpg",
  "/images/omo.jpg",
  "/images/danakil.jpg",
];

const rotations = [-12, 8, -15, 10, -8, 12, -10, 14];

export function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const leftCol1Ref = useRef<HTMLDivElement>(null);
  const leftCol2Ref = useRef<HTMLDivElement>(null);
  const rightCol1Ref = useRef<HTMLDivElement>(null);
  const rightCol2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const leftCol1 = leftCol1Ref.current;
    const leftCol2 = leftCol2Ref.current;
    const rightCol1 = rightCol1Ref.current;
    const rightCol2 = rightCol2Ref.current;

    if (!section || !leftCol1 || !leftCol2 || !rightCol1 || !rightCol2) return;

    let animationFrameId: number;
    let isRunning = false;
    const scrollSpeed = 0.6;

    const animate = () => {
      // Left column 1 - scrolls DOWN
      if (leftCol1.scrollTop >= leftCol1.scrollHeight / 2) {
        leftCol1.scrollTop = 0;
      } else {
        leftCol1.scrollTop += scrollSpeed;
      }

      // Left column 2 - scrolls UP
      if (leftCol2.scrollTop <= 0) {
        leftCol2.scrollTop = leftCol2.scrollHeight / 2;
      } else {
        leftCol2.scrollTop -= scrollSpeed;
      }

      // Right column 1 - scrolls UP
      if (rightCol1.scrollTop <= 0) {
        rightCol1.scrollTop = rightCol1.scrollHeight / 2;
      } else {
        rightCol1.scrollTop -= scrollSpeed;
      }

      // Right column 2 - scrolls DOWN
      if (rightCol2.scrollTop >= rightCol2.scrollHeight / 2) {
        rightCol2.scrollTop = 0;
      } else {
        rightCol2.scrollTop += scrollSpeed;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isRunning) {
            isRunning = true;
            animationFrameId = requestAnimationFrame(animate);
          } else if (!entry.isIntersecting && isRunning) {
            isRunning = false;
            cancelAnimationFrame(animationFrameId);
          }
        });
      },
      { threshold: 0.05 },
    );

    observer.observe(section);

    // Initialize scroll positions for upward-scrolling columns
    leftCol2.scrollTop = leftCol2.scrollHeight / 2;
    rightCol1.scrollTop = rightCol1.scrollHeight / 2;

    return () => {
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  const renderImageColumn = (
    images: string[],
    ref: React.RefObject<HTMLDivElement | null>,
    offsetPattern: "even" | "odd",
  ) => {
    const doubled = [...images, ...images];
    return (
      <div
        ref={ref}
        className="h-full overflow-hidden"
        style={{
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        <div className="flex flex-col gap-4 py-4">
          {doubled.map((src, idx) => {
            const rotation = rotations[idx % rotations.length];
            const marginOffset =
              offsetPattern === "even"
                ? idx % 2 === 0
                  ? "10px"
                  : "30px"
                : idx % 2 === 0
                  ? "30px"
                  : "10px";

            return (
              <div
                key={`${src}-${idx}`}
                className="relative flex-shrink-0 overflow-hidden rounded-xl shadow-2xl ring-2 ring-white/20"
                style={{
                  transform: `rotate(${rotation}deg)`,
                  marginLeft: marginOffset,
                  width: "140px",
                  height: "180px",
                }}
              >
                <Image
                  src={src}
                  alt="Ethiopia"
                  fill
                  className="object-cover"
                  sizes="140px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-primary py-20 lg:py-32"
      style={{ minHeight: "600px" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-primary/95 to-primary" />

      {/* Subtle background image */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/gettyimages-157294324.jpg"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      {/* LEFT SIDE - Two columns */}
      <div className="pointer-events-none absolute left-0 top-0 hidden h-full lg:flex">
        {/* Left Column 1 - scrolls DOWN */}
        <div className="h-full w-40 xl:w-44">
          {renderImageColumn(leftColumnImages1, leftCol1Ref, "even")}
        </div>
        {/* Left Column 2 - scrolls UP */}
        <div className="h-full w-40 xl:w-44">
          {renderImageColumn(leftColumnImages2, leftCol2Ref, "odd")}
        </div>
      </div>

      {/* RIGHT SIDE - Two columns */}
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full lg:flex">
        {/* Right Column 1 - scrolls UP */}
        <div className="h-full w-40 xl:w-44">
          {renderImageColumn(rightColumnImages1, rightCol1Ref, "odd")}
        </div>
        {/* Right Column 2 - scrolls DOWN */}
        <div className="h-full w-40 xl:w-44">
          {renderImageColumn(rightColumnImages2, rightCol2Ref, "even")}
        </div>
      </div>

      {/* Fade edges so images blend into the section */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-[5] hidden w-16 bg-gradient-to-r from-primary to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-[5] hidden w-16 bg-gradient-to-l from-primary to-transparent lg:block" />
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-20 bg-gradient-to-b from-primary to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-20 bg-gradient-to-t from-primary to-transparent" />

      {/* Center content */}
      <div className="relative z-10 mx-auto max-w-3xl px-4 text-center lg:px-8">
        <div className="inline-flex items-center gap-2">
          <Image
            src="/images/star2.webp"
            alt=""
            width={20}
            height={20}
            className="inline-block"
          />
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Let&apos;s Explore Ethiopia
          </p>
        </div>

        <h2 className="mt-6 font-serif text-3xl font-bold italic text-primary-foreground md:text-4xl lg:text-5xl xl:text-6xl">
          Where Wonders Await
        </h2>

        <p className="mx-auto mt-8 max-w-xl text-base leading-relaxed text-primary-foreground/80 lg:text-lg">
          Prepare for an unforgettable journey through the heart of Ethiopia,
          where ancient traditions meet breathtaking landscapes. From the
          historic wonders of Lalibela and Axum to the stunning natural beauty
          of the Simien Mountains and the Blue Nile Falls, Ethiopia offers a
          wealth of experiences waiting to be discovered.
        </p>

        <Link
          href="/contact"
          className="mt-10 inline-flex items-center gap-3 rounded-full border-2 border-secondary bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wider text-secondary transition-all duration-300 hover:bg-secondary hover:text-accent-foreground hover:shadow-lg hover:shadow-secondary/20"
        >
          Discover Ethiopia
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </Link>
      </div>

      {/* Hide scrollbar globally for this component */}
      <style jsx global>{`
        .overflow-hidden::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
