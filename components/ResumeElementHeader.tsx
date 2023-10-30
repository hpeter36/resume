import { Input } from "postcss";

export type ResumeElementHeaderData = {
  text: string;
};

export type ResumeElementHeaderStyleData = {
  headerSizeTw: string;
  paddingBottomTw: string;
  marginBottomTw: string;
};

export interface ResumeElementHeaderInputs
  extends React.HTMLAttributes<HTMLHeadingElement> {
  data: ResumeElementHeaderData;
  styleComp: ResumeElementHeaderStyleData;
}

const ResumeElementHeader = (inputs: ResumeElementHeaderInputs) => {
  // add to classname if we specified some TW style
  // mb-3
  const baseContTw = `${inputs.styleComp.headerSizeTw} font-bold text-slate-600 ${inputs.styleComp.paddingBottomTw} border-b-slate-600 border-b-4 w-4/5 ${inputs.styleComp.marginBottomTw}`;
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
    <h3 className={contTw} {...propsWithoutCompInputsAndClassName}>
      {data.text.toUpperCase()}
    </h3>
  );
};

export default ResumeElementHeader;
