import { Navbar } from "@/components/navbar";
import { HeroSlider } from "@/components/hero-slider";
import { IntroSection } from "@/components/intro-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection } from "@/components/cta-section";
import { Footer } from "@/components/footer";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import dubai from "@/public/images/dubai.jpg";
import kenya from "@/public/images/kenya.jpg";
import zanzibar from "@/public/images/zanzibar.jpg";
import thailand from "@/public/images/thailand.jpg";
import bali from "@/public/images/bali.jpg";
import Seychelles from "@/public/images/seychelles.jpg";

const destinations = [
  { name: "Kenya", image: kenya, href: "/outbound" },
  { name: "Dubai", image: dubai, href: "/outbound" },
  { name: "Zanzibar", image: zanzibar, href: "/outbound" },
  { name: "Thailand", image: thailand, href: "/outbound" },
  { name: "Bali", image: bali, href: "/outbound" },
  { name: "Seychelles", image: Seychelles, href: "/outbound" },
];

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSlider />
      <IntroSection />
      <FeaturesSection />

      {/* Destinations Preview */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              Top Destinations
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              <span className="text-balance">Where Will You Go Next?</span>
            </h2>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {destinations.map((dest) => (
              <Link
                key={dest.name}
                href={dest.href}
                className="group relative h-80 overflow-hidden rounded-xl"
              >
                <Image
                  src={dest.image || "/placeholder.svg"}
                  alt={`Travel to ${dest.name}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 transition-colors group-hover:bg-primary/50" />
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold text-primary-foreground">
                    {dest.name}
                  </h3>
                  <span className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
                    Explore <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner with Auto-scrolling Images */}
      <CTASection />

      <Footer />
    </main>
  );
}
