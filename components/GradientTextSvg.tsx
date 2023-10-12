"use client";

import { useEffect, useState } from "react";

type GradientTextSvgInputs = {
  id: string;
  text: string;
  fontSize?: string;
  fontWeight?: string;
  startColor: string;
  endColor: string;
};

const GradientTextSvg = (inputs: GradientTextSvgInputs) => {
  useEffect(() => {
    const textDim = document
      .getElementById(`${inputs.id}_text`)!
      .getBoundingClientRect(); // getComputedTextLength(), getBBox()
    setDim({
      width: textDim.width,
      height: textDim.height + textDim.height * 0.2,
    });
  }, []);

  const [dim, setDim] = useState({ width: 0, height: 0 });

  return (
    <svg
      viewBox={`0 0 ${dim.width} ${dim.height}`}
      width={dim.width}
      height={dim.height}
    >
      <defs>
        <linearGradient
          id="a"
          x1={0}
          x2="100%"
          y1={0}
          y2={0}
          gradientUnits="objectBoundingBox"
        >
          <stop offset="0%" stopColor={inputs.startColor} />
          <stop offset="100%" stopColor={inputs.endColor} />
        </linearGradient>
      </defs>
      <text
        id={`${inputs.id}_text`}
        fill="url(#a)"
        fontSize={inputs.fontSize}
        fontWeight={inputs.fontWeight}
        x="0"
        y={dim.height / 2}
      >
        {inputs.text}
        {/* <tspan x={0} dy={20} fontSize={20}>többsoros szöveghez</tspan> */}
      </text>
    </svg>
  );
};

export default GradientTextSvg;
