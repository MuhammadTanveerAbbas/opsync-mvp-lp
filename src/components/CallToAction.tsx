"use client";

import HelixImage from "../assets/images/helix2.png";
import EmojiImage from "../assets/images/emojistar.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <div className="bg-black text-white py-16 sm:py-24" ref={containerRef}>
      <div className="relative container max-w-3xl mx-auto px-4 overflow-visible">
        {/* Floating Decorations */}
        <motion.div
          style={{ translateY }}
          className="hidden sm:block absolute top-8 left-full ml-10"
        >
          <Image src={HelixImage} alt="Helix" width={80} height={80} />
        </motion.div>

        <motion.div
          style={{ translateY }}
          className="hidden sm:block absolute -top-24 right-full mr-10"
        >
          <Image src={EmojiImage} alt="Emoji Star" width={80} height={80} />
        </motion.div>

        {/* CTA Content */}
        <h2 className="font-bold text-4xl sm:text-6xl tracking-tight text-center">
          Get Instant Access
        </h2>

        <p className="text-lg sm:text-xl text-white/70 mt-5 text-center">
          Join the waitlist and be the first to try the future of team
          productivity.
        </p>

        {/* Email Form */}
        <form className="mt-10 flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="h-12 w-full bg-white/20 text-white rounded-lg px-5 font-medium placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#5D2CA8]"
            required
          />
          <button
            type="submit"
            className="h-12 w-full sm:w-auto bg-white text-black rounded-lg px-5 font-semibold transition hover:scale-105 active:scale-95"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};
