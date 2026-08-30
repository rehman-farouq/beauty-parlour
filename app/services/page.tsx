"use client";

import { ArrowRight, CheckCircle2, Crown, Sparkles, Star } from "lucide-react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    id: "bridal-makeup",
    title: "Bridal Makeup",
    subtitle:
      "Your wedding only happens once — your makeup should be unforgettable.",
    image: "/images/services/bridal-makeup.webp",
    offer: [
      "Bridal Makeup for Barat, Walima & Mehndi",
      "HD Makeup",
      "Airbrush Makeup",
      "Soft Glam Bridal Looks",
      "Traditional Pakistani Bridal Styles",
    ],
    perfectFor: [
      "Barat brides",
      "Walima elegance",
      "Engagements",
      "Nikah soft glam",
    ],
    description:
      "Our artists create elegant bridal looks with premium products, beautiful detailing and professional techniques so you feel confident on your special day.",
  },

  {
    id: "party-event-makeup",
    title: "Party & Special Event Makeup",
    subtitle:
      "From birthdays to big family weddings — looks that fit every special moment.",
    image: "/images/services/special-events.webp",
    offer: [
      "HD Party Makeup",
      "Soft Glam",
      "Smokey Eyes",
      "Mehndi Event Makeup",
      "Reception & Formal Styling",
    ],
    perfectFor: [
      "Mehndi functions",
      "Eid",
      "Family weddings",
      "Corporate events",
    ],
    description:
      "Love a natural look? Or maybe you want to go bold and glamorous? We match your makeup to your outfit, your skin, and your event.",
  },

  {
    id: "hair-styling",
    title: "Hair Styling",
    subtitle: "Healthy hair changes everything.",
    image: "/images/services/hair-styling.webp",
    offer: [
      "Trendy Haircuts & Layers",
      "Blow Dry & Styling",
      "Hair Coloring",
      "Hair Treatments",
      "Bridal & Event Hairstyles",
    ],
    perfectFor: [
      "Fresh cuts",
      "Color transformations",
      "Bridal styling",
      "Everyday elegance",
    ],
    description:
      "From polished everyday styles to glamorous event hair, our professional styling services are designed to keep your hair looking beautiful and healthy.",
  },

  {
    id: "skin-care",
    title: "Skin Care",
    subtitle: "Healthy, glowing skin starts with the right care.",
    image: "/images/services/skin-care.webp",
    offer: [
      "Deep Cleansing Facials",
      "Glow Treatments",
      "Hydrating Facials",
      "Anti-Aging Treatments",
      "Skin Refresh Treatments",
    ],
    perfectFor: [
      "Bridal preparation",
      "Dull skin",
      "Special occasions",
      "Regular skincare",
    ],
    description:
      "Give your skin the care it deserves with relaxing treatments designed to refresh, hydrate and bring out your natural glow.",
  },

  {
    id: "makeup-skincare",
    title: "Makeup & Skincare",
    subtitle: "Everyday beauty made effortless.",
    image: "/images/services/makeup-skincare.png",
    offer: [
      "Everyday Makeup",
      "Natural Makeup Looks",
      "Skincare Essentials",
      "Makeup Consultation",
      "Beauty Preparation",
    ],
    perfectFor: [
      "Daily looks",
      "Office makeup",
      "Casual events",
      "Beauty essentials",
    ],
    description:
      "Simple, elegant and effortless beauty solutions for women who want to look polished and confident every day.",
  },

  {
    id: "nail-art",
    title: "Nail Art",
    subtitle: "Beautiful details that complete your look.",
    image: "/images/services/nail-art.webp",
    offer: [
      "Manicure",
      "Pedicure",
      "Custom Nail Designs",
      "Bridal Nail Art",
      "Elegant Nail Finishes",
    ],
    perfectFor: ["Brides", "Parties", "Eid", "Everyday elegance"],
    description:
      "Complete your beauty look with beautifully finished nails, from timeless elegance to creative custom designs.",
  },

  {
    id: "body-treatments",
    title: "Body Treatments",
    subtitle: "Relax, refresh and feel your best.",
    image: "/images/services/body-treatments.png",
    offer: [
      "Relaxing Massage",
      "Body Treatments",
      "Spa Packages",
      "Wellness Sessions",
      "Relaxation Treatments",
    ],
    perfectFor: ["Stress relief", "Self-care", "Special occasions", "Wellness"],
    description:
      "Take some time for yourself with relaxing treatments designed to help you unwind and enjoy a peaceful beauty experience.",
  },
];

/* ANIMATION */

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

/* PAGE */

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="relative min-h-screen overflow-hidden bg-wine-radial pt-16 text-ivory">
        {/* AMBIENT GOLD FLECKS */}

        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 10% 20%, #d4af37 0, transparent 60%), radial-gradient(1.5px 1.5px at 80% 15%, #d4af37 0, transparent 60%), radial-gradient(1px 1px at 60% 70%, #e8cd7a 0, transparent 60%), radial-gradient(1.5px 1.5px at 30% 85%, #d4af37 0, transparent 60%)",
          }}
        />

        {/* HERO */}

        <section className="relative px-5 pb-16 pt-16 sm:pb-20 sm:pt-24">
          <div className="mx-auto max-w-4xl text-center">
            {/* Crown Decoration */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-5 flex items-center justify-center gap-3"
            >
              <span className="h-px w-12 bg-gradient-to-r from-transparent to-gold-500" />

              <Crown className="h-5 w-5 text-gold-400" strokeWidth={1.4} />

              <span className="h-px w-12 bg-gradient-to-l from-transparent to-gold-500" />
            </motion.div>

            {/* Salon Name */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xs font-medium uppercase tracking-[0.35em] text-gold-400 sm:text-sm"
            >
              Anabia&apos;s Beauty Parlour
            </motion.p>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-4 font-display text-5xl leading-none text-gradient-gold sm:text-7xl"
            >
              Our <span className="font-script text-blush-400">Services</span>
            </motion.h1>

            {/* Description */}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/70 sm:text-base"
            >
              Discover premium beauty experiences crafted especially for women.
              From bridal transformations to everyday elegance, every service is
              designed with care, beauty and confidence in mind.
            </motion.p>

            {/* Divider */}

            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mx-auto mt-7 flex max-w-xs items-center justify-center gap-3"
            >
              <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold-500/60" />

              <Sparkles className="h-4 w-4 text-gold-400" />

              <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold-500/60" />
            </motion.div>
          </div>
        </section>

        {/* SERVICES */}

        <section className="relative px-5 pb-24 sm:px-8">
          <div className="mx-auto max-w-6xl space-y-9">
            {services.map((service, index) => {
              const reversed = index % 2 !== 0;

              return (
                <motion.article
                  key={service.id}
                  id={service.id}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{
                    once: true,
                    amount: 0.15,
                  }}
                  className="gilt-card group relative scroll-mt-24 overflow-hidden rounded-xl bg-wine-900/60"
                >
                  <div
                    className={`grid min-h-[470px] grid-cols-1 lg:grid-cols-2 ${
                      reversed ? "lg:[&>*:first-child]:order-2" : ""
                    }`}
                  >
                    {/* IMAGE */}

                    <div className="relative min-h-[330px] overflow-hidden lg:min-h-[470px]">
                      <img
                        src={service.image}
                        alt={`${service.title} at Anabia's Beauty Parlour`}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
                      />

                      {/* Image Overlay */}

                      <div className="absolute inset-0 bg-gradient-to-t from-wine-950/80 via-wine-950/10 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:via-transparent lg:to-wine-950/40" />

                      {/* Premium Badge */}

                      <div className="absolute bottom-5 left-5 flex items-center gap-2 rounded-full border border-gold-400/30 bg-wine-950/60 px-4 py-2 text-xs uppercase tracking-[0.18em] text-gold-300 backdrop-blur-md">
                        <Star className="h-3.5 w-3.5 fill-gold-400 text-gold-400" />
                        Premium Experience
                      </div>
                    </div>

                    {/* CONTENT */}

                    <div className="relative flex flex-col justify-center overflow-hidden bg-wine-950/40 p-7 sm:p-10 lg:p-12">
                      {/* Decorative Glow */}

                      <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />

                      <div className="relative">
                        {/* Label */}

                        <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                          Signature Service
                        </p>

                        {/* Title */}

                        <h2 className="font-display text-3xl leading-tight text-ivory sm:text-4xl">
                          {service.title}
                        </h2>

                        {/* Subtitle */}

                        <p className="mt-2 font-script text-xl leading-relaxed text-blush-400 sm:text-2xl">
                          {service.subtitle}
                        </p>

                        {/* Lists */}

                        <div className="mt-7 grid grid-cols-1 gap-7 sm:grid-cols-2">
                          {/* WE OFFER */}

                          <div>
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                              We Offer
                            </p>

                            <ul className="space-y-2.5">
                              {service.offer.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2.5 text-sm leading-5 text-ivory/85"
                                >
                                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-gold-400" />

                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* PERFECT FOR */}

                          <div>
                            <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.2em] text-gold-400">
                              Perfect For
                            </p>

                            <ul className="space-y-2.5">
                              {service.perfectFor.map((item) => (
                                <li
                                  key={item}
                                  className="flex items-start gap-2 text-sm leading-5 text-ivory/80"
                                >
                                  <span className="text-gold-400">•</span>

                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>

                        {/* Description */}

                        <p className="mt-7 max-w-xl text-sm leading-6 text-ivory/60">
                          {service.description}
                        </p>

                        {/* Book Now */}

                        <motion.a
                          whileHover={{ x: 4 }}
                          whileTap={{ scale: 0.97 }}
                          href="#visit"
                          className="mt-7 inline-flex w-fit items-center gap-3 rounded-lg border border-gold-400/50 bg-gold-500/5 px-5 py-3 text-xs font-bold uppercase tracking-[0.12em] text-gold-300 transition-all hover:border-gold-400 hover:bg-gold-500 hover:text-wine-950"
                        >
                          Book Now
                          <ArrowRight className="h-4 w-4" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>

        {/* CTA */}

        <section className="relative px-5 pb-24 sm:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="gilt-card relative mx-auto max-w-5xl overflow-hidden rounded-2xl bg-wine-radial px-6 py-12 text-center sm:px-12"
          >
            {/* Glow */}

            <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-80 -translate-x-1/2 rounded-full bg-gold-500/10 blur-3xl" />

            {/* Icon */}

            <Sparkles className="relative mx-auto h-7 w-7 text-gold-400" />

            {/* Heading */}

            <h2 className="relative mt-4 font-display text-3xl text-gradient-gold sm:text-4xl">
              Ready for Your Beauty Transformation?
            </h2>

            {/* Description */}

            <p className="relative mx-auto mt-3 max-w-xl text-sm leading-6 text-ivory/65">
              Let us create a beautiful experience designed especially for you.
            </p>

            {/* CTA Button */}

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="#visit"
              className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-semibold text-wine-950 transition hover:bg-gold-400"
            >
              Book Your Appointment
              <ArrowRight className="h-4 w-4" />
            </motion.a>
          </motion.div>
        </section>
      </main>

      <Footer />
    </>
  );
}
