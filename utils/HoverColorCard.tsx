import React from "react";
import { motion } from "framer-motion";

interface HoverColorProps {
  children: React.ReactNode;
  color: string;
  className?: string;
  opacity?: number;
}

const HoverColor: React.FC<HoverColorProps> = ({
  children,
  color,
  className,
  opacity = 0.9,
}) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const variants = {
    hidden: {
      backgroundColor: "transparent",
      opacity: 0,
    },
    hovered: {
      backgroundColor: color,
      opacity: opacity,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      whileHover={isHovered ? "hovered" : "hidden"}
      variants={variants}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default HoverColor;
