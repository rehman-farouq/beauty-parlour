"use client";

import Image from "next/image";
import { Phone, MapPin, ArrowUp, Sparkles } from "lucide-react";
import { m } from "framer-motion";

const SALON_ADDRESS = "House #373, Black Gate, Near Ada, Tapiala, Pakistan";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(SALON_ADDRESS);

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Choose Us" },
  { href: "/#boutique", label: "Boutique" },
  { href: "/#visit", label: "Visit Us" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <m.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative overflow-hidden border-t border-gold-600/20 bg-wine-950"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blush-400/5 blur-3xl"
      />

      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid gap-10 py-14 sm:py-16 md:grid-cols-[1.4fr_1fr_1fr]">
          {/*  BRAND  */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            {/* Brand Logo */}
            <a
              href="/"
              className="group inline-flex items-center gap-3 text-ivory"
            >
              {/* Logo Image */}
              <div
                className="
                  relative flex h-11 w-11 shrink-0
                  items-center justify-center
                  overflow-hidden
                  rounded-full
                  border border-gold-500/30
                  bg-gold-500/5
                  transition-all duration-300
                  group-hover:border-gold-400/70
                  group-hover:bg-gold-500/10
                  group-hover:shadow-[0_0_20px_rgba(212,175,55,0.15)]
                "
              >
                <Image
                  width={40}
                  height={40}
                  src="/images/icon.webp"
                  alt="Anabia's Beauty Parlour"
                  className="
                    h-full
                    w-full
                    object-contain
                    p-1.5
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                {/* Small sparkle */}
                <Sparkles
                  className="
                    absolute -right-1 -top-1
                    h-3 w-3
                    text-gold-300
                    opacity-0
                    transition-all duration-300
                    group-hover:opacity-100
                  "
                />
              </div>

              {/* Brand Text */}
              <div>
                <span className="block font-display text-xl tracking-wide">
                  Anabia&apos;s
                </span>

                <span className="block text-[9px] uppercase tracking-[0.25em] text-gold-400">
                  Beauty Parlour
                </span>
              </div>
            </a>

            {/* Tagline */}
            <p className="mt-6 font-script text-2xl text-blush-400">
              Your Beauty, Our Passion
            </p>

            {/* Description */}
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-ivory/50 md:mx-0">
              Enhancing your natural beauty with premium services, professional
              care, and an experience designed especially for ladies.
            </p>
          </m.div>

          {/*  QUICK LINKS  */}
          <m.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.1,
            }}
            viewport={{
              once: true,
            }}
            className="text-center md:text-left"
          >
            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
              <Sparkles className="h-4 w-4 text-gold-400" />

              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      group inline-flex items-center gap-2
                      text-sm text-ivory/55
                      transition-colors
                      hover:text-gold-400
                    "
                  >
                    <span
                      className="
                        h-px w-0
                        bg-gold-400
                        transition-all duration-300
                        group-hover:w-4
                      "
                    />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </m.div>

          {/*  CONTACT  */}
          <m.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
              delay: 0.2,
            }}
            viewport={{
              once: true,
            }}
            className="text-center md:text-left"
          >
            <div className="mb-5 flex items-center justify-center gap-3 md:justify-start">
              <Sparkles className="h-4 w-4 text-gold-400" />

              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-gold-400">
                Get In Touch
              </h3>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <a
                href="tel:+923456920533"
                className="
                  group flex items-start
                  justify-center gap-3
                  md:justify-start
                "
              >
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />

                <span
                  className="
                    text-sm text-ivory/55
                    transition-colors
                    group-hover:text-gold-400
                  "
                >
                  +92 345 6920533
                </span>
              </a>

              {/* Address */}
              <a
                href={MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group flex items-start
                  justify-center gap-3
                  md:justify-start
                "
              >
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />

                <span
                  className="
                    max-w-[220px]
                    text-sm
                    leading-5
                    text-ivory/55
                    transition-colors
                    group-hover:text-gold-400
                  "
                >
                  {SALON_ADDRESS}
                </span>
              </a>
            </div>

            {/* Book Appointment */}
            <m.a
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(212,175,55,0.2)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="/#visit"
              className="
                mt-6
                inline-flex
                items-center
                rounded-full
                bg-gold-500
                px-6
                py-2.5
                text-xs
                font-medium
                uppercase
                tracking-[0.12em]
                text-wine-950
                transition-colors
                hover:bg-gold-400
              "
            >
              Book Appointment
            </m.a>
          </m.div>
        </div>

        {/*  DIVIDER  */}
        <div className="flex items-center justify-center gap-4">
          <span className="h-px flex-1 bg-gold-500/10" />

          <span className="text-xs text-gold-500/50">✦</span>

          <span className="h-px flex-1 bg-gold-500/10" />
        </div>

        {/*  BOTTOM  */}
        <div
          className="
            flex flex-col
            items-center
            justify-between
            gap-4
            py-6
            text-center
            sm:flex-row
            sm:text-left
          "
        >
          <p className="text-xs text-ivory/35">
            © {currentYear} Anabia&apos;s Beauty Parlour. All rights reserved.
          </p>

          <div className="flex items-center gap-5">
            <span className="text-xs uppercase tracking-[0.12em] text-ivory/30">
              For Ladies Only
            </span>

            {/* Back To Top */}
            <a
              href="/"
              aria-label="Back to top"
              className="
                flex h-8 w-8
                items-center justify-center
                rounded-full
                border border-gold-500/20
                text-gold-400
                transition-all
                hover:border-gold-500/50
                hover:bg-gold-500/10
              "
            >
              <ArrowUp className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </m.footer>
  );
}
