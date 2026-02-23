import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Outbound Destinations | Ashara Travels",
  description:
    "Discover the vibrant cultures and breathtaking landscapes of Africa, the historic charm of Europe, and the exotic wonders of Southeast Asia.",
}

const destinations = [
  {
    name: "Kenya",
    image: "/images/kenya.jpg",
    description:
      "Kenya is a compelling African destination that seamlessly blends iconic wildlife, diverse landscapes, and rich cultural heritage into a single, immersive travel experience. From the world-famous Maasai Mara — home to the Great Wildebeest Migration — to pristine Indian Ocean beaches along the Swahili Coast, Kenya offers travelers an exceptional range of experiences within short travel distances. Snow-capped Mount Kenya, the Great Rift Valley lakes, and expansive savannahs provide dramatic natural backdrops, while vibrant cities like Nairobi add modern energy, gastronomy, and arts to the journey.",
  },
  {
    name: "Zanzibar",
    image: "/images/zanzibar.jpg",
    description:
      "Zanzibar is a spellbinding Indian Ocean destination where centuries of Swahili, Arab, Persian, and European influence converge across powder-white beaches, turquoise waters, and UNESCO-listed Stone Town. Renowned for its spicy plantations, historic coral-stone architecture, vibrant local culture, and year-round tropical climate, the archipelago offers an effortless blend of relaxation and discovery — from dhow cruises at sunset and world-class snorkeling to immersive heritage walks and boutique beach retreats.",
  },
  {
    name: "Thailand",
    image: "/images/thailand.jpg",
    description:
      "Thailand is a captivating destination that seamlessly blends rich cultural heritage, tropical natural beauty, and modern lifestyle experiences, making it one of the world's most versatile travel choices. From the golden temples and royal history of Bangkok and Chiang Mai to the turquoise waters, white-sand beaches, and limestone cliffs of Phuket, Krabi, and Koh Samui, the country offers depth for both first-time and repeat travelers.",
  },
  {
    name: "Bali",
    image: "/images/bali.jpg",
    description:
      "Bali is a captivating island destination where natural beauty, culture, and leisure converge seamlessly, offering travelers a well-balanced escape for both relaxation and exploration. Renowned for its lush rice terraces, volcanic landscapes, pristine beaches, and warm tropical climate, Bali is equally defined by its deeply rooted Hindu traditions, vibrant ceremonies, and artistic heritage.",
  },
  {
    name: "Dubai",
    image: "/images/dubai.jpg",
    description:
      "Dubai is a world-class destination where ultra-modern luxury meets rich Arabian heritage, offering travelers a seamless blend of iconic skyscrapers, pristine beaches, desert adventures, and vibrant cultural experiences. Renowned for its exceptional hospitality, tax-free shopping, and global connectivity, the city caters to leisure seekers, business travelers, families, and luxury enthusiasts alike.",
  },
  {
    name: "Singapore",
    image: "/images/singapore.jpg",
    description:
      "Singapore is a world-class urban destination where cutting-edge modernity meets rich multicultural heritage, offering travelers a seamless blend of luxury, efficiency, and unforgettable experiences. Renowned for its iconic skyline, award-winning airport, and exceptional safety standards, the city-state captivates visitors with futuristic attractions like Marina Bay Sands and Gardens by the Bay.",
  },
  {
    name: "Seychelles",
    image: "/images/seychelles.jpg",
    description:
      "Seychelles is an exclusive Indian Ocean sanctuary where pristine white-sand beaches, sculpted granite cliffs, and crystal-clear turquoise waters converge to create a refined yet untamed escape. Scattered across 115 islands, the destination offers an effortless blend of barefoot luxury and raw natural beauty, from the iconic shores of Anse Source d'Argent to UNESCO-protected marine parks.",
  },
  {
    name: "Europe",
    image: "/images/europe.jpg",
    description:
      "Europe is a richly layered destination where centuries of history, diverse cultures, and modern sophistication converge within a compact and easily navigable region, making it ideal for multi-country travel experiences in a single journey. From iconic capitals and medieval towns to alpine landscapes and Mediterranean coastlines, Europe offers seamless connectivity and world-class infrastructure.",
  },
]

export default function OutboundPage() {
  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-2.jpg"
          alt="International travel destinations"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            Our Expertise
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Outbound Leisure Travel
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Discover the vibrant cultures and breathtaking landscapes of Africa,
            the historic charm of Europe, and the exotic wonders of Southeast
            Asia. Your perfect holiday tailored just for you.
          </p>
        </div>
      </section>

      {/* Destinations List */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="flex flex-col gap-24">
            {destinations.map((dest, index) => (
              <div
                key={dest.name}
                className={`grid items-center gap-12 lg:grid-cols-2 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div
                  className={`relative h-96 overflow-hidden rounded-xl ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={dest.image || "/placeholder.svg"}
                    alt={`${dest.name} travel destination`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/60 to-transparent p-6">
                    <span className="font-serif text-3xl font-bold text-primary-foreground">
                      {dest.name}
                    </span>
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <h2 className="font-serif text-3xl font-bold text-primary">
                    {dest.name}
                  </h2>
                  <div className="mt-2 h-1 w-16 rounded-full bg-secondary" />
                  <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                    {dest.description}
                  </p>
                  <Link
                    href="/contact"
                    className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Enquire Now
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
              {"Can't Find Your Dream Destination?"}
            </span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            We craft bespoke itineraries to destinations around the globe.
            Tell us where you want to go and we will make it happen.
          </p>
          <Link
            href="/contact"
            className="mt-10 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
