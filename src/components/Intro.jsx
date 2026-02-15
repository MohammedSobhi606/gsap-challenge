import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { useRef } from "react";
export default function Intro() {
  const container = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      tl.to(container.current, {
        y: 0,
        duration: 0.8,
        ease: "power2.inOut",
      })
        .from(".letter", {
          y: 100,
          stagger: 0.08,
          ease: "power2.out",
        })
        .from(".clip-letter", {
          clipPath: "inset(100% 0 0 0)",
          duration: 0.8,
          stagger: 0.08,
          delay: 0.3,
          ease: "power1.inOut",
        })
        .to(
          ".letter",
          {
            y: -100,
            stagger: 0.08,
            ease: "power2.out",
          },
          "+=1"
        )
        .to(
          container.current,
          { y: "-100%", duration: 0.8, ease: "power2.inOut", delay: 0.3 },
          "-=0.2"
        );
    },
    { scope: container }
  );
  const text = "Mohammed Sobhi";
  return (
    <div
      className="h-screen grid place-content-center bg-neutral-950 fixed inset-0 z-50 -translate-y-full"
      ref={container}
    >
      <h1 className="text-8xl uppercase font-black font-serif tracking-wider max-sm:text-5xl text-center overflow-clip text-white">
        {text.split("").map((letter, inx) => (
          <span key={letter + inx} className="letter inline-block relative">
            {letter}
            <span className="clip-letter absolute inset-0 text-transparent bg-linear-to-t via-amber-600 to-amber-400 from-orange-700 bg-clip-text">
              {letter}
            </span>
          </span>
        ))}
      </h1>
    </div>
  );
}
