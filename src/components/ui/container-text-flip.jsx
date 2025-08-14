"use client";;
import React, { useState, useEffect, useId } from "react";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";


export function ContainerTextFlip({
  words = ["better", "modern", "beautiful", "awesome"],
  interval = 3000,
  className,
  textClassName,
  animationDuration = 700
}) {
  const id = useId();
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [width, setWidth] = useState(100);
  const textRef = React.useRef(null);

  const updateWidthForWord = () => {
    if (textRef.current) {
      // Add some padding to the text width (30px on each side)
      // @ts-ignore
      const textWidth = textRef.current.scrollWidth + 30;
      setWidth(textWidth);
    }
  };

  useEffect(() => {
    // Update width whenever the word changes
    updateWidthForWord();
  }, [currentWordIndex]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
      // Width will be updated in the effect that depends on currentWordIndex
    }, interval);

    return () => clearInterval(intervalId);
  }, [words, interval]);

  return (
    <motion.p
      layout
      layoutId={`words-here-${id}`}
      animate={{ width }}
      transition={{ duration: animationDuration / 2000 }}
      className={cn(
        "relative inline-block rounded-full px-4 py-1.5 text-center text-sm md:text-xl font-medium text-white backdrop-blur-md bg-white/10 dark:bg-white/10 border border-white/20 shadow-[0_4px_30px_rgba(0,0,0,0.1)]",
        // "[background:linear-gradient(to_bottom,#f3f4f6,#e5e7eb)]",
        // "shadow-[inset_0_-1px_#d1d5db,inset_0_0_0_1px_#d1d5db,_0_4px_8px_#d1d5db]",
        // "dark:[background:linear-gradient(to_bottom,#374151,#1f2937)]",
        // "dark:shadow-[inset_0_-1px_#10171e,inset_0_0_0_1px_hsla(205,89%,46%,.24),_0_4px_8px_#00000052]",
        className
      )}
      key={words[currentWordIndex]}>
      <motion.div
        transition={{
          duration: animationDuration / 1000,
          ease: "easeInOut",
        }}
        className={cn("inline-block", textClassName)}
        ref={textRef}
        layoutId={`word-div-${words[currentWordIndex]}-${id}`}>
        <motion.div className="inline-block">
          {words[currentWordIndex].split("").map((letter, index) => (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                filter: "blur(10px)",
              }}
              animate={{
                opacity: 1,
                filter: "blur(0px)",
              }}
              transition={{
                delay: index * 0.02,
              }}>
              {letter}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>
      {/* <motion.div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full font-semibold text-black
        bg-[#ecfdf5] border border-[#d1fae5]
        shadow-[0_2px_6px_rgba(0,0,0,0.08)] text-sm backdrop-blur-[6px]
        transition-transform duration-300 hover:scale-105">
        for freelance work
      </motion.div> */}
    </motion.p>
    
  );
}
