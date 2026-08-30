"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, type Variants } from "framer-motion";

type Service = {
  title: string;
  tagline: string;
  img: string;
  slug: string;
};

const services: Service[] = [
  {
    title: "Bridal Makeup",
    tagline: "HD Makeup, Barat & Walima Looks",
    img: "/images/services/bridal-makeup.webp",
    slug: "bridal-makeup",
  },
  {
    title: "Hair Styling",
    tagline: "Professional Cuts, Colors & Treatments",
    img: "/images/services/hair-styling.webp",
    slug: "hair-styling",
  },
  {
    title: "Skin Care",
    tagline: "Facials, Glow Treatments & Anti-Aging",
    img: "/images/services/skin-care.webp",
    slug: "skin-care",
  },
  {
    title: "Makeup & Skincare",
    tagline: "Everyday Makeup & Skincare Essentials",
    img: "/images/services/makeup-skincare.png",
    slug: "makeup-skincare",
  },
  {
    title: "Nail Art",
    tagline: "Manicure, Pedicure & Custom Designs",
    img: "/images/services/nail-art.webp",
    slug: "nail-art",
  },
  {
    title: "Special Events",
    tagline: "Party Makeup & Styling Packages",
    img: "/images/services/special-events.webp",
    slug: "party-event-makeup",
  },
  {
    title: "Body Treatments",
    tagline: "Massage, Spa & Wellness Packages",
    img: "/images/services/body-treatments.png",
    slug: "body-treatments",
  },
];

/* ANIMATION VARIANTS*/

const container: Variants = {
  hidden: {
    opacity: 0,
  },

  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardAnimation: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

/* SERVICES COMPONENT*/

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-wine-radial py-20 sm:py-24"
    >
      {/* 
          BACKGROUND DECORATION
      = */}

      {/* Left Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold-500/5 blur-3xl"
      />

      {/* Right Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blush-400/5 blur-3xl"
      />

      {/* Decorative Dots */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 15% 20%, #d4af37 0, transparent 60%), radial-gradient(1px 1px at 85% 30%, #e8cd7a 0, transparent 60%), radial-gradient(1px 1px at 30% 80%, #d4af37 0, transparent 60%), radial-gradient(1px 1px at 75% 85%, #e8cd7a 0, transparent 60%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* SECTION HEADER*/}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mb-12 text-center sm:mb-14"
        >
          {/* Decorative Sparkle */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.7,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 0.5,
            }}
            viewport={{
              once: true,
            }}
            className="mb-4 flex items-center justify-center gap-3"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500/50" />

            <Sparkles className="h-5 w-5 text-gold-400" />

            <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500/50" />
          </motion.div>

          {/* Heading */}
          <h2 className="font-display text-4xl leading-tight text-gradient-gold sm:text-5xl lg:text-6xl">
            Our <span className="font-script text-blush-400">Signature</span>{" "}
            Services
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-ivory/65 sm:text-base">
            Discover our premium beauty and grooming services designed to
            enhance your natural beauty and make every occasion memorable.
          </p>

          {/* Decorative Divider */}
          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-16 bg-gold-500/30" />

            <span className="text-xs text-gold-400">✦</span>

            <span className="h-px w-16 bg-gold-500/30" />
          </div>

          {/* View All Button */}
          <motion.a
            whileHover={{
              scale: 1.04,
            }}
            whileTap={{
              scale: 0.97,
            }}
            href="/services"
            className="group mt-7 inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-6 py-3 text-sm font-medium tracking-wide text-gold-300 backdrop-blur-sm transition-all hover:border-gold-500/70 hover:bg-gold-500 hover:text-wine-950"
          >
            View All Services
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </motion.a>
        </motion.div>

        {/* SERVICES GRID*/}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.08,
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service, index) => (
            /*
             * Entire card is now inside Link.
             * So clicking anywhere on the card opens the service.
             */
            <Link
              key={service.slug}
              href={`/services#${service.slug}`}
              className={`block ${
                index === 0 ? "lg:col-span-2 lg:row-span-1" : ""
              }`}
            >
              <motion.div
                variants={cardAnimation}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative h-full min-h-[390px] cursor-pointer overflow-hidden rounded-2xl"
              >
                {/* GOLD OUTER GLOW*/}

                <div
                  aria-hidden="true"
                  className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-gold-500/50 via-transparent to-blush-400/30 opacity-60 transition-opacity duration-500 group-hover:opacity-100"
                />

                {/* CARD*/}

                <div className="gilt-card relative h-full min-h-[390px] overflow-hidden rounded-2xl bg-wine-950">
                  {/* Image */}
                  <img
                    src={service.img}
                    alt={`${service.title} service at Anabia's Beauty Parlour`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />

                  {/* Dark Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/65 to-transparent" />

                  {/* Side Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-wine-950/10 via-transparent to-wine-950/40" />

                  {/* Golden Hover Overlay */}
                  <div className="absolute inset-0 bg-gold-500/0 transition-all duration-500 group-hover:bg-gold-500/5" />

                  {/* Inner Frame */}
                  <div className="pointer-events-none absolute inset-3 rounded-xl border border-gold-500/15 transition-all duration-500 group-hover:inset-2 group-hover:border-gold-500/35" />

                  {/* TOP SPARKLE*/}

                  <motion.div
                    animate={{
                      opacity: [0.3, 0.8, 0.3],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.3,
                    }}
                    className="absolute right-5 top-5"
                  >
                    <Sparkles className="h-5 w-5 text-gold-300" />
                  </motion.div>

                  {/* 
                      CONTENT
                  = */}

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    {/* Small Label */}
                    <div className="mb-2 flex items-center gap-2">
                      <span className="h-px w-7 bg-gold-400/70" />

                      <span className="text-[10px] uppercase tracking-[0.25em] text-gold-300">
                        Anabia&apos;s
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl leading-tight text-ivory sm:text-3xl">
                      {service.title}
                    </h3>

                    {/* Tagline */}
                    <p className="mt-2 max-w-sm text-xs leading-5 text-ivory/70 sm:text-sm">
                      {service.tagline}
                    </p>

                    {/* Explore Button - Visual Only */}
                    <div className="group/button mt-4 inline-flex items-center gap-2 rounded-full border border-ivory/40 bg-wine-950/40 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.12em] text-ivory backdrop-blur-sm transition-all duration-300 group-hover:border-gold-400 group-hover:bg-gold-500 group-hover:text-wine-950">
                      Explore Now
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/button:translate-x-1" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </motion.div>

        {/* BOTTOM MESSAGE*/}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          viewport={{
            once: true,
          }}
          className="mt-12 text-center"
        >
          <p className="font-script text-2xl text-blush-300 sm:text-3xl">
            Beauty made personal, elegant & unforgettable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
