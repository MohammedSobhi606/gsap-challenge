import End from "./components/End";
import Hero from "./components/Hero";
import Intro from "./components/Intro";
import Jumping from "./components/Jumping";
import SplitImage from "./components/SplitImage";
import gsap from "gsap";
import { ReactLenis } from "lenis/react";
import { useEffect, useRef } from "react";

export default function App() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);

  return (
    <>
      <ReactLenis root options={{ autoRaf: false }} ref={lenisRef} />
      <main className=" min-h-screen text-neutral-400 HPadding maxW ">
        <Intro />
        <Hero />
        <SplitImage />
        <Jumping />
        <End />
      </main>
    </>
  );
}
