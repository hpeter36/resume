
export type EducationData = {
	name: string;
	place: string;
	date: string;
	spec: string;
  };

 export type EducationStyleData = {
	headerSizeTw: string;
	textSizeTw: string;
	textGap: string;
 }

export interface ResumeEducationElementInputs extends React.HTMLAttributes<HTMLDivElement> {
	data: EducationData,
	styleComp: EducationStyleData
}

const ResumeEducationElement = (inputs: ResumeEducationElementInputs) => {

	// add to classname if we specified some TW style
	const baseContTw = "";
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
	  <div className={`${contTw}`} {...propsWithoutCompInputsAndClassName}>
		<h4 className={`text-slate-600 ${styleComp.headerSizeTw} font-bold`}>{data.name}</h4>
		<span className={`${styleComp.textSizeTw} block ${styleComp.textGap}`}>{`${data.place} (${data.date})`}</span>
		<span className={`${styleComp.textSizeTw} block ${styleComp.textGap}`}>{`Spec.: ${data.spec}`}</span>
	  </div>
	);
  };

  export default ResumeEducationElement