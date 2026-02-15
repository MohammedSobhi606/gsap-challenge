import React from "react";
import { benefits } from "../assets/content";

export default function Benefits() {
  return (
    <div className="flex flex-col gap-8 py-28 md:py-16  ">
      <h1 className="text-4xl text-neutral-50 font-semibold text-center">
        Benefits That Deserve{" "}
      </h1>
      <div className="flex  flex-wrap md:flex-nowrap gap-8  ">
        {benefits.map((item) => (
          <div className="flex-1" key={item.description}>
            <h1 className="text-neutral-50 font-semibold">{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
