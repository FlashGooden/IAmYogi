import React from "react";
import { motion } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    });

    // @ts-ignore
    observer.observe(sectionRef);

    return () => {
      observer.disconnect();
    };
  }, []);

  const sectionRef = React.useRef<HTMLDivElement>();

  const variants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      // @ts-ignore
      ref={sectionRef}
      animate={isVisible ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default Section;
