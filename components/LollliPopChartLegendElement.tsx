export type LolliPopChartLegendElementData = {
	label: string;
	color: string;
  };

 export type LolliPopChartLegendElementStyleData = {
	labelSizeTw: string;
	circleSizeTw: string;
 }

export interface LolliPopChartLegendElementInputs extends React.HTMLAttributes<HTMLDivElement> {
	data: LolliPopChartLegendElementData,
	styleComp: LolliPopChartLegendElementStyleData
}

const LolliPopChartLegendElement = (inputs: LolliPopChartLegendElementInputs) => {

	// add to classname if we specified some TW style
	const baseContTw = "flex items-center justify-center gap-5";
	const contTw = inputs.className
	  ? `${baseContTw} ${inputs.className}`
	  : baseContTw;
  
		// get component main inputs
	// exclude 'className' from div props
	const {
		data, styleComp,
	  ["className"]: deletedKey,
	  ...propsWithoutCompInputsAndClassName
	} = inputs;

	return (
	  <div className={contTw} {...propsWithoutCompInputsAndClassName}>
		<span className={`${styleComp.labelSizeTw}`}>{data.label}</span>
		<div
		  className={`${styleComp.circleSizeTw} rounded-full`}
		  style={{ backgroundColor: data.color }}
		></div>
	  </div>
	);
  };

  export default LolliPopChartLegendElement