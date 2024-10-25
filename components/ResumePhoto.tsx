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
  textPaddingTw: string;
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
      <div className="flex flex-col justify-center items-center">
        <div
          className={`rounded-full`}
          style={{
            width: stylesComp.photoWidth,
            height: stylesComp.photoWidth,
            overflow: "hidden",
          }}
        >
          <Image
            src={`/${data.photoFn}`}
            width={stylesComp.photoWidth}
            height={stylesComp.photoHeight}
            alt="Me"
            objectFit="cover"
            //unoptimized={true}
            style={{
              width: stylesComp.photoWidth,
              height: stylesComp.photoHeight,
            }}
          />
        </div>
        {/* name */}
        <div
          className={`text-center bg-slate-600 ${stylesComp.textPaddingTw} text-white ${stylesComp.textSizeTw} font-bold rounded-lg`} // absolute left-1/2 -bottom-12 -translate-x-1/2
        >
          <h2>{data.candidateName.toUpperCase()}</h2>
        </div>
      </div>
    </div>
  );
};

export default ResumePhoto;
