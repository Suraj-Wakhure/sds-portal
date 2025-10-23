import { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from "framer-motion";

import './TiltedCard.css';

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2
};

export default function TiltedCard({
  imageSrc,
  altText = 'Tilted card image',
  captionText = '',
  containerHeight = '300px',
  containerWidth = '100%',
  imageHeight = '300px',
  imageWidth = '300px',
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false
}) {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mvRotateX = useMotionValue(0);
  const mvRotateY = useMotionValue(0);
  const rotateX = useSpring(mvRotateX, springValues);
  const rotateY = useSpring(mvRotateY, springValues);
  const scale = useSpring(useMotionValue(1), springValues);
  const opacity = useSpring(useMotionValue(0));
  const rotateFigcaption = useSpring(useMotionValue(0), {
    stiffness: 350,
    damping: 30,
    mass: 1
  });

  const [lastY, setLastY] = useState(0);

  function handleMouse(e) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    mvRotateX.set(rotationX);
    mvRotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    mvRotateX.set(0);
    mvRotateY.set(0);
    rotateFigcaption.set(0);
  }

  return (
    <figure
      ref={ref}
      className="tilted-card-figure"
      style={{
        height: containerHeight,
        width: containerWidth,
        overflow: 'visible',
        cursor: 'default',
        userSelect: 'none'
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div
          className="tilted-card-mobile-alert"
          style={{ cursor: 'default', userSelect: 'none' }}
        ></div>
      )}

      <motion.div
        className="tilted-card-inner"
        style={{
          width: imageWidth,
          height: imageHeight,
          rotateX,
          rotateY,
          scale,
          transformOrigin: '50% 50%',
          cursor: 'default',
          userSelect: 'none'
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="tilted-card-img"
          style={{
            width: imageWidth,
            height: imageHeight,
            cursor: 'default',
            userSelect: 'none'
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="tilted-card-overlay"
            style={{
              pointerEvents: 'auto',
              cursor: 'default',
              userSelect: 'none'
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

   {showTooltip && (
  <motion.figcaption
    className="tilted-card-caption"
    style={{
      x,
      y,
      opacity,
      rotate: rotateFigcaption,
      cursor: 'default',
      userSelect: 'none',
      pointerEvents: 'auto'    
    }}
  >
    {captionText}
  </motion.figcaption>
)}

    </figure>
  );
}
