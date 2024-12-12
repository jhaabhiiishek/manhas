import React from "react";
import twitter from "../../public/twitter.png"
import facebook from "../../public/facebook.png"
import instagram from "../../public/instagram.png"
import Image from "next/image"

export default function Footer() {
  return (
    <div id="footers" style={{ textAlign: "center", padding: "20px", fontSize: "14px" }}>
      <hr
        style={{
          border: "none",
          height: "2px",
          background: "linear-gradient(to right, rgba(0, 0, 255, 0.2), rgba(255,255, 255, 0.5), rgba(0, 0, 255, 0.2))",
          marginBottom: "20px",
        }}
      />
      <div className="mt-6" style={{ display: "flex", justifyContent: "center", gap: "15px", marginBottom: "10px" }}>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image src={twitter.src} width={20} height={20} alt="Twitter" style={{ width: "20px",filter:"invert(1)" }}/>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Image src={facebook.src} alt="Facebook"  width={20} height={20}  style={{ width: "20px",filter:"invert(1)" }} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <Image src={instagram.src} alt="Instagram"  width={20} height={20}  style={{ width: "20px",filter:"invert(1)" }} />
        </a>
      </div>
      <div className="mt-6" style={{color:"white"}}>© Copyright {new Date().getFullYear()}, All Rights Reserved</div>
    </div>
  );
}
