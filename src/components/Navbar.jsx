import { LucideBookOpen, SunDim } from "lucide-react";
import React from "react";
import { navLinks } from "../assets/content";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

export default function Navbar() {
  useGSAP(() => {
    gsap.from(".links li", {
      y: 40,
      opacity: 0,
      ease: "power1",
      stagger: 0.5,
      duration: 0.5,
    });
  });
  return (
    <div className="flex items-center justify-between p-4 rounded-xl border border-neutral-600 h-18 ">
      <div className="flex items-center gap-8">
        <Logo />
        <NavLinks />
      </div>

      {/* call to ac  */}
      <div className="flex items-center gap-2">
        <SunDim className="size-8 text-neutral-50" />
        <button className="px-5 py-1 select-none rounded-lg bg-neutral-50 text-neutral-950 font-semibold hover:bg-neutral-200 cursor-pointer  transition-colors ease-in ">
          Purchase
        </button>
      </div>
    </div>
  );
}

function Logo() {
  return (
    <a href="#" className="flex items-center justify-center gap-2">
      <LucideBookOpen className="text-orange-600 size-8 md:size-12" />
      <h1 className="text-lg text-white font-semibold">
        Webnestify<span className="text-orange-600">Edu</span>
      </h1>
    </a>
  );
}

function NavLinks() {
  return (
    <ul className="links md:flex items-center gap-8 hidden  ">
      {navLinks.map((link) => (
        <li
          key={link}
          className="text-lg hover:text-neutral-500 transition-colors ease-in"
        >
          <a href="#"> {link} </a>
        </li>
      ))}
    </ul>
  );
}
