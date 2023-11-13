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
      <motion.h1 className="text-[50px] font-bold w-full text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
          This is Mr. Chassy and Mrs. Chassy. Wherever Mrs. Chassy goes, Mr.
          Chassy would follow. Run if you can.
        </span>
      </motion.h1>
      <motion.div
        className="h-fit w-fit absolute"
        ref={ref}
        animate={{ x, y }}
        transition={{
          easeInOut,
          type: "spring",
          damping: 3,
          stiffness: 30,
          restDelta: 0.001,
        }}
      >
        <Image src={"/mouse.png"} height={300} width={300} alt="Mr. Chassy" />
      </motion.div>
      <motion.div
        className="h-fit w-fit absolute"
        drag
        ref={ref}
        animate={{ x, y }}
        transition={{
          easeInOut,
        }}
      >
        <Image
          src={"/mouse-female.png"}
          height={300}
          width={300}
          alt="Mrs. Chassy"
          className=""
        />
      </motion.div>
    </div>
  );
};

export default Mouse;
