"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
	text: string;
  }[];
}) => {
  const firstRow = products.slice(0, 3);
  const secondRow = products.slice(3, 6);
  // const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 0]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -0]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 100]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="w-full sm:max-w-fit h-[300vh] py-40 antialiased relative flex flex-col self-auto [perspective:500px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex overflow-x-scroll sm:flex-row-reverse sm:overflow-x-visible sm:space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex sm:flex-row overflow-x-scroll sm:overflow-x-visible mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        {/* <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div> */}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="w-full sm:max-w-7xl relative sm:mx-auto py-20 md:py-40 px-4 sm:w-full  left-0 top-0 z-50">
      <h1 className="text-5xl  md:text-7xl font-bold dark:text-white">
        The Ultimate <br /> development studio
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        We build beautiful products with the latest technologies and frameworks.
        We are a team of passionate developers and designers that love to build
        amazing products.
      </p>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
	text:string
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
        maxHeight:"fit-content"
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-72 w-[30rem] relative flex-shrink-0 "
    >
      <Link
        href={product.link}
        style={{maxHeight:"fit-content"}}
        className="block group-hover/product:shadow-2xl"
      >
        <div style={{maxHeight:"fit-content"}} className="object-cover object-left-top absolute w-full inset-0 bg-gray-300 rounded-lg p-3 px-6  group-hover/product:bg-gradient-to-r  group-hover/product:from-blue-500   group-hover/product:to-pink-300">
          <h2 className="left-4 group-hover/product:opacity-100 text-black text-4xl py-4 font-light  group-hover/product:text-white">
            {product.title}
          </h2>
          <Image
            src={product.thumbnail}
            className="w-1/4 bg-white rounded-lg p-5 mb-1 sm:mb-5"
            
            alt={product.title}
          />
          <div className=" h-full w-full mb-3  group-hover/product:text-white  pointer-events-none text-black pt-4">
            {product.text}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};
