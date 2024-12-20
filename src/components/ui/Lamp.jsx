import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import side2 from "../../assets/side2.png";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl md:text-4xl lg:text-7xl font-medium tracking-tight text-transparent z-50"
      >
        FITNESS RECONFIGURED
        <br /> WELCOME BE THE PART OF #1 FITNESS STUDIO OF THE REGION
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative z-10 w-full max-w-lg"
      ></motion.div>
    </LampContainer>
  );
}

const LampContainer = ({ children, className = "" }) => {
  const [isLampActive, setIsLampActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLampActive(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerClasses =
    `relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-black w-full rounded-md z-0 ${
      isLampActive ? "lamp-active" : ""
    } ${className}`.trim();

  return (
    <div className={containerClasses}>
      <div className="relative flex w-full flex-1 scale-y-125 items-center justify-center isolate z-0">
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "80%" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            maxWidth: "30rem"
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[80%] bg-gradient-conic from-cyan-50 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]"
        >
          <div className="absolute w-[100%] left-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div className="absolute w-40 h-[100%] left-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "8rem" }}
          whileInView={{ opacity: 1, width: "80%" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
            maxWidth: "30rem"
          }}
          className="absolute inset-auto left-1/2 h-56 w-[80%] bg-gradient-conic from-transparent via-transparent to-cyan-50 text-white [--conic-position:from_290deg_at_center_top]"
        >
          <div className="absolute w-40 h-[100%] right-0 bg-black bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div className="absolute w-[100%] right-0 bg-black h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-black blur-2xl"></div>
        <div className="absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md"></div>
        <div className="absolute inset-auto z-50 h-36 w-[80%] max-w-[28rem] -translate-y-1/2 rounded-full bg-yellow-100 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "60%" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-[60%] max-w-[16rem] -translate-y-[6rem] rounded-full bg-yellow-200 blur-2xl"
        ></motion.div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "80%" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[80%] max-w-[30rem] -translate-y-[7rem] bg-yellow-400"
        ></motion.div>
        <div className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-black"></div>
        <img src={side2} alt="Lamp" className="brightness-increase mt-96 w-[80%] max-w-[30rem] h-auto" />
      </div>
      <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5 w-full">
        {children}
      </div>
    </div>
  );
};

export default LampDemo;