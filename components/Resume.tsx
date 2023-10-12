import { ResumeTechStackUsage } from "@/types";
import ResumeExperienceElement, {
  ExperienceData,
} from "./ResumeExperienceElement";
import ResumeEducationElement, {
  EducationData,
} from "./ResumeEducationElement";
import ResumeElementContainer from "./ResumeElementContainer";
import ResumeElementHeader from "./ResumeElementHeader";
import ResumeScanQR, {
  ResumeScanQRData,
  ResumeScanQRStyleData,
} from "./ResumeScanQR";
import ResumePhoto, {
  ResumeHeaderData,
  ResumeHeaderStyleData,
} from "./ResumePhoto";
import { EducationStyleData } from "./ResumeEducationElement";
import { ExperienceStyleData } from "./ResumeExperienceElement";
import ResumeContact, {
  ResumeContactData,
  ResumeContactStyleData,
} from "./ResumeContact";

import LollliPopChart, {
  LolliPopChartData,
  LolliPopChartInputs,
  LollipopChartDimensions,
  LollipopChartAppearance,
} from "../components/LollliPopChart";

export type ResumeTechStackData = {
  name: string;
  usage: ResumeTechStackUsage;
  value: number;
};

export type ResumeData = {
  header: {
    photo: ResumeHeaderData;
    scanQr: ResumeScanQRData;
  };
  experience: ExperienceData[];
  education: EducationData[];
  techStack: ResumeTechStackData[];
  chart: LolliPopChartData;
  contact: ResumeContactData;
};

type ResumeChartStyleData = {
  size: LollipopChartDimensions;
  appearance: LollipopChartAppearance;
};

export type ResumeStyleData = {
  headerPhoto: ResumeHeaderStyleData;
  scanQr: ResumeScanQRStyleData;
  education: EducationStyleData;
  experience: ExperienceStyleData;
  chart: ResumeChartStyleData;
  contact: ResumeContactStyleData;
};

export interface ResumeInputs extends React.HTMLAttributes<HTMLDivElement> {
  data: ResumeData;
  styleComp: ResumeStyleData;
}

const Resume = (inputs: ResumeInputs) => {
  // add to classname if we specified some TW style
  const baseContTw = "relative min-h-screen mx-10";
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

  // chart inputs
  const chartInputs: LolliPopChartInputs = {
    chartId: "1",
    size: styleComp.chart.size,
    appearance: styleComp.chart.appearance,
    state: {},
    data: {
      chartData: data.chart.chartData,
      legendData: data.chart.legendData,
    },
  };

  return (
    <div
      id="resume-container"
      className={contTw}
      {...propsWithoutCompInputsAndClassName}
    >
      {/* QR */}
      <ResumeScanQR
        data={data.header.scanQr}
        stylesComp={styleComp.scanQr}
        className="absolute right-0"
      />

      {/* header */}
      <ResumePhoto
        data={data.header.photo}
        stylesComp={styleComp.headerPhoto}
        className="mb-5"
      />
      {/* main content */}
      <div className="flex">
        {/* experience, tech stack */}
        <div className="flex-1">
          {/* experience */}
          <div>
            <ResumeElementHeader header="Experience" />
            <ul>
              {data.experience.map((d, i) => (
                <ResumeElementContainer
                  key={i}
                  lastElement={data.experience.length - 1 === i}
                >
                  <ResumeExperienceElement
                    data={d}
                    styleComp={styleComp.experience}
                  />
                </ResumeElementContainer>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-1">
          {/* education */}
          <div>
            <ResumeElementHeader header="Education" />
            <ul>
              {data.education.map((d, i) => (
                <ResumeElementContainer
                  key={i}
                  lastElement={data.experience.length - 1 === i}
                >
                  <ResumeEducationElement
                    data={d}
                    styleComp={styleComp.education}
                  />
                </ResumeElementContainer>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* tech stack, contact */}
      <div className="flex">
        {/* tech stack */}
        <div className="flex-1">
          <ResumeElementHeader header="Tech stack" />
          <LollliPopChart {...chartInputs} />
        </div>
        {/* contact */}
        <ResumeContact data={data.contact} styleComp={styleComp.contact} />
      </div>
    </div>
  );
};

export default Resume;
