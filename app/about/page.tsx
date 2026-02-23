import { Navbar } from "@/components/navbar";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import addis from "@/public/images/addia1.jpg";

export const metadata: Metadata = {
  title: "About Us | Ashara Travels",
  description:
    "Learn about Ashara Travels, your premier travel partner based in Addis Ababa, Ethiopia.",
};

export default function AboutPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/kenya.jpg"
          alt="African landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 text-center px-4">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Who We Are
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            About Ashara Travels
          </h1>
        </div>
      </section>

      {/* About Content */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
                <span className="text-balance">
                  Your Premier Travel Partner in Addis Ababa
                </span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Based in Addis Ababa, Ashara Travel is your premier partner for
                exceptional travel experiences, curating journeys that inspire,
                connect and create lifelong memories. We specialize in turning
                your travel dreams into seamless reality, whether you&apos;re
                seeking adventure, business, or blissful relaxation.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                With deep roots in Ethiopia and a trusted network spanning
                across Africa, the Middle East, Asia, and Europe, we bring
                together local insight and global expertise to deliver
                experiences that exceed expectations.
              </p>
            </div>
            <div className="relative h-96 overflow-hidden rounded-xl">
              <Image
                src={addis}
                alt="Addis Ababa business district"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "10+", label: "Years of Experience" },
              { value: "8+", label: "Destinations" },
              { value: "500+", label: "Happy Travelers" },
              { value: "100%", label: "Client Satisfaction" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-serif text-4xl font-bold text-secondary">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/70">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturesSection />

      {/* CTA */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl">
            <span className="text-balance">
              Let Us Plan Your Next Adventure
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            Ready to explore the world with a trusted partner by your side?
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
