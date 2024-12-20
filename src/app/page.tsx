"use client";
import React, { use, useEffect, useState } from "react";
// import logo from "/public/icons.jpg"
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import logo from "/public/google.png"
import mlogo from "/public/maintenance.png"
import Services from "./serviceSection";
import Footer from "./footer";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";

const text = "A little bit more about the links"

export default function Home() {

    return (
        <main className="overflow-hidden flex min-h-screen flex-col items-center justify-between p-2">
          <BackgroundLinesDemo />
          <Services />
          <Footer/>
        </main>
    );
  }