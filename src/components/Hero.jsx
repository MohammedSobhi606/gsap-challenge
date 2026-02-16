import React from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
export default function Hero() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);

    const pText = SplitText.create(".ptext", {
      type: "chars",
      smartWrap: true,
    });
    const titleText = SplitText.create(".title", {
      type: "chars",
      smartWrap: true,
      ignore: "span",
    });
    const tl = gsap.timeline({
      delay: 8,
    });
    tl.to(titleText.chars, {
      keyframes: {
        "0%": { color: "#62748e", scaleY: 2 },
        "70%": { color: "#FEB901" },
        "100%": { color: "#fff", scale: 1 },
      },

      duration: 0.5,
      stagger: 0.05,

      ease: "power1",
    });
    tl.to(pText.chars, {
      keyframes: {
        "0%": { color: "#62748e", scaleY: 2 },
        "70%": { color: "#fff" },
        "100%": { color: "#FEB901", scale: 1 },
      },

      duration: 0.5,
      stagger: 0.03,

      ease: "power1",
    });
    tl.from(".fanus", {
      clipPath: "inset(100% 0 0 0)",
      ease: "power2.out",
    });
  });
  return (
    <div className=" flex flex-col items-center justify-center  gap-8 py-16  rounded-xl  relative ">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-content">
          <span className="title inline-block bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold mb-6">
            🌙 Ramadan Kareem
          </span>

          <h1 className="title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-200">
            Celebrate the Spirit of{" "}
            <span className="text-amber-400">Ramadan</span>
          </h1>

          <p className="ptext text-slate-500 text-lg font-semibold mb-8 max-w-lg ">
            A month of reflection, generosity, and togetherness. Experience the
            warmth of Iftar nights, glowing lanterns, and moments that bring
            hearts closer.
          </p>
        </div>
        <div className="fanus flex justify-center">
          <img
            src="/fanus.svg"
            alt="Ramadan Illustration"
            className="w-full max-w-md md:max-w-lg drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
