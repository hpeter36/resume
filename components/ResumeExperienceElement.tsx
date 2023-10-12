export type ExperienceData = {
	postion: string;
	company: string;
	date: string;
	description: string[];
  };

  export type ExperienceStyleData = {
	headerSizeTw: string;
	textSizeTw: string;
 }

 export interface ResumeExperienceElementInputs extends React.HTMLAttributes<HTMLDivElement> {
	data: ExperienceData,
	styleComp: ExperienceStyleData
}

const ResumeExperienceElement = (inputs: ResumeExperienceElementInputs) => {
	
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
	  <div className={`${contTw} ${propsWithoutCompInputsAndClassName}`}>
		<h4 className={`text-slate-600 ${styleComp.headerSizeTw} font-bold`}>{data.postion}</h4>
		<span className={`${styleComp.textSizeTw}`}>{`${data.company} (${data.date})`}</span>
		<ul className="!list-disc list-inside pl-5">
		  {data.description.map((d, i) => (
			<li className={`${styleComp.textSizeTw}`} key={i}>{d}</li>
		  ))}
		</ul>
	  </div>
	);
  };

  export default ResumeExperienceElement