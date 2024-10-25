type ExperienceDescriptionData = {
  main: string;
  children?: string[];
};

export type ExperienceData = {
  postion: string;
  company: string;
  date: string;
  description: ExperienceDescriptionData[];
};

export type ExperienceStyleData = {
  headerSizeTw: string;
  textSizeTw: string;
  textGap: string;
  subtextSizeTw: string;
  subTextGap: string;
};

export interface ResumeExperienceElementInputs
  extends React.HTMLAttributes<HTMLDivElement> {
  data: ExperienceData;
  styleComp: ExperienceStyleData;
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
    data,
    styleComp,
    ["className"]: deletedKey,
    ...propsWithoutCompInputsAndClassName
  } = inputs;

  return (
    <div className={`${contTw} ${propsWithoutCompInputsAndClassName}`}>
		{/* heading, position */}
      <h4 className={`text-slate-600 ${styleComp.headerSizeTw} font-bold`}>
        {data.postion}
      </h4>

	  {/* company - date */}
      <span
        className={`${styleComp.textSizeTw}`}
      >{`${data.company} (${data.date})`}</span>
      
	  {/* description */}
	  <ul className="!list-disc list-inside pl-5">
        {data.description.map((d, i) => {
          return (
            // main list element
            <li className={`${styleComp.textSizeTw} ${styleComp.textGap}`} key={i}>
              <span>{d.main}</span>
              {/* sub list if specified */}
              {d.children && (
                <ul className="!list-disc list-inside pl-5">
                  {d.children!.map((d1, i1) => (
                    <li className={`${styleComp.subtextSizeTw} ${styleComp.subTextGap}`} key={i1}>
                      <span>{d1}</span>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ResumeExperienceElement;
