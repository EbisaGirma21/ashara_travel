import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import {
  Plane,
  Building2,
  Users,
  PartyPopper,
  Sun,
  Heart,
  MapPin,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Business & Corporate | Ashara Travels",
  description:
    "Corporate and business travel solutions including expo travel, incentive trips, staff getaways, and bespoke destination wedding planning.",
}

const expoDestinations = [
  {
    country: "China",
    event: "The bi-annual Canton Fair",
    icon: Building2,
  },
  {
    country: "Indonesia",
    event: "Trade & Business Expos",
    icon: Plane,
  },
  {
    country: "India",
    event: "Industry Conferences",
    icon: Plane,
  },
  {
    country: "Turkiye",
    event: "International Trade Fairs",
    icon: Plane,
  },
  {
    country: "Italy",
    event: "Fashion & Design Expos",
    icon: Plane,
  },
  {
    country: "Germany",
    event: "Technology & Engineering Fairs",
    icon: Plane,
  },
]

const corporatePrograms = [
  {
    title: "Incentive & Reward Trips",
    description:
      "Motivate and reward your top performers with unforgettable travel experiences tailored to your company culture.",
    icon: PartyPopper,
  },
  {
    title: "Annual Staff Getaways",
    description:
      "Strengthen team bonds and boost morale with carefully planned corporate retreats and team-building experiences.",
    icon: Users,
  },
  {
    title: "Summer Getaway Specials",
    description:
      "Beat the heat with exclusive summer packages for your team, featuring premium destinations and curated activities.",
    icon: Sun,
  },
  {
    title: "Bespoke Destination Weddings",
    description:
      "From intimate ceremonies to grand celebrations, we plan every detail of your dream destination wedding.",
    icon: Heart,
  },
]

export default function BusinessPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/expo.jpg"
          alt="International business expo"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            For Businesses
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            {"Corporate & Business Travel Solutions"}
          </h1>
        </div>
      </section>

      {/* Business & Expo Travel */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Expo Travel
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl">
                {"Business & Expo Travel"}
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Specializing in key global business hubs. We are experts in
                crafting packages for major trade fairs, industry conferences,
                and business events around the world.
              </p>
            </div>
            <div className="relative h-80 overflow-hidden rounded-xl">
              <Image
                src="/images/expo.jpg"
                alt="Trade fair exhibition"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {expoDestinations.map((dest) => (
              <div
                key={dest.country}
                className="group flex items-start gap-4 rounded-xl border border-border bg-card p-6 transition-all hover:border-secondary hover:shadow-lg"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-accent-foreground">
                  <dest.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-primary">
                    {dest.country}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {dest.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate & Special Programs */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[500px] overflow-hidden rounded-xl lg:order-2">
              <Image
                src="/images/corporate.jpg"
                alt="Corporate team building event"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Special Programs
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl">
                {"Corporate & Special Programs"}
              </h2>
              <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                We design impactful travel solutions for businesses, combining
                professional objectives with memorable experiences.
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {corporatePrograms.map((program) => (
                  <div key={program.title} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-secondary text-accent-foreground">
                      <program.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary">
                        {program.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {program.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              Elevate Your Corporate Travel Experience
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            {"From trade fairs to team retreats, we'll handle every detail so you can focus on what matters most — your business."}
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            Request a Quote
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
