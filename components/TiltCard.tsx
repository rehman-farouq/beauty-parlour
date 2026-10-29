"use client";

import {
  m,
  useMotionValue,
  useSpring,
  useTransform,
  type Variants,
} from "framer-motion";

type Props = {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
};

/** Mouse-follow 3D tilt (desktop only). Uses transform only → GPU friendly. */
export default function TiltCard({ children, className, variants }: Props) {
  const px = useMotionValue(0.5);
  const py = useMotionValue(0.5);
  const spring = { stiffness: 220, damping: 22, mass: 0.6 };
  const rotateX = useSpring(useTransform(py, [0, 1], [6, -6]), spring);
  const rotateY = useSpring(useTransform(px, [0, 1], [-6, 6]), spring);

  return (
    <m.div
      variants={variants}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      onPointerMove={(e) => {
        if (e.pointerType !== "mouse") return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width);
        py.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        px.set(0.5);
        py.set(0.5);
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
