export type LolliPopChartLegendElementData = {
	label: string;
	color: string;
  };

 export type LolliPopChartLegendElementStyleData = {
	labelSizeTw: string;
	circleSizeTw: string;
	circleMarginLeftTw: string;	
 }

export interface LolliPopChartLegendElementInputs extends React.HTMLAttributes<HTMLDivElement> {
	data: LolliPopChartLegendElementData,
	styleComp: LolliPopChartLegendElementStyleData
}

const LolliPopChartLegendElement = (inputs: LolliPopChartLegendElementInputs) => {

	// add to classname if we specified some TW style
	const baseContTw = "flex items-center";
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
		{/* label */}
		<span className={`${styleComp.labelSizeTw}`}>{data.label}</span>
		{/* circle */}
		<div
		  className={`${styleComp.circleSizeTw} rounded-full ${styleComp.circleMarginLeftTw}`}
		  style={{ backgroundColor: data.color }}
		></div>
	  </div>
	);
  };

  export default LolliPopChartLegendElement