"use client";

import {
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Gem,
  UsersRound,
  Heart,
  BadgeDollarSign,
} from "lucide-react";
import { m, type Variants } from "framer-motion";

const points = [
  {
    title: "Hygienic & Clean",
    description: "A spotless and comfortable environment for every visit.",
    icon: ShieldCheck,
  },
  {
    title: "Premium Products",
    description: "We use carefully selected, high-quality beauty products.",
    icon: Gem,
  },
  {
    title: "Professional Staff",
    description: "Experienced beauty professionals who understand your needs.",
    icon: UsersRound,
  },
  {
    title: "Customer Satisfaction",
    description: "Your comfort, happiness, and confidence come first.",
    icon: Heart,
  },
  {
    title: "Affordable Prices",
    description: "Luxury beauty services at prices you'll love.",
    icon: BadgeDollarSign,
  },
];

/*ANIMATION VARIANTS */

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
    y: 25,
  },

  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

/*COMPONENT */

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-wine-900 py-20 sm:py-24"
    >
      {/*  BACKGROUND DECORATION  */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-gold-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blush-400/5 blur-3xl"
      />

      {/* Decorative Stars */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[20%] text-gold-500/30"
      >
        ✦
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[10%] top-[30%] text-gold-500/20"
      >
        ✦
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[20%] left-[15%] text-blush-300/20"
      >
        ✦
      </div>

      {/*  MAIN CONTENT  */}

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/*  HEADER  */}

        <m.div
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
            amount: 0.3,
          }}
          className="mx-auto mb-12 max-w-2xl text-center"
        >
          {/* Small Label */}

          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-500/50" />

            <Sparkles className="h-4 w-4 text-gold-400" />

            <span className="h-px w-10 bg-gold-500/50" />
          </div>

          {/* Heading */}

          <h2 className="font-display text-4xl leading-tight text-gradient-gold sm:text-5xl">
            Why <span className="font-script text-blush-400">Choose Us?</span>
          </h2>

          {/* Divider */}

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-500/30" />

            <span className="text-sm text-gold-400">♥</span>

            <span className="h-px w-12 bg-gold-500/30" />
          </div>

          {/* Description */}

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60 sm:text-base">
            At Anabia&apos;s Beauty Parlour, every detail is designed to make
            you feel beautiful, confident, comfortable, and cared for.
          </p>
        </m.div>

        {/*  FEATURE CARDS  */}

        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5"
        >
          {points.map((point) => {
            const Icon = point.icon;

            return (
              <m.div
                key={point.title}
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
                <div className="gilt-card relative h-full overflow-hidden rounded-2xl border border-gold-500/15 bg-wine-950/50 p-6 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-gold-500/40 group-hover:bg-wine-950/80 group-hover:shadow-xl group-hover:shadow-black/20">
                  {/* Top Glow */}

                  <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-500 group-hover:w-2/3" />

                  {/* Icon */}

                  <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/5 transition-all duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-500/10">
                    <Icon
                      className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Title */}

                  <h3 className="font-display text-lg text-ivory">
                    {point.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-3 text-xs leading-6 text-ivory/55 sm:text-sm">
                    {point.description}
                  </p>

                  {/* Bottom Check */}

                  <div className="mt-5 flex justify-center">
                    <CheckCircle2
                      className="h-4 w-4 text-gold-500/60 transition-colors duration-300 group-hover:text-gold-400"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </m.div>
            );
          })}
        </m.div>

        {/*  BOTTOM TRUST CARD  */}

        <m.div
          initial={{
            opacity: 0,
            scale: 0.97,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold-500/20 bg-gradient-to-r from-wine-950/70 via-wine-900/70 to-wine-950/70 px-6 py-6 backdrop-blur-sm sm:px-10">
            {/* Decorative Lines */}

            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

            <div className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8">
              <div className="flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold-400" />

                <span className="text-xs uppercase tracking-[0.15em] text-gold-300">
                  Premium Experience
                </span>
              </div>

              <span className="hidden h-5 w-px bg-gold-500/20 sm:block" />

              <p className="text-sm text-ivory/60">
                Beauty, elegance & confidence — all in one place.
              </p>

              <span className="hidden h-5 w-px bg-gold-500/20 sm:block" />

              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 fill-blush-400/20 text-blush-300" />

                <span className="text-xs uppercase tracking-[0.15em] text-blush-300">
                  Made For You
                </span>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
