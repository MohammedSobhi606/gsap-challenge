import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MotionPathPlugin from "gsap/MotionPathPlugin";
export default function Jumping() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
    const jumpRightBtn = document.getElementById("jump-right-btn");
    const jumpLeftBtn = document.getElementById("jump-left-btn");
    let x = 0;
    jumpRightBtn.addEventListener("click", function () {
      gsap.to(".frog", {
        motionPath: {
          curviness: 3,
          path: [
            { x: x + 200, y: -200 },
            { x: x + 400, y: 0 },
          ],
        },
      });
      x += 400;
    });

    jumpLeftBtn.addEventListener("click", function () {
      gsap.to(".frog", {
        motionPath: {
          curviness: 3,
          path: [
            { x: x - 200, y: -200 },
            { x: x - 400, y: 0 },
          ],
        },
      });
      x -= 400;
    });
  });
  return (
    <div className="targetSec h-screen mt-16 p-8 flex flex-col gap-8 items-center overflow-hidden ">
      <h1 className="text-center text-4xl md:text-6xl text-slate-50 ">
        Jumping Effect
      </h1>

      <div className="flex self-end mt-32 ">
        <div className="w-32 border p-2 ">
          <img src="/Frog.png" alt="frog" className="frog z-20 " />
        </div>
      </div>
      <div className="flex items-center gap-12 ">
        <button
          id="jump-left-btn"
          className="size-16 rounded-full text-4xl text-black text-center bg-amber-200 hover:bg-amber-700"
        >
          +
        </button>
        <button
          id="jump-right-btn"
          className="size-16 rounded-full text-4xl text-black text-center bg-amber-200 hover:bg-amber-700"
        >
          -
        </button>
      </div>
    </div>
  );
}
