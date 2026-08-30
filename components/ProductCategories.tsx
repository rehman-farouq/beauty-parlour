"use client";

import { ArrowRight, Gem, Sparkles, ShoppingBag, Crown } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const categories = [
  {
    title: "Cosmetics",
    tagline: "Premium & Branded Products",
    img: "/images/cosmetics.png",
    icon: Sparkles,
  },
  {
    title: "Jewelry",
    tagline: "Elegant & Trendy Collections",
    img: "/images/jewelry.png",
    icon: Gem,
  },
  {
    title: "Dresses",
    tagline: "Bridal, Party & Casual Collections",
    img: "/images/dresses.png",
    icon: Crown,
  },
  {
    title: "Beauty Products",
    tagline: "Skincare, Haircare & Makeup Essentials",
    img: "/images/beauty-products.png",
    icon: ShoppingBag,
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
      staggerChildren: 0.12,
    },
  },
};

const cardItem: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
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

/* COMPONENT*/

export default function ProductCategories() {
  return (
    <section
      id="boutique"
      className="relative overflow-hidden bg-wine-900 py-20 sm:py-24"
    >
      {/* Background Decoration */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-blush-400/5 blur-3xl"
      />

      {/* Decorative Stars */}

      <span
        aria-hidden="true"
        className="absolute left-[8%] top-[30%] text-gold-500/20"
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[8%] top-[20%] text-gold-500/20"
      >
        ✦
      </span>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/*  SECTION HEADER  */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
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
            amount: 0.3,
          }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          {/* Top Decorative Line */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-500/40" />

            <Sparkles className="h-4 w-4 text-gold-400" />

            <span className="h-px w-10 bg-gold-500/40" />
          </div>

          {/* Heading */}

          <h2 className="font-display text-4xl text-gradient-gold sm:text-5xl">
            The <span className="font-script text-blush-400">Boutique</span>{" "}
            Corner
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-500/30" />

            <span className="text-sm text-gold-400">♥</span>

            <span className="h-px w-12 bg-gold-500/30" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60 sm:text-base">
            Discover our carefully selected collection of beauty, fashion, and
            accessories — everything you need to complete your perfect look.
          </p>
        </motion.div>

        {/*  CATEGORY GRID  */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                variants={cardItem}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative"
              >
                <div className="gilt-card relative overflow-hidden rounded-2xl border border-gold-500/15 bg-wine-950/60 shadow-lg shadow-black/10 transition-all duration-300 group-hover:border-gold-500/40 group-hover:shadow-2xl group-hover:shadow-black/30">
                  {/*  IMAGE  */}

                  <div className="relative aspect-[4/4.5] overflow-hidden bg-gradient-to-br from-wine-700 to-wine-950">
                    <img
                      src={category.img}
                      alt={`${category.title} collection at Anabia's Beauty Parlour`}
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                      }}
                    />

                    {/* Image Overlay */}

                    <div className="absolute inset-0 bg-gradient-to-t from-wine-950 via-wine-950/20 to-transparent opacity-80" />

                    {/* Hover Overlay */}

                    <div className="absolute inset-0 bg-wine-950/0 transition-colors duration-500 group-hover:bg-wine-950/20" />

                    {/* Icon */}

                    <div className="absolute left-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border border-gold-400/30 bg-wine-950/70 text-gold-400 backdrop-blur-md transition-all duration-300 group-hover:border-gold-400/60 group-hover:bg-gold-500/10">
                      <Icon className="h-5 w-5" strokeWidth={1.4} />
                    </div>

                    {/* Image Bottom Label */}

                    <div className="absolute bottom-4 left-4 right-4">
                      <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-gold-300">
                        Anabia&apos;s Collection
                      </span>
                    </div>
                  </div>

                  {/*  CONTENT  */}

                  <div className="relative p-5 text-center sm:p-6">
                    {/* Top Gold Line */}

                    <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-500 group-hover:w-1/2" />

                    <h3 className="font-display text-xl text-ivory transition-colors duration-300 group-hover:text-gold-300">
                      {category.title}
                    </h3>

                    <p className="mx-auto mt-2 min-h-[42px] max-w-[230px] text-sm leading-5 text-ivory/55">
                      {category.tagline}
                    </p>

                    {/* Explore */}

                    <div className="mt-5 flex justify-center">
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium uppercase tracking-[0.15em] text-gold-400 transition-all duration-300 group-hover:gap-2.5">
                        Explore Collection
                        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/*  BOTTOM BANNER  */}

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
            delay: 0.25,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-wine-950/50 px-6 py-6 backdrop-blur-sm sm:px-10">
            {/* Top Line */}

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

            <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
              {/* Left */}

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/5">
                  <ShoppingBag
                    className="h-4 w-4 text-gold-400"
                    strokeWidth={1.4}
                  />
                </div>

                <div>
                  <p className="text-sm font-medium text-ivory">
                    Complete Your Look
                  </p>

                  <p className="mt-0.5 text-xs text-ivory/50">
                    Beauty, fashion & elegance in one place.
                  </p>
                </div>
              </div>

              {/* Right */}

              <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-gold-400">
                Visit Our Boutique
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
