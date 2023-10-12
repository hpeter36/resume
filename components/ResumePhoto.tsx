import React from "react";
import Image from "next/image";

export type ResumeHeaderData = {
  photoFn: string;
  candidateName: string;
};

export type ResumeHeaderStyleData = {
  photoWidth: number;
  photoHeight: number;
  textSizeTw: string;
};

interface ResumePhotoInputs extends React.HTMLAttributes<HTMLDivElement> {
  data: ResumeHeaderData;
  stylesComp: ResumeHeaderStyleData;
}

const ResumePhoto = (inputs: ResumePhotoInputs) => {
  // add to classname if we specified some TW style
  const baseContTw = "relative flex justify-center items-center";
  const contTw = inputs.className
    ? `${baseContTw} ${inputs.className}`
    : baseContTw;

  // get component main inputs
  // exclude 'className' from div props
  const {
    data,
    stylesComp,
    ["className"]: deletedKey,
    ...propsWithoutCompInputsAndClassName
  } = inputs;

  return (
    <div className={contTw} {...propsWithoutCompInputsAndClassName}>
      {/* photo */}
      <div>
        <Image
          src={`/${data.photoFn}`}
          width={stylesComp.photoWidth}
          height={stylesComp.photoHeight}
          alt="Me"
          //unoptimized={true}
          className={`rounded-full`}
          style={{
            width: stylesComp.photoWidth,
            height: stylesComp.photoHeight,
          }}
        />
        {/* name */}
        <div
          className={`absolute left-1/2 bottom-0 -translate-x-1/2 text-center bg-slate-600 p-4 text-white ${stylesComp.textSizeTw} font-bold rounded-lg`}
        >
          <h2>{data.candidateName.toUpperCase()}</h2>
        </div>
      </div>
    </div>
  );
};

export default ResumePhoto;
