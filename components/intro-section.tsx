import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function IntroSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
              About Us
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl lg:text-5xl">
              <span className="text-balance">Welcome to Ashara Travels</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Based in Addis Ababa, Ashara Travel is your premier partner for
              exceptional travel experiences, curating journeys that inspire,
              connect and create lifelong memories. We specialize in turning
              your travel dreams into seamless reality, whether you&apos;re
              seeking adventure, business, or blissful relaxation.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-secondary transition-colors hover:text-primary"
            >
              Learn More
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* <div className="grid grid-cols-2 gap-4"> */}
          {/* <div className="space-y-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/kenya.jpg"
                  alt="Safari adventure in Kenya"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/bali.jpg"
                  alt="Bali rice terraces"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="mt-8 space-y-4">
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/dubai.jpg"
                  alt="Dubai skyline"
                  className="h-64 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="overflow-hidden rounded-xl">
                <img
                  src="/images/coffee.jpg"
                  alt="Ethiopian coffee ceremony"
                  className="h-48 w-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div> */}
          <img
            src="/images/frame.png"
            alt="Dubai skyline"
            className="h-auto max-w-full object-contain transition-transform duration-500 hover:scale-105"
          />
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
