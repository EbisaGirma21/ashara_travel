"use client";

import { Plane, MapPin, Shield, Award } from "lucide-react";

const features = [
  {
    icon: Plane,
    title: "Local Insight, Global Reach",
    description: "Deep roots in Ethiopia with a trusted network worldwide.",
    stat: "50+",
    statLabel: "Countries",
  },
  {
    icon: MapPin,
    title: "Curated Experiences",
    description:
      "From bustling expos to serene eco-lodges, every detail is meticulously planned.",
    stat: "1000+",
    statLabel: "Happy Travelers",
  },
  {
    icon: Shield,
    title: "One-Stop Solution",
    description:
      "Flights, Visas, accommodation, Tours, and Transfers all handled with care.",
    stat: "24/7",
    statLabel: "Support",
  },
  {
    icon: Award,
    title: "Dedicated Service",
    description:
      "Your personal travel consultant ensures a smooth and personalized journey.",
    stat: "15+",
    statLabel: "Years Experience",
  },
];

export function FeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-card py-20 lg:py-28">
      <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Why Choose Us
          </p>
          <h2 className="mt-6 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
            <span className="text-balance">Why Travel with Ashara?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            Experience the difference of personalized service and expert
            planning
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="group relative">
              {/* Image background with overlay */}
              <div className="relative h-64 overflow-hidden bg-gradient-to-br from-muted to-muted-foreground/20">
                <div className="absolute inset-0 bg-primary/80 transition-colors duration-300 group-hover:bg-primary/70" />

                {/* Content overlay */}
                <div className="relative flex h-full flex-col items-center justify-center p-6 text-center">
                  <h3 className="font-serif text-2xl font-bold uppercase tracking-wide text-primary-foreground">
                    {feature.title.split(",")[0]}
                  </h3>
                  <p className="mt-2 text-sm uppercase tracking-wider text-primary-foreground/80">
                    {feature.statLabel}
                  </p>
                </div>
              </div>

              {/* Description card with equal height */}
              <div className="relative flex min-h-[200px] flex-col justify-between border border-border bg-background p-6 pt-14 text-center">
                {/* Icon badge - half inside card, half outside (overlapping) */}
                <div className="absolute left-1/2 top-0 z-10 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-secondary shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <feature.icon className="h-10 w-10 text-accent-foreground" />
                </div>

                <div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
                <div className="mt-4 inline-flex items-baseline gap-1">
                  <span className="font-serif text-2xl font-bold text-secondary">
                    {feature.stat}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {feature.statLabel}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            Ready to experience the Ashara difference?{" "}
            <a
              href="/contact"
              className="font-semibold text-secondary underline-offset-4 hover:underline"
            >
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
