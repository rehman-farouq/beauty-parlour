"use client";

import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  Sparkles,
  CalendarCheck,
} from "lucide-react";
import { m, type Variants } from "framer-motion";

const SALON_ADDRESS = "HRCV+4F7, Tapiala, Pakistan";

const MAPS_DIRECTIONS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent(SALON_ADDRESS);

const MAPS_EMBED_URL =
  "https://www.google.com/maps?q=" +
  encodeURIComponent(SALON_ADDRESS) +
  "&output=embed";

const contactInfo = [
  {
    icon: MapPin,
    label: "Our Location",
    title: "Visit Our Salon",
    text: "House #373, Black Gate, Near Ada, Tapiala, Pakistan",
  },
  {
    icon: Phone,
    label: "Get In Touch",
    title: "Call Us",
    text: "+92 3465787588",
  },
  {
    icon: Clock,
    label: "Opening Hours",
    title: "We're Open",
    text: "Mon – Sun: 9:00 AM – 12:00 PM",
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

const item: Variants = {
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

export default function VisitUs() {
  return (
    <section
      id="visit"
      className="relative overflow-hidden bg-wine-950 py-20 sm:py-24"
    >
      {/* Background Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 h-96 w-96 rounded-full bg-gold-500/5 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blush-400/5 blur-3xl"
      />

      {/* Decorative Stars */}
      <span
        aria-hidden="true"
        className="absolute left-[8%] top-[25%] text-gold-500/20"
      >
        ✦
      </span>

      <span
        aria-hidden="true"
        className="absolute right-[8%] top-[18%] text-gold-500/20"
      >
        ✦
      </span>

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        {/*HEADER*/}

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
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-10 bg-gold-500/40" />

            <Sparkles className="h-4 w-4 text-gold-400" />

            <span className="h-px w-10 bg-gold-500/40" />
          </div>

          <h2 className="font-display text-4xl text-gradient-gold sm:text-5xl">
            Visit <span className="font-script text-blush-400">Us</span>
          </h2>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-gold-500/30" />

            <span className="text-sm text-gold-400">♥</span>

            <span className="h-px w-12 bg-gold-500/30" />
          </div>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-ivory/60 sm:text-base">
            Step into a world of beauty, elegance, and relaxation. We&apos;d
            love to welcome you at Anabia&apos;s Beauty Parlour.
          </p>
        </m.div>

        {/*CONTACT INFO CARDS*/}

        <m.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mt-12 grid gap-5 md:grid-cols-3"
        >
          {contactInfo.map((info) => {
            const Icon = info.icon;

            return (
              <m.div
                key={info.title}
                variants={item}
                whileHover={{
                  y: -7,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group"
              >
                <div className="gilt-card relative h-full overflow-hidden rounded-2xl border border-gold-500/15 bg-wine-900/50 p-7 text-center backdrop-blur-sm transition-all duration-300 group-hover:border-gold-500/40 group-hover:bg-wine-900/70">
                  {/* Top Line */}
                  <div className="absolute left-1/2 top-0 h-px w-0 -translate-x-1/2 bg-gold-400 transition-all duration-500 group-hover:w-1/2" />

                  {/* Icon */}
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold-500/25 bg-gold-500/5 transition-all duration-300 group-hover:border-gold-500/50 group-hover:bg-gold-500/10">
                    <Icon
                      className="h-6 w-6 text-gold-400 transition-transform duration-300 group-hover:scale-110"
                      strokeWidth={1.4}
                    />
                  </div>

                  {/* Label */}
                  <p className="mt-5 text-[10px] font-medium uppercase tracking-[0.2em] text-gold-400">
                    {info.label}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 font-display text-xl text-ivory">
                    {info.title}
                  </h3>

                  {/* Description */}
                  <p className="mx-auto mt-2 max-w-[240px] text-sm leading-6 text-ivory/55">
                    {info.text}
                  </p>
                </div>
              </m.div>
            );
          })}
        </m.div>

        {/*GOOGLE MAP */}

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
            delay: 0.1,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mt-8"
        >
          <div className="gilt-card relative overflow-hidden rounded-2xl border border-gold-500/15">
            <iframe
              title="Anabia's Beauty Parlour Location"
              src={MAPS_EMBED_URL}
              width="100%"
              height="360"
              style={{
                border: 0,
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[15%]"
            />
          </div>
        </m.div>

        {/*APPOINTMENT CTA*/}

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
            delay: 0.15,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto mt-10 max-w-4xl"
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold-500/25 bg-gradient-to-r from-wine-900/80 via-wine-800/60 to-wine-900/80 px-6 py-8 backdrop-blur-sm sm:px-10 sm:py-9">
            {/* Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute left-1/2 top-0 h-32 w-64 -translate-x-1/2 rounded-full bg-gold-500/5 blur-3xl"
            />

            {/* Top Border */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-gold-500/70 to-transparent" />

            <div className="relative flex flex-col items-center justify-between gap-6 sm:flex-row">
              {/* Text */}
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center gap-2 sm:justify-start">
                  <CalendarCheck className="h-5 w-5 text-gold-400" />

                  <span className="text-xs font-medium uppercase tracking-[0.18em] text-gold-400">
                    Appointments Available
                  </span>
                </div>

                <h3 className="mt-2 font-display text-2xl text-ivory sm:text-3xl">
                  Ready to Feel Beautiful?
                </h3>

                <p className="mt-2 text-sm text-ivory/55">
                  Book your appointment today and let us take care of you.
                </p>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3">
                {/* Call Button */}
                <m.a
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(212,175,55,0.25)",
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href="tel:+923456920533"
                  className="inline-flex items-center gap-2 rounded-full bg-gold-500 px-6 py-3 text-sm font-medium tracking-wide text-wine-950 transition-colors hover:bg-gold-400"
                >
                  <Phone className="h-4 w-4" />
                  Call to Book
                </m.a>

                {/* Directions Button */}
                <m.a
                  whileHover={{
                    scale: 1.05,
                  }}
                  whileTap={{
                    scale: 0.96,
                  }}
                  href={MAPS_DIRECTIONS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-ivory/20 px-6 py-3 text-sm font-medium tracking-wide text-ivory transition-all hover:border-gold-500 hover:text-gold-400"
                >
                  <Navigation className="h-4 w-4" />
                  Get Directions
                </m.a>
              </div>
            </div>
          </div>
        </m.div>

        {/*LADIES ONLY*/}

        <m.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
          }}
          className="mt-8 flex items-center justify-center gap-3 text-center"
        >
          <span className="h-px w-8 bg-gold-500/20" />

          <p className="text-xs uppercase tracking-[0.15em] text-ivory/35">
            For Ladies Only
          </p>

          <span className="h-px w-8 bg-gold-500/20" />
        </m.div>
      </div>
    </section>
  );
}
