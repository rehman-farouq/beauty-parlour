"use client";

import { ArrowRight, Crown, Sparkles, Star, Heart, Check } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.15,
    },
  },
};

const item: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[720px] overflow-hidden bg-wine-radial pt-28 pb-20 sm:min-h-[780px] sm:pt-36 sm:pb-28"
    >
      {/* BACKGROUND DECORATIONS*/}

      {/* Gold particles */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(1.5px 1.5px at 10% 20%, #d4af37 0, transparent 60%), radial-gradient(1.5px 1.5px at 80% 15%, #d4af37 0, transparent 60%), radial-gradient(1px 1px at 60% 70%, #e8cd7a 0, transparent 60%), radial-gradient(1.5px 1.5px at 30% 85%, #d4af37 0, transparent 60%), radial-gradient(1px 1px at 90% 75%, #e8cd7a 0, transparent 60%), radial-gradient(1px 1px at 45% 35%, #d4af37 0, transparent 60%)",
        }}
      />

      {/* Left ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-gold-500/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Right ambient glow */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-blush-400/10 blur-3xl"
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.5, 0.25, 0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Decorative ring */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute left-[8%] top-[25%] hidden h-32 w-32 rounded-full border border-gold-500/10 lg:block"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute right-[8%] top-[20%] hidden h-20 w-20 rounded-full border border-blush-400/10 lg:block"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* MAIN CONTENT*/}

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 sm:px-8 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
        {/* IMAGE SIDE */}

        <motion.div
          initial={{
            opacity: 0,
            x: -60,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.9,
            ease: "easeOut",
          }}
          className="order-2 flex justify-center md:order-1 md:justify-start"
        >
          <div className="relative w-64 sm:w-80 lg:w-[350px]">
            {/* Outer golden glow */}
            <motion.div
              aria-hidden="true"
              className="absolute -inset-5 rounded-[120px] bg-gold-500/10 blur-3xl"
              animate={{
                opacity: [0.3, 0.6, 0.3],
                scale: [0.95, 1.05, 0.95],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Image Frame */}
            <motion.div
              whileHover={{
                y: -8,
              }}
              transition={{
                duration: 0.35,
                ease: "easeOut",
              }}
              className="gilt-card relative aspect-[3/4] overflow-hidden rounded-t-[160px] rounded-b-[45px] border border-gold-500/30 bg-gradient-to-b from-wine-700 via-wine-800 to-wine-950 shadow-2xl shadow-black/50"
            >
              {/* Actual Image */}
              <img
                src="/images/hero-bride.png"
                alt="Bridal makeup by Anabia's Beauty Parlour"
                className="h-full w-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
              />

              {/* Image overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-wine-950/75 via-transparent to-wine-950/10" />

              {/* Soft golden overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-gold-500/5 via-transparent to-blush-400/10" />

              {/* Inner golden frame */}
              <div className="pointer-events-none absolute inset-3 rounded-t-[145px] rounded-b-[35px] border border-gold-500/25" />

              {/* Top shine */}
              <motion.div
                aria-hidden="true"
                className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                animate={{
                  x: ["0%", "500%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Floating sparkle */}
            <motion.div
              className="absolute -right-5 top-8 flex h-12 w-12 items-center justify-center rounded-full border border-gold-500/30 bg-wine-950/90 shadow-xl backdrop-blur-md"
              animate={{
                rotate: [0, 8, -8, 0],
                scale: [1, 1.08, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-6 w-6 text-gold-400" />
            </motion.div>

            {/* Small floating sparkle */}
            <motion.div
              className="absolute -left-4 top-24"
              animate={{
                y: [0, -10, 0],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Sparkles className="h-5 w-5 text-gold-400" />
            </motion.div>

            {/* Luxury badge */}
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
                duration: 0.6,
              }}
              className="absolute -bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-gold-500/30 bg-wine-950/95 px-5 py-3 shadow-xl backdrop-blur-md"
            >
              <Star className="h-4 w-4 fill-gold-400 text-gold-400" />

              <span className="text-xs font-medium uppercase tracking-[0.14em] text-gold-300">
                Luxury Beauty Experience
              </span>
            </motion.div>

            {/* Bottom shadow */}
            <div
              aria-hidden="true"
              className="absolute -bottom-10 left-1/2 h-14 w-10/12 -translate-x-1/2 rounded-full bg-black/60 blur-2xl"
            />
          </div>
        </motion.div>

        {/* CONTENT SIDE*/}

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-1 text-center md:order-2 md:text-left"
        >
          {/* Crown decoration */}
          <motion.div
            variants={item}
            className="mb-5 flex items-center justify-center gap-3 md:justify-start"
          >
            <span className="hidden h-px w-10 bg-gold-500/50 sm:block" />

            <Crown
              aria-hidden="true"
              className="h-7 w-7 text-gold-400"
              strokeWidth={1.25}
            />

            <span className="h-px w-10 bg-gold-500/50" />
          </motion.div>

          {/* Welcome */}
          <motion.p
            variants={item}
            className="mb-3 text-xs font-medium uppercase tracking-[0.35em] text-gold-400 sm:text-sm"
          >
            Welcome to
          </motion.p>

          {/* Brand Name */}
          <motion.h1
            variants={item}
            className="font-display text-5xl leading-[0.95] text-gradient-gold sm:text-7xl lg:text-8xl"
          >
            Anabia&apos;s
          </motion.h1>

          {/* Business Name */}
          <motion.p
            variants={item}
            className="mt-4 font-display text-lg uppercase tracking-[0.28em] text-ivory sm:text-2xl"
          >
            Beauty Parlour
          </motion.p>

          {/* Decorative line */}
          <motion.div
            variants={item}
            className="mx-auto mt-5 h-px w-24 bg-gradient-to-r from-transparent via-gold-500 to-transparent md:mx-0"
          />

          {/* Main tagline */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-xl font-script text-3xl leading-relaxed text-blush-300 sm:text-4xl md:mx-0"
          >
            Enhancing Beauty,
            <br className="hidden sm:block" />
            Boosting Confidence
          </motion.p>

          {/* Ladies Only Badge */}
          <motion.div
            variants={item}
            className="mt-6 flex justify-center md:justify-start"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/40 bg-gold-500/10 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300 backdrop-blur-sm sm:text-sm">
              <Sparkles className="h-3.5 w-3.5" />
              For Ladies Only
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={item}
            className="mx-auto mt-6 max-w-lg text-sm leading-7 text-ivory/65 sm:text-base md:mx-0"
          >
            Discover a luxurious beauty experience crafted especially for women.
            From bridal transformations to everyday elegance, we help you look
            and feel your absolute best.
          </motion.p>

          {/* Features */}
          <motion.div
            variants={item}
            className="mt-6 flex flex-wrap justify-center gap-x-5 gap-y-2 md:justify-start"
          >
            {[
              "Professional Artists",
              "Premium Products",
              "Hygienic Experience",
            ].map((feature) => (
              <span
                key={feature}
                className="inline-flex items-center gap-1.5 text-xs text-ivory/60"
              >
                <Check className="h-3.5 w-3.5 text-gold-400" />
                {feature}
              </span>
            ))}
          </motion.div>

          {/* Buttons */}
          <motion.div
            variants={item}
            className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start"
          >
            {/* Book Button */}
            <motion.a
              whileHover={{
                scale: 1.04,
                boxShadow: "0 10px 30px rgba(212,175,55,0.18)",
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#visit"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold tracking-wide text-wine-950 shadow-lg shadow-gold-500/10 transition-all hover:bg-gold-400 sm:w-auto"
            >
              <Heart className="h-4 w-4" />
              Book Your Appointment
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>

            {/* Services Button */}
            <motion.a
              whileHover={{
                scale: 1.04,
              }}
              whileTap={{
                scale: 0.97,
              }}
              href="#services"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full border border-ivory/25 bg-ivory/5 px-7 py-3.5 text-sm font-medium tracking-wide text-ivory backdrop-blur-sm transition-all hover:border-gold-500/60 hover:bg-gold-500/10 hover:text-gold-300 sm:w-auto"
            >
              Explore Services
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ivory/40 sm:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.3em]">Discover</span>

        <motion.div
          className="h-8 w-px bg-gradient-to-b from-gold-500/60 to-transparent"
          animate={{
            scaleY: [1, 0.5, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
    </section>
  );
}
