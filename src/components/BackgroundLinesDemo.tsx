import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import Link from "next/link";

export function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
        Manhas AC Services, <br /> Jammu, India
      </h2>
      <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
        Enjoy premium AC servicing from certified experts who ensure top-notch performance, efficient cooling, and lasting comfort for your home or office.
      </p>
      <div className="flex flex-row justify-between">
        <Link href={"https://www.google.com"} className="border text-xs min-[350px]:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mt-5 mx-2">
          <span>Location</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
        <Link href={"https://www.google.com"} className="border text-xs min-[350px]:text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full mt-5 mx-2">
          <span>Location</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
        </Link>
      </div>
    </BackgroundLines>
  );
}
