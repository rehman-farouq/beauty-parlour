import { SERVICE_NAMES } from "@/lib/site";

/** Pure-CSS infinite ticker — pauses on hover. */
export default function Marquee() {
  const row = (
    <>
      {SERVICE_NAMES.map((name) => (
        <span key={name} className="flex shrink-0 items-center gap-8">
          <span className="font-display text-lg uppercase tracking-[0.25em] text-ivory/70 sm:text-xl">
            {name}
          </span>
          <span aria-hidden="true" className="text-gold-500">✦</span>
        </span>
      ))}
    </>
  );

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-gold-500/20 bg-wine-950 py-5"
    >
      <div className="marquee-track flex w-max gap-8 group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-wine-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-wine-950 to-transparent" />
    </div>
  );
}
