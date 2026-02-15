import React from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
export default function SplitImage() {
  useGSAP(() => {
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(ScrollTrigger);
    function animatTitle() {
      let mySplit = SplitText.create(".rubber", { type: "chars" });

      let scaleDistributor = gsap.utils.distribute({
        base: 0.2,
        amount: 1.2,
        from: "center",
        ease: "power1",
      });

      let distanceDistributor = gsap.utils.distribute({
        base: -200,
        amount: 400,
        ease: "none",
      });

      gsap.from(mySplit.chars, {
        scrollTrigger: ".rubber",

        scale: scaleDistributor,
        x: distanceDistributor,

        opacity: 0,
        repeat: 4,
        yoyo: true,
        stagger: {
          each: 0.1,
          from: "center",
        },
      });
    }
    animatTitle();
    const mm = gsap.matchMedia();
    // clear all styles and animation
    mm.add("(max-width:999px)", () => {
      document
        .querySelectorAll(".card ,.card-container,.card-back")
        .forEach((el) => (el.style = ""));
    });

    mm.add("(min-width:1000px)", () => {
      animatImage();
    });
    function animatImage() {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".pinTrigger",
          start: "top top",
          end: `+=1000px`,
          scrub: true,
          pin: true,
          //   pinSpacing: true,
          anticipatePin: true,
        },
      });
      tl.to(".card-container", {
        scale: 0.8,
        gap: 20,
      })
        .to(".card", {
          borderRadius: 20,
          duration: 0.5,
          ease: "power3.out",
        })
        .to(".card", {
          rotateY: 180,
          duration: 0.75,
          ease: "power3.inOut",
          stagger: 0.08,
        })
        .to(
          ["#card-1", "#card-3"],
          {
            y: 30,
            rotateZ: (i) => [-15, 15][i],
            duration: 0.75,
            ease: "power3.inOut",
          },
          "<"
        );
    }
  });
  return (
    <div className="pinTrigger py-16 flex flex-col items-center">
      <h1 className="text-7xl font-semibold text-slate-50 text-center max-sm:text-3xl overflow-hidden rubber">
        Three Categories of Cars
      </h1>
      <div className="card-container  py-16 w-full  flex flex-col gap-8 md:flex-row md:gap-0 max-md:hidden">
        <div className="card" id="card-1">
          <div className="card-front  ">
            <img src="/public/car1.jpg" alt="car1" />
          </div>
          <div className="card-back bg-linear-to-br from-teal-200 to-cyan-300 ">
            <span>(01)</span>
            <p className="text-2xl text-slate-800 uppercase">
              BWM The Monester German
            </p>
          </div>
        </div>
        {/* ================== */}
        <div className="card" id="card-2">
          <div className="card-front">
            <img src="/public/car2.jpg" alt="car1" />
          </div>
          <div className="card-back bg-linear-to-br from-purple-200 to-pink-300">
            <span>(02)</span>
            <p className="text-2xl text-slate-800 uppercase">
              The Mercedes-Benz AG
            </p>
          </div>
        </div>
        {/* ================== */}
        <div className="card " id="card-3">
          <div className="card-front">
            <img src="/public/car3.jpg" alt="car3" />
          </div>
          <div className="card-back bg-linear-to-br from-lime-200 to-green-300">
            <span>(03)</span>
            <p className="text-2xl text-slate-800 uppercase">
              The Porsche 911 is an iconic
            </p>
          </div>
        </div>
        {/* ================== */}
      </div>
      <div className="spacer flex flex-col gap-4  md:hidden">
        <div className="flex flex-col rounded-2xl min-h-84 p-4 justify-between gap-4 flex-1 bg-linear-to-br from-teal-200 to-cyan-300 ">
          <span>(01)</span>
          <p className="text-2xl text-slate-800 uppercase">
            BWM The Monester German
          </p>
        </div>{" "}
        <div className="flex flex-col rounded-2xl min-h-84 p-4 justify-between gap-4 flex-1 bg-linear-to-br from-purple-200 to-pink-300 ">
          <span>(02)</span>
          <p className="text-2xl text-slate-800 uppercase">
            BWM The Monester German
          </p>
        </div>{" "}
        <div className="flex flex-col rounded-2xl min-h-84 p-4 justify-between gap-4 flex-1 bg-linear-to-br from-lime-200 to-green-300">
          <span>(03)</span>
          <p className="text-2xl text-slate-800 uppercase">
            BWM The Monester German
          </p>
        </div>
      </div>
    </div>
  );
}
