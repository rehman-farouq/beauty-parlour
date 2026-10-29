const dots = [
  { l: "6%", s: 4, d: 9, o: 0 }, { l: "14%", s: 3, d: 12, o: 3 },
  { l: "23%", s: 5, d: 10, o: 6 }, { l: "34%", s: 3, d: 13, o: 1 },
  { l: "46%", s: 4, d: 11, o: 4 }, { l: "57%", s: 3, d: 9, o: 7 },
  { l: "66%", s: 5, d: 14, o: 2 }, { l: "74%", s: 3, d: 10, o: 5 },
  { l: "83%", s: 4, d: 12, o: 8 }, { l: "92%", s: 3, d: 11, o: 3 },
];

/** Pure-CSS floating gold dust — no JS, transform/opacity only. */
export default function GoldParticles() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {dots.map((p, i) => (
        <span
          key={i}
          className="gold-dust absolute bottom-0 rounded-full bg-gold-400"
          style={{
            left: p.l,
            width: p.s,
            height: p.s,
            animationDuration: `${p.d}s`,
            animationDelay: `${p.o}s`,
          }}
        />
      ))}
    </div>
  );
}
