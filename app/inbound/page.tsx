import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Inbound & Ethiopia | Ashara Travels",
  description:
    "Experience the best of Ethiopia. From Addis Ababa city tours and immersive coffee farm experiences to luxurious retreats at the country's newest and most stunning gateways.",
};

const packages = [
  {
    name: "Investment Exploration",
    tag: "Inbound",
    image: "/images/addis.jpg",
    description:
      "Looking to explore Ethiopia's potential? We design focused itineraries for investors and professionals to discover opportunities in Africa's diplomatic capital. From sector-specific tours to high-level networking events, our investment packages provide comprehensive access to Ethiopia's growing economy.",
  },
  {
    name: "Beyuna Resort",
    tag: "Eco Resort",
    image: "/images/beynuna.jpg",
    description:
      "Beyuna Village Eco Resort is a scenic eco-tourism resort in Metehara, Ethiopia, situated on the tranquil shores of Lake Beseka. It offers a blend of natural beauty and serene retreat experiences, combining modern amenities with sustainable, nature-based lodging. The resort serves as a gateway for exploring nearby natural attractions like Asebot and Awash National Parks.",
  },
  {
    name: "Gorgora",
    tag: "Heritage",
    image: "/images/gorgora.jpg",
    description:
      "Gorgora is a historic town located on the northern shore of Lake Tana in Ethiopia's Amhara region. It is known for its scenic lakeside setting and as one of the early landing sites of Portuguese explorers in the 16th century. Historically, Gorgora served as a royal and religious center, hosting monasteries and important ecclesiastical sites.",
  },
  {
    name: "Wenchi Eco Lodge",
    tag: "Nature",
    image: "/images/wenchi.jpg",
    description:
      "Wenchi Eco Lodge by Ethiopian Skylight is an eco-friendly lodge and tourism accommodation located near Wenchi Crater Lake in the Oromia Region of Ethiopia. It serves as a gateway for visitors exploring one of the country's most striking natural landscapes — a volcanic crater lake set amid lush highlands, forests, waterfalls, and trails formed by ancient volcanic activity.",
  },
  {
    name: "Coffee Farms",
    tag: "Culture",
    image: "/images/coffee1.jpg",
    description:
      "A coffee farm visit in Ethiopia offers a firsthand experience of the country's rich coffee heritage, where visitors can see coffee plants, observe traditional harvesting and processing methods, and learn about Ethiopia's Arabica coffee varieties and local coffee culture. Experience the birthplace of coffee in its most authentic form.",
  },
];

export default function InboundPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/coffee.jpg"
          alt="Ethiopian coffee heritage"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Discover Ethiopia
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            {"Inbound Holiday Packages & Investment"}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Experience the best of Ethiopia. From Addis Ababa city tours and
            immersive coffee farm experiences to luxurious retreats at the
            {"country's"} newest and most stunning gateways.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-24">
            {packages.map((pkg, index) => (
              <div
                key={pkg.name}
                className="grid items-center gap-12 lg:grid-cols-2"
              >
                <div
                  className={`relative h-96 overflow-hidden rounded-xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={pkg.image || "/placeholder.svg"}
                    alt={pkg.name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent-foreground">
                    {pkg.tag}
                  </span>
                  <h2 className="mt-4 font-serif text-3xl font-bold text-primary">
                    {pkg.name}
                  </h2>
                  <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {pkg.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Book This Experience
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-20 lg:py-28">
        <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
          <h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">
            <span className="text-balance">
              Discover the Cradle of Coffee and Civilization
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Ethiopia offers some of the most unique and enriching travel
            experiences in the world. Let us be your guide.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            Plan Your Trip
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
