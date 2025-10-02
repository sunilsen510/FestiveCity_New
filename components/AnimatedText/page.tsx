import React from "react";
import { motion, Variants } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  highlightWords?: string[];       // Words to highlight
  className?: string;
  lineBreakIndices?: number[];     // Indices for <br>
}

const wordVariants: Variants = {
  hidden: { opacity: 0, x: -20, filter: "blur(2px)" },
  visible: { opacity: 1, x: 0, filter: "blur(0px)" },
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  highlightWords = [],
  className = "text-gray-50 text-sm leading-5 mb-5",
  lineBreakIndices = [],
}) => {
  const words = text
  .split(" ")
  .filter((word) => word.trim() !== "");  // remove empty strings


  return (
    <div className={` ${className}`}>
      {words.map((word, index) => {
        const isHighlight = highlightWords.includes(
          word.replace(/[^a-zA-Z0-9]/g, "")
        );

        return (
          <React.Fragment key={index}>
            <motion.span
              className={`inline-block mr-2 ${
                isHighlight ? "text-yellow-color" : ""
              }`}
              variants={wordVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: "easeOut" }}
            >
              {word}
            </motion.span>

            {lineBreakIndices.includes(index) && <br />}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AnimatedText;


