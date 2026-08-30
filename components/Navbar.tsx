"use client";

import { useState } from "react";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const links = [
  { href: "/#services", label: "Services" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#boutique", label: "Boutique" },
  { href: "/#visit", label: "Visit Us" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-5 lg:px-6">
        {/*  MAIN NAVBAR  */}
        <nav
          className="
            relative flex h-[68px] items-center justify-between
            overflow-hidden rounded-[20px]
            border border-gold-500/20
            bg-wine-950/85
            px-4
            shadow-[0_15px_45px_rgba(0,0,0,0.18)]
            backdrop-blur-2xl
            sm:px-6
          "
        >
          {/* Top Glow */}
          <div className="pointer-events-none absolute inset-x-16 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/80 to-transparent" />

          {/* Background Glow */}
          <div className="pointer-events-none absolute -left-20 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-gold-500/5 blur-3xl" />

          {/*  LOGO  */}
          <a
            href="/"
            onClick={() => setOpen(false)}
            className="group relative z-10 flex items-center gap-3"
          >
            {/* Logo Image */}
            <span
              className="
                relative flex h-10 w-10 shrink-0
                items-center justify-center
                overflow-hidden
                rounded-full
                border border-gold-400/30
                bg-gradient-to-br from-gold-400/15 to-gold-600/5
                transition-all duration-300
                group-hover:border-gold-400/70
                group-hover:shadow-[0_0_20px_rgba(212,175,55,0.12)]
              "
            >
              <img
                src="/images/icon.png"
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
            </span>

            {/* Logo Text */}
            <span className="flex flex-col">
              <span
                className="
                  font-display text-[20px] leading-none
                  tracking-wide
                  text-gradient-gold
                "
              >
                Anabia&apos;s
              </span>

              <span
                className="
                  mt-1.5
                  text-[8px]
                  font-medium
                  uppercase
                  tracking-[0.28em]
                  text-ivory/45
                "
              >
                Beauty Parlour
              </span>
            </span>
          </a>

          {/*  DESKTOP NAV  */}
          <div className="hidden items-center md:flex">
            <ul className="flex items-center gap-1 rounded-full border border-ivory/5 bg-ivory/[0.025] p-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="
                      group relative flex items-center
                      rounded-full
                      px-4 py-2.5
                      text-[12px]
                      font-medium
                      tracking-wide
                      text-ivory/65
                      transition-all duration-300
                      hover:bg-gold-500/10
                      hover:text-gold-300
                    "
                  >
                    {link.label}

                    {/* Bottom indicator */}
                    <span
                      className="
                        absolute bottom-1.5 left-1/2
                        h-px w-0
                        -translate-x-1/2
                        bg-gold-400
                        transition-all duration-300
                        group-hover:w-5
                      "
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*  DESKTOP CTA  */}
          <a
            href="/#visit"
            className="
              group hidden items-center gap-2
              rounded-full
              border border-gold-400/40
              bg-gradient-to-r from-gold-500/10 to-gold-400/5
              px-5 py-2.5
              text-[10px]
              font-semibold
              uppercase
              tracking-[0.16em]
              text-gold-300
              transition-all duration-300
              hover:border-gold-300
              hover:bg-gold-400
              hover:text-wine-950
              hover:shadow-[0_8px_25px_rgba(212,175,55,0.18)]
              md:inline-flex
            "
          >
            <span>Book Appointment</span>

            <ArrowRight
              className="
                h-3.5 w-3.5
                transition-transform duration-300
                group-hover:translate-x-1
              "
            />
          </a>

          {/*  MOBILE MENU BUTTON  */}
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="
              relative z-10
              flex h-10 w-10
              items-center justify-center
              rounded-full
              border border-ivory/10
              bg-ivory/5
              text-ivory/80
              transition-all duration-300
              hover:border-gold-400/40
              hover:bg-gold-500/10
              hover:text-gold-300
              md:hidden
            "
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="close"
                  initial={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    rotate: 90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  animate={{
                    rotate: 0,
                    opacity: 1,
                    scale: 1,
                  }}
                  exit={{
                    rotate: -90,
                    opacity: 0,
                    scale: 0.7,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>

        {/*  MOBILE MENU  */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: -12,
                scale: 0.98,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="
                mt-2
                overflow-hidden
                rounded-[20px]
                border border-gold-500/20
                bg-wine-950/95
                shadow-[0_20px_50px_rgba(0,0,0,0.3)]
                backdrop-blur-2xl
                md:hidden
              "
            >
              {/* Gold Top Line */}
              <div className="h-px bg-gradient-to-r from-transparent via-gold-400/60 to-transparent" />

              <div className="p-3">
                {/* Mobile Links */}
                <ul className="space-y-1">
                  {links.map((link, index) => (
                    <motion.li
                      key={link.href}
                      initial={{
                        opacity: 0,
                        x: -12,
                      }}
                      animate={{
                        opacity: 1,
                        x: 0,
                      }}
                      transition={{
                        delay: index * 0.05,
                        duration: 0.25,
                      }}
                    >
                      <a
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="
                          group flex items-center justify-between
                          rounded-xl
                          px-4 py-3.5
                          text-[13px]
                          font-medium
                          tracking-wide
                          text-ivory/75
                          transition-all duration-300
                          hover:bg-gold-500/10
                          hover:text-gold-300
                        "
                      >
                        <span>{link.label}</span>

                        <ArrowRight
                          className="
                            h-4 w-4
                            text-gold-400/40
                            transition-all duration-300
                            group-hover:translate-x-1
                            group-hover:text-gold-400
                          "
                        />
                      </a>
                    </motion.li>
                  ))}
                </ul>

                {/* Divider */}
                <div className="my-3 h-px bg-gradient-to-r from-transparent via-gold-500/15 to-transparent" />

                {/* Mobile CTA */}
                <motion.a
                  href="/#visit"
                  onClick={() => setOpen(false)}
                  whileTap={{ scale: 0.98 }}
                  className="
                    group flex w-full
                    items-center justify-center gap-2
                    rounded-xl
                    bg-gradient-to-r
                    from-gold-500
                    to-gold-400
                    px-5 py-3.5
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.16em]
                    text-wine-950
                    shadow-lg
                    shadow-gold-500/10
                    transition-all duration-300
                    hover:shadow-gold-500/20
                  "
                >
                  <span>Book Appointment</span>

                  <ArrowRight
                    className="
                      h-4 w-4
                      transition-transform duration-300
                      group-hover:translate-x-1
                    "
                  />
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
