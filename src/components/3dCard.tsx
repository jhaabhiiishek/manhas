"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

export function ThreeDCardDemo(e: {
  imgsrc: string | StaticImport; name: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; about: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; expTime: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; rate: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | React.PromiseLikeOfReactNode | null | undefined; 
}) {
  return (
    <CardContainer className="inter-var w-screen sm:w-auto">
      <CardBody route="/services" customProps={e} className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-11/12 sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-l sm:text-xl font-bold text-neutral-600 dark:text-white" 
        >
          {e.name}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-xs sm:text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          {typeof(e.about)=="string"&&(e.about.substring(0,100))}...
        </CardItem>
        <CardItem
          as="button"
          translateZ="60"
          className="text-sm sm:text-m max-w-sm mt-2 font-semibold bg-clip-text text-transparent bg-gradient-to-r  from-blue-700   to-pink-400"
        >
          read more →
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src={e.imgsrc}
            height="1000"
            width="1000"
            className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-5 sm:mt-10">
          <CardItem
            translateZ={20}
            target="__blank"
            className="py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            {e.expTime}
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            Rs. {e.rate}
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
