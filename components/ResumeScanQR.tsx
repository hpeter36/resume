import React from "react";
import Image from "next/image";
import { arrowSvg } from "@/assets";
import { QRCodeSVG } from "qrcode.react";

export type ResumeScanQRData = {
  qrValue: string;
};

export type ResumeScanQRStyleData = {
  qrSize: 128 | 96 | 64 | 32;
  textSizeTw: string;
};

export interface ResumeScanQRInputs extends React.HTMLAttributes<HTMLDivElement> {
  data: ResumeScanQRData;
  stylesComp: ResumeScanQRStyleData;
}

const ResumeScanQR = (inputs: ResumeScanQRInputs) => {
  // add to classname if we specified some TW style
  const baseContTw = "flex flex-col justify-center items-center";
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
      
	  {/* arrow svg */}
	  <Image
        src={arrowSvg}
        alt="click or scan arrow"
        className="absolute -left-5 bottom-5"
      />

      {/*  text-transparent bg-clip-text */}
      <h4 className={`gradient-text bg-gradient-to-r from-[#0383c7] to-[#f9436b] font-semibold ${stylesComp.textSizeTw}`}>
        Check out my Portfolio website!
      </h4>

      {/* <GradientTextSvg
        id="grad_svg_1"
        text="Check out my Portfolio website!"
        fontSize="16"
        fontWeight="600"
        startColor="#0383c7"
        endColor="#f9436b"
      /> */}
      <QRCodeSVG className="my-5" value={data.qrValue} size={stylesComp.qrSize} />

      <h4 className={`gradient-text bg-gradient-to-r from-[#0383c7] to-[#f9436b] font-semibold ${stylesComp.textSizeTw}`}>
        Click or Scan
      </h4>

      {/* <GradientTextSvg
        id="grad_svg_2"
        text="Click or Scan"
        fontSize="16"
        fontWeight="600"
        startColor="#0383c7"
        endColor="#f9436b"
      /> */}
    </div>
  );
};

export default ResumeScanQR;
