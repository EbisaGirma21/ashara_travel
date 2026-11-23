"use client";

import React from "react";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock, Send } from "lucide-react";
import { useState } from "react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    detail: "Addis Ababa, Ethiopia",
    sub: "Our office in the heart of Africa",
  },
  {
    icon: Mail,
    title: "Email Us",
    detail: "travels@asharabusiness.com",
    sub: "We reply within 24 hours",
    href: "mailto:travels@asharabusiness.com",
  },
  {
    icon: Phone,
    title: "Call Us",
    detail: "+251 96 307 1000",
    sub: "Mon - Sat, 9AM - 6PM EAT",
    href: "tel:+251911000000",
  },
  {
    icon: Clock,
    title: "Working Hours",
    detail: "Mon - Sat: 9AM - 6PM",
    sub: "East Africa Time (EAT)",
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main>
      <Navbar />

      {/* Page Header */}
      <section className="relative flex h-[50vh] min-h-[400px] items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-1.jpg"
          alt="African landscape"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/70" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
            {"Let's Connect"}
          </p>
          <h1 className="mt-3 font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-6xl">
            Ready to Explore?
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
            Contact Ashara Travels today and let us turn your travel dreams into
            reality.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info) => {
              const Wrapper = info.href ? "a" : "div";
              const wrapperProps = info.href ? { href: info.href } : {};
              return (
                <Wrapper
                  key={info.title}
                  {...wrapperProps}
                  className="group rounded-xl border border-border bg-card p-8 text-center transition-all hover:border-secondary hover:shadow-lg"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-colors group-hover:bg-secondary group-hover:text-accent-foreground">
                    <info.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-serif text-lg font-bold text-primary">
                    {info.title}
                  </h3>
                  <p className="mt-2 font-medium text-foreground">
                    {info.detail}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {info.sub}
                  </p>
                </Wrapper>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-secondary">
                Get In Touch
              </p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-primary md:text-4xl">
                <span className="text-balance">Send Us a Message</span>
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Whether you have a question about our destinations, need a
                custom itinerary, or want to book a corporate trip, our team is
                here to help.
              </p>

              <div className="mt-10 rounded-xl overflow-hidden h-64 lg:h-80 relative">
                <Image
                  src="/images/addis-ababa.jpg"
                  alt="Addis Ababa"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>

            <div className="rounded-xl border border-border bg-card p-8 lg:p-10">
              {submitted ? (
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-secondary text-accent-foreground">
                    <Send className="h-7 w-7" />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl font-bold text-primary">
                    Message Sent!
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Thank you for reaching out. We will get back to you within
                    24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-sm font-semibold text-secondary transition-colors hover:text-primary"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="lastName"
                        className="mb-2 block text-sm font-medium text-foreground"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        required
                        className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                        placeholder="Doe"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="+251 91 122 3344"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="interest"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Interested In
                    </label>
                    <select
                      id="interest"
                      className="w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                    >
                      <option value="">Select a service</option>
                      <option value="outbound">Outbound Leisure Travel</option>
                      <option value="inbound">Inbound Ethiopia Packages</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="expo">Expo & Business Travel</option>
                      <option value="wedding">Destination Wedding</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      required
                      className="w-full resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-secondary focus:outline-none focus:ring-1 focus:ring-secondary"
                      placeholder="Tell us about your travel plans..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="flex items-center justify-center gap-2 rounded-full bg-secondary px-8 py-4 text-sm font-semibold uppercase tracking-wider text-accent-foreground transition-all hover:bg-secondary/90 hover:shadow-lg"
                  >
                    <Send className="h-4 w-4" />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
