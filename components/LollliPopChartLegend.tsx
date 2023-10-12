import React from "react";

import LolliPopChartLegendElement, {
  LolliPopChartLegendElementData,
  LolliPopChartLegendElementStyleData,
} from "./LollliPopChartLegendElement";

export type LolliPopChartLegendData = {
  elementsData: LolliPopChartLegendElementData[];
};

export type LolliPopChartLegendStyleData = {
  headerSizeTw: string;
  elementsStyleData: LolliPopChartLegendElementStyleData;
};

export interface LolliPopChartLegendInputs
  extends React.HTMLAttributes<HTMLDivElement> {
  data: LolliPopChartLegendData;
  styleComp: LolliPopChartLegendStyleData;
}

const LolliPopChartLegend = (inputs: LolliPopChartLegendInputs) => {
  // add to classname if we specified some TW style
  const baseContTw =
    "relative flex justify-around p-5 border-2 border-slate-600 rounded-lg w-4/5 mx-auto";
  const contTw = inputs.className
    ? `${baseContTw} ${inputs.className}`
    : baseContTw;

  // get component main inputs
  // exclude 'className' from div props
  const {
    data,
    styleComp,
    ["className"]: deletedKey,
    ...propsWithoutCompInputsAndClassName
  } = inputs;

  return (
    <div className={contTw} {...propsWithoutCompInputsAndClassName}>
      <h4
        className={`absolute -top-[15px] left-10 bg-[#eef0f0] font-semibold ${styleComp.headerSizeTw}`}
      >
        Current use
      </h4>
      {data.elementsData.map((d, i) => (
        <LolliPopChartLegendElement
          key={i}
          data={d}
          styleComp={styleComp.elementsStyleData}
        />
      ))}
    </div>
  );
};

export default LolliPopChartLegend;
