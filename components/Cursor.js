import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor({ cursorVariant }) {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      mixBlendMode: "difference",
    },
    imgCursor: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale:2,
    },
  };

  return (
    <motion.div
      className="bg-white h-[16px] w-[16px] rounded-[100%] fixed top-0 left-0 pointer-events-none z-50"
      transition={{
        duration: 0,
        bounce: 0,
      }}
      variants={variants}
      animate={cursorVariant? cursorVariant : "default"}
    />
  );
}
