"use client";
import CursorImage from "../assets/images/cursor.png";
import MessageImage from "../assets/images/message.png";
import Image from "next/image";
import { motion } from "framer-motion";

const buttonVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05 },
  tap: { scale: 0.95 },
};

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white bg-[linear-gradient(to_bottom,#000,#200D42_34%,#4F21A1_65%,#A46EDB_82%)] py-[72px] sm:py-24">
      <div className="container relative z-10 mx-auto px-10">
        <div className="flex justify-center -mt-4 sm:-mt-6">
          <div className="relative inline-flex text-center">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight tracking-tight">
              Opsync
            </h1>

            <motion.div
              className="absolute right-[580px] top-[120px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={CursorImage}
                alt="Cursor"
                height={200}
                width={200}
                className="max-w-none pointer-events-none select-none"
                draggable={false}
              />
            </motion.div>

            <motion.div
              className="absolute left-[580px] top-[120px] hidden sm:inline"
              drag
              dragSnapToOrigin
            >
              <Image
                src={MessageImage}
                alt="Message"
                height={200}
                width={200}
                className="max-w-none pointer-events-none select-none"
                draggable={false}
              />
            </motion.div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-center max-w-2xl px-4">
            A modern project intelligence platform built for teams who move fast
            and think smart. From marketing campaigns to product launches,
            Tactiq gives you a focused, distraction-free space to plan, track,
            and ship work that matters.
          </p>
        </div>

        <div className="flex justify-center mt-10 gap-4 flex-wrap">
          <motion.button
            className="bg-black text-white py-3 px-6 rounded-lg font-semibold shadow-none hover:shadow-lg transition"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Learn More
          </motion.button>

          <motion.button
            className="bg-white text-black py-3 px-6 rounded-lg font-semibold shadow-none hover:shadow-lg transition"
            variants={buttonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
          >
            Get for free
          </motion.button>
        </div>
      </div>
    </section>
  );
};
