import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

function Cursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e: any) => {
      setMousePosition({
        x: e.clientX + window.scrollX,
        y: e.clientY + window.scrollY,
      });
    };

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 10,
      y: mousePosition.y - 10,
    },
  };

  return (
    <div>
      <motion.div
        className="rounded-full h-[20px] w-[20px] bg-rose-600 absolute pointer-events-none"
        variants={variants}
        animate="default"
        style={{
          pointerEvents: 'none',  // Ensures the cursor doesn't block interactions
        }}
      ></motion.div>
    </div>
  );
}

export default Cursor;
