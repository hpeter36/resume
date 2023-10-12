"use client";

import React, { useEffect } from "react";
import * as d3 from "d3";
import LollliPopChartLegend from "./LollliPopChartLegend";
import  { LolliPopChartLegendElementData } from "./LollliPopChartLegendElement";
import { LolliPopChartLegendStyleData } from "./LollliPopChartLegend";


export type LolliPopChartDataPointData = {
  xName: string;
  yValue: number;
  circleBg: string;
};

export type LolliPopChartData = {
  legendData: LolliPopChartLegendElementData[];
  chartData: LolliPopChartDataPointData[];
}

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
    ticksSize: number;
  };
  yAxis: {
    label: string;
    labelSize: number;
    ticksSize: number;
  };
  mainChart: {
    lineWidth: number;
    circleR: number;
  };
  legend: LolliPopChartLegendStyleData
};

export type LolliPopChartInputs = {
  chartId: string;
  size: LollipopChartDimensions;
  appearance: LollipopChartAppearance;
  state: {};
  data: LolliPopChartData
};

const LollliPopChart = (inputs: LolliPopChartInputs) => {

  const {size, appearance} = inputs;
  const { legendData, chartData } = inputs.data;

  // init chart
  useEffect(() => {
    // main svg
    const mainChartSvgNode = d3
      .select(`.chart-container-${inputs.chartId}`)
      .append("svg");

    // size of svg
    const svgWidth =
      size.width + size.margins.left + size.margins.right;
    const svgHeight =
      size.height + size.margins.top + size.margins.bottom;

    // set main svg
    const svgId = `svg-lollipop-chart-${inputs.chartId}`;
    mainChartSvgNode
      .attr("viewBox", `0 0 ${svgWidth} ${svgHeight}`)
      .attr("id", svgId);

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

    mainG
      .append("g")
      .attr("class", `x-axis-lollipop-chart-${inputs.chartId}`)
      .attr("transform", `translate(0, ${size.height})`)

      // x axis svg obj
      .call(d3.axisBottom(xScaleDef))
      .selectAll("text")
      .attr("font-size", appearance.xAxis.ticksSize)
      .attr("transform", "translate(-10,0)rotate(-45)")
      .style("text-anchor", "end");

    // init y scale
    const yScaleDef = d3
      .scaleLinear()
      .range([size.height, 0])
      .domain([0, d3.max(chartData, (d) => d.yValue)!]);
    // .tickFormat(6, ".0%");

    const gYaxis = mainG
      .append("g")
      .attr("class", `y-axis-lollipop-chart-${inputs.chartId}`);

    // y axis svg obj
    gYaxis
      .call(d3.axisLeft(yScaleDef)) // .ticks(6)
      .selectAll("text")
      .attr("font-size", appearance.yAxis.ticksSize);

    // y axis label
    gYaxis
      .append("text")
      .attr("class", `y-axis-label-lollipop-chart-${inputs.chartId}`)
      .attr("transform", "rotate(-90)")
      .attr("y", -50)
      .attr("x", (size.height / 2) * -1)
      .attr("font-size", appearance.yAxis.labelSize)
      .attr("fill", "black")
      .attr("text-anchor", "middle")
      .text(appearance.yAxis.label);

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
      .attr("stroke", (d) => d.circleBg);

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
      .attr("stroke", (d) => d.circleBg);

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

    return () => {
      d3.select(`#${svgId}`).remove();
    };
  }, []);  // ha változnak az input propok trigger rerender

  return (
    <div>
      {/* legend */}
      <LollliPopChartLegend data={{elementsData: inputs.data.legendData}} styleComp={inputs.appearance.legend} className="mb-5 -translate-x-5" />
      {/* chart */}
      <div className={`chart-container-${inputs.chartId}`}></div>;
    </div>
  );
};



export default LollliPopChart;
