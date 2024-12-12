import React from "react";
import { HeroParallax } from "../components/Hero-parallax";
// import logo from "/public/icons.jpg"
import logo from "/public/google.png"
import mlogo from "/public/maintenance.png"
import Services from "./serviceSection";
import Footer from "./footer";

import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";

const text = "A little bit more about the links"


export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:logo,
    text:text
      // "../public/icons.jpg",
  },
  {
    title: "Reviews",
    link: "https://cursor.so",
    thumbnail:logo,
    text:"Explore our google page and customer reviews",
      // "https://aceternity.com/images/products/thumbnails/new/cursor.png",
  },
  {
    title: "Order Now",
    link: "https://userogue.com",
    thumbnail:mlogo,
    text: "Explore our services and order now!"
      // "https://aceternity.com/images/products/thumbnails/new/rogue.png",
  }, 
  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:logo,
    text:text
      // "https://aceternity.com/images/products/thumbnails/new/editorially.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:logo,
    text:text
      // "https://aceternity.com/images/products/thumbnails/new/editrix.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:logo,
    text:text
      // "https://aceternity.com/images/products/thumbnails/new/pixelperfect.png",
  }
];

export default function Home() {
  return (
      <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-2">
        <BackgroundLinesDemo />
        <Services />
        <Footer/>
      </main>
  );
}