"use client";

import React, { useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface TiltedCardProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxTilt?: number;
  scale?: number;
  perspective?: number;
  glareEffect?: boolean;
  glareOpacity?: number;
  onClick?: () => void;
}

/** Renders the live-tracking glare sheen inside the motion tree */
function GlareLayer({
  glareX,
  glareY,
  opacity,
}: {
  glareX: MotionValue<string>;
  glareY: MotionValue<string>;
  opacity: number;
}) {
  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-30 overflow-hidden"
      style={{ borderRadius: "inherit" }}
    >
      <motion.div
        className="absolute inset-0"
        style={{
          background: useTransform(
            [glareX, glareY] as MotionValue[],
            ([x, y]: string[]) =>
              `radial-gradient(circle 380px at ${x} ${y}, rgba(255,255,255,${opacity}), transparent 70%)`
          ),
        }}
      />
    </motion.div>
  );
}

export default function TiltedCard({
  children,
  className = "",
  containerClassName = "",
  maxTilt = 5,
  scale = 1.015,
  perspective = 1400,
  glareEffect = true,
  glareOpacity = 0.08,
  onClick,
}: TiltedCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springCfg = { damping: 28, stiffness: 220, mass: 0.8 };
  const smoothX = useSpring(mouseX, springCfg);
  const smoothY = useSpring(mouseY, springCfg);

  const rotateX = useTransform(smoothY, [0, 1], [maxTilt, -maxTilt]);
  const rotateY = useTransform(smoothX, [0, 1], [-maxTilt, maxTilt]);
  const cardScale = useSpring(isHovered ? scale : 1, springCfg);

  // Live-updated glare position (percentage strings)
  const glareX = useTransform(smoothX, [0, 1], ["10%", "90%"]);
  const glareY = useTransform(smoothY, [0, 1], ["10%", "90%"]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      mouseX.set(Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)));
      mouseY.set(Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)));
    },
    [mouseX, mouseY]
  );

  return (
    <div
      ref={cardRef}
      className={`relative select-none ${containerClassName}`}
      style={{ perspective: `${perspective}px` }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        mouseX.set(0.5);
        mouseY.set(0.5);
      }}
      onClick={onClick}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          scale: cardScale,
          transformStyle: "preserve-3d",
        }}
        className={`relative w-full h-full ${className}`}
      >
        {children}
        {glareEffect && isHovered && (
          <GlareLayer glareX={glareX} glareY={glareY} opacity={glareOpacity} />
        )}
      </motion.div>
    </div>
  );
}
