"use client";
import React from "react";
import Image from "next/image";

import { motion, easeInOut } from "framer-motion";
import { useState, RefObject, useEffect, useRef } from "react";
const Mouse = () => {
  function useFollowPointer(ref: RefObject<HTMLElement>) {
    const [point, setPoint] = useState({ x: 0, y: 0 });

    useEffect(() => {
      if (!ref.current) return;

      const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
        const element = ref.current!;

        let x = clientX - element.offsetLeft - element.offsetWidth / 2;

        let y = clientY - element.offsetTop - element.offsetHeight / 2;

        setPoint({ x, y });
      };

      window.addEventListener("pointermove", handlePointerMove);

      return () => window.removeEventListener("pointermove", handlePointerMove);
    }, [ref]);

    return point;
  }

  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <motion.h1 className="text-[25px] md:text-[50px] font-bold md:w-4/5 w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
          This is Mr. Chassy and Mrs. Chassy. Wherever Mrs. Chassy goes, Mr.
          Chassy would follow. Run if you can.
        </span>
      </motion.h1>
      <motion.div
        className=" absolute h-[150px] w-auto md:h-[300px] md:w-auto z-[1]"
        ref={ref}
        animate={{ x, y }}
        transition={{
          easeInOut,
          type: "spring",
          damping: 3,
          stiffness: 30,
          restDelta: 0.001,
          mass: 1,
        }}
      >
        <Image
          src={"/mouse.webp"}
          alt="Mr. Chassy"
          height={300}
          width={300}
          className="pointer-events-none w-full h-full relative object-contain"
        />
      </motion.div>
      <motion.div
        className=" absolute h-[150px] w-auto md:h-[300px] md:w-auto z-[1] "
        drag
        ref={ref}
        animate={{ x, y }}
        transition={{
          easeInOut,
        }}
      >
        <Image
          src={"/mouse-female.webp"}
          alt="Mrs. Chassy"
          height={300}
          width={300}
          className="pointer-events-none w-full h-full relative object-contain"
        />
      </motion.div>
    </div>
  );
};

export default Mouse;
