import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function TiltedCard({
  imageSrc,
  altText,
  containerHeight = "400px",
  containerWidth = "100%",
  rotateAmplitude = 10,
  scaleOnHover = 1.05,
  displayOverlayContent = true,
  overlayContent,
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(x, { stiffness: 50, damping: 30 });
  const rotateY = useSpring(y, { stiffness: 50, damping: 30 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    // invert axes to get a natural 3D feel
    x.set((py - 0.5) * rotateAmplitude * 2);
    y.set((px - 0.5) * rotateAmplitude * 2);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: scaleOnHover }}
    >
      {/* 3D-tilt wrapper — applies rotateX/rotateY to the image */}
      <motion.div
        className="w-full h-full"
        style={{
          rotateX,
          rotateY,
          // ensure 3D perspective is visible
          transform: "perspective(1000px)",
          transformStyle: "preserve-3d",
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full block"
          loading="lazy"
        />
      </motion.div>

      {/* Lightweight bottom gradient bar for overlay content (doesn't block image) */}
      {displayOverlayContent && overlayContent && (
        <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center pointer-events-none">
          <div className="w-full max-w-xs p-3 bg-gradient-to-t from-black/40 to-transparent rounded-t-lg backdrop-blur-sm pointer-events-auto">
            {overlayContent}
          </div>
        </div>
      )}
    </motion.div>
  );
}
