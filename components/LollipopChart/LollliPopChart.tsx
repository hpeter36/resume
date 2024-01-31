"use client";

import React, { useEffect } from "react";
import * as d3 from "d3";
import LollliPopChartLegend from "./LollliPopChartLegend";
import { LolliPopChartLegendElementData } from "./LollliPopChartLegendElement";
import { LolliPopChartLegendStyleData } from "./LollliPopChartLegend";

export type LolliPopChartDataPointData = {
  xName: string;
  yValue: number;
  circleBg: string;
  circleBorderColor: string;
  svgFn?: string;
};

export type LolliPopChartData = {
  legendData: LolliPopChartLegendElementData[];
  chartData: LolliPopChartDataPointData[];
};

export type LollipopChartDimensions = {
  width: number;
  height: number; // heightMainChart, gradient date filter?
  margins: {
    top: number;
    left: number;
    right: number;
    bottom: number;
  };
};

export type LollipopChartAppearance = {
  xAxis: {
    ticksColor: string;
    ticksSize: number;
    axisColor: string;

  };
  yAxis: {
    labelText: string;
    labelColor: string;
    labelSize: number;
    ticksColor: string;
    ticksSize: number;
    axisColor: string;
  };
  mainChart: {
    lineWidth: number;
    lineColor: string;
    circleR: number;
    circleBorderWidth: number;
  };
  legend: LolliPopChartLegendStyleData;
};

export interface LolliPopChartInputs
  extends React.HTMLAttributes<HTMLDivElement> {
  chartId: string;
  imagePath: string;
  size: LollipopChartDimensions;
  appearance: LollipopChartAppearance;
  state: {};
  data: LolliPopChartData;
}

const LollliPopChart = (inputs: LolliPopChartInputs) => {
  // add to classname if we specified some TW style
  const baseContTw = "";
  const contTw = inputs.className
    ? `${baseContTw} ${inputs.className}`
    : baseContTw;

  // get component main inputs
  // exclude 'className' from div props
  const {
    chartId,
    imagePath,
    size,
    appearance,
    state,
    data,
    ["className"]: deletedKey,
    ...propsWithoutCompInputsAndClassName
  } = inputs;

  const { legendData, chartData } = data;

  // size of svg
  const svgWidth = size.width + size.margins.left + size.margins.right;
  const svgHeight = size.height + size.margins.top + size.margins.bottom;

  const loadSvg = async (
    fn: string,
    id: string,
    width: number,
    height: number
  ) => {
    const data = (await d3.xml(fn)).documentElement;
    data.setAttribute("id", id);
    //data.setAttribute("data-name", id);
    data.setAttribute("width", `${width}`);
    data.setAttribute("height", `${height}`);
    return data;
  };

  // init chart
  useEffect(() => {
    // main svg
    const mainChartSvgNode = d3
      .select(`.chart-container-${inputs.chartId}`)
      .append("svg");

    // set main svg
    const svgId = `svg-lollipop-chart-${inputs.chartId}`;
    mainChartSvgNode
      .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
      .attr("id", svgId)

      // így nem reszponzív
      //.attr("width", svgWidth)
      //.attr("height", svgHeight)
      .attr("class", "mx-auto"); // tw class to h-center the chart

    // create main g node
    const mainG = mainChartSvgNode
      .append("g")
      .attr("id", `g-lollipop-chart-main-${inputs.chartId}`)
      .attr(
        "transform",
        `translate(${size.margins.left}, ${size.margins.top})`
      );

    // element groups g-s
    const idGMainPlot = `g-main-plot-${inputs.chartId}`;
    mainG.append("g").attr("id", idGMainPlot);

    // init x scale
    const xScaleDef = d3
      .scaleBand<string>()
      .range([0, size.width])
      .domain(chartData.map((d) => d.xName))
      .padding(1);

    // x axis g svg obj
    const xAxisG = mainG
      .append("g")
      .attr("class", `x-axis-lollipop-chart-${inputs.chartId}`)
      .attr("transform", `translate(0, ${size.height})`)
      .call(d3.axisBottom(xScaleDef));

    // x axis horizontal axis svg obj
    xAxisG.selectAll("path").attr("stroke", appearance.xAxis.axisColor);

    // x axis horizontal axis ticks svg obj
    xAxisG.selectAll("line").attr("stroke", appearance.xAxis.axisColor);

    // x axis ticks text
    xAxisG
      .selectAll("text")
      .attr("fill", appearance.xAxis.ticksColor)
      .attr("font-size", appearance.xAxis.ticksSize)
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // init y scale
    const maxY = d3.max(chartData, (d) => d.yValue)!;
    const yScaleDef = d3
      .scaleLinear()
      .range([size.height, 0])
      .domain([0, maxY * 1.2]);
    // .tickFormat(6, ".0%");

    // y axis g svg obj
    const yAxisG = mainG
      .append("g")
      .attr("class", `y-axis-lollipop-chart-${inputs.chartId}`)
      .call(d3.axisLeft(yScaleDef)); // .ticks(6)

    // x axis horizontal axis svg obj
    yAxisG.selectAll("path").attr("stroke", appearance.yAxis.axisColor);

    // x axis horizontal axis ticks svg obj
    yAxisG.selectAll("line").attr("stroke", appearance.yAxis.axisColor);

    // y axis ticks text
    yAxisG
      .selectAll("text")
      .attr("fill", appearance.yAxis.ticksColor)
      .attr("font-size", appearance.yAxis.ticksSize);

    // y axis label
    yAxisG
      .append("text")
      .attr("class", `y-axis-label-lollipop-chart-${inputs.chartId}`)
      .attr("transform", "rotate(-90)")
      .attr("y", (size.margins.left / 2) * -1)
      .attr("x", (size.height / 2) * -1)
      .attr("font-size", appearance.yAxis.labelSize)
      .attr("fill", appearance.yAxis.labelColor)
      .attr("text-anchor", "middle")
      .text(appearance.yAxis.labelText);

    // init data
    // draw lines
    d3.select(`#${idGMainPlot}`)
      .selectAll(`.data-line-lollipop-chart-${inputs.chartId}`)
      .data(chartData)
      .join("line")
      .attr("x1", (d) => xScaleDef(d.xName)!)
      .attr("x2", (d) => xScaleDef(d.xName)!)
      .attr("y1", (d) => yScaleDef(d.yValue))
      .attr("y2", (d) => yScaleDef(0.1))
      .attr("stroke-width", appearance.mainChart.lineWidth)
      .attr("stroke", appearance.mainChart.lineColor); // (d) => d.circleBg

    // draw circles
    const circleR = appearance.mainChart.circleR;
    d3.select(`#${idGMainPlot}`)
      .selectAll(`.data-circle-lollipop-chart-${inputs.chartId}`)
      .data(chartData)
      .join("circle")
      .attr("cx", (d) => xScaleDef(d.xName)!)
      .attr("cy", (d) => yScaleDef(d.yValue))
      .attr("r", circleR)
      .style("fill", (d) => d.circleBg)
      .attr("stroke-width", appearance.mainChart.circleBorderWidth)
      .attr("stroke", (d) => d.circleBorderColor);

    const drawTextOrSvg = async () => {
      for (const d of chartData) {
        // svg icon not specified
        if (!d.svgFn) {
          // append texts into circles
          d3.select(`#${idGMainPlot}`)
            .selectAll(`.data-text-lollipop-chart-${inputs.chartId}`)
            .data(chartData)
            .join("text")
            .attr("y", (d) => yScaleDef(d.yValue) + circleR * 0.4)
            .attr("x", (d) => xScaleDef(d.xName)!)
            .attr("font-size", appearance.mainChart.circleR)
            .attr("fill", "white")
            .attr("text-anchor", "middle")
            .text((d) => d.yValue);
        } else {
          // append svg into circles
          const logoSize = (circleR - appearance.mainChart.circleBorderWidth) * Math.sqrt(2);
          const svgLogo = await loadSvg(
            `/${inputs.imagePath}/${d.svgFn}.svg`,
            `svg_icon_${d.svgFn}`,
            logoSize,
            logoSize
          );

          const logoSvgNode = document.importNode(svgLogo, true);

          // rename classnames from "cls-x" in styles tag
          const styleNode = logoSvgNode.querySelector("style");
          if (styleNode?.textContent) {
            styleNode.textContent = styleNode.textContent.replaceAll(
              ".cls-",
              `.svg-icon-${d.svgFn}-`
            );
          }

          // rename classnames from "cls-x" in content classnames
          d3.select(logoSvgNode)
            .selectAll("*")
            .attr("class", function () {
              const currentValue: String = new String(
                d3.select(this).attr("class") as string
              ); // string .indexOf threw error because of translator(?) plugin
              return currentValue.indexOf("cls-") !== -1
                ? currentValue
                    .replace("cls-", `svg-icon-${d.svgFn}-`)
                    .toString()
                : currentValue.toString();
            });

          // append loaded svg to mainG and set position
          mainG.node()?.appendChild(logoSvgNode);
          d3.select(`#svg_icon_${d.svgFn}`)
            .attr("x", xScaleDef(d.xName)! - (circleR - appearance.mainChart.circleBorderWidth) / Math.sqrt(2))
            .attr("y", yScaleDef(d.yValue) - (circleR - appearance.mainChart.circleBorderWidth) / Math.sqrt(2));
        }
      }
    };
    drawTextOrSvg();

    return () => {
      d3.select(`#${svgId}`).remove();
    };
  }, []); // ha változnak az input propok trigger rerender

  return (
    <div className={contTw} {...propsWithoutCompInputsAndClassName}>
      {/* legend */}
      <LollliPopChartLegend
        data={{ elementsData: inputs.data.legendData }}
        styleComp={inputs.appearance.legend}
        className="mb-10" // style={{width: svgWidth}}
      />
      {/* chart */}
      <div className={`chart-container-${inputs.chartId}`}></div>
    </div>
  );
};

export default LollliPopChart;
