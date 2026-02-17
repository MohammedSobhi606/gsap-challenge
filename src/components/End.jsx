import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function End() {
  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(SplitText);
    const repeatCount = 8;
    const tl = gsap.timeline({
      scrollTrigger: ".end",
      repeat: repeatCount,
    });
    const split = new SplitText(".end", { type: "chars" });
    split.chars.forEach((obj, i) => {
      let txt = obj.innerText;
      let clone = `<div class="cloneText"> ${txt} </div>`;
      let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
      obj.innerHTML = newHTML;
      gsap.set(obj.childNodes[1], {
        yPercent: i % 2 === 0 ? -100 : 100,
      });
      let tween = gsap.to(obj.childNodes, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100",
      });
      tl.add(tween, 0);
    });
    gsap.to(tl, { progress: 1, duration: 4, ease: "power4.inOut", repeat: -1 });
  });
  return (
    <div className="end py-32 md:text-7xl text-4xl text-slate-50 text-center  ">
      {" "}
      <h1 className="overflow-hidden transform-3d ">Thank You, ENDED !</h1>{" "}
    </div>
  );
}
