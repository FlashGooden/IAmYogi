import { motion } from "framer-motion";
import { ReactNode } from "react";

type FadeAndScaleProps = {
  children: ReactNode;
  className: string;
};

export const SlideInFromRight = ({
  children,
  className,
}: FadeAndScaleProps) => {
  const variants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1, ease: "easeInOut" }}
      style={{ flex: 1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
