import { UsageCircleColor } from "./types";
import {
  ResumeData,
  ResumeTechStackData,
  ResumeStyleData,
} from "./components/Resume";
import { ResumeTechStackUsage } from "./types";

export const techUsageToCircleColor: UsageCircleColor = {
  Frequently: "#03aebf",
  Occasionally: "#e8b800",
  Rarely: "#fc4e07",
};

// ------------------------------------------------------------------ Gabi

// const resumeTechStackDataGabi: ResumeTechStackData[] = [
//   { name: "R", usage: "Frequently", value: 7 },
//   { name: "SQL", usage: "Frequently", value: 6 },
//   { name: "Node JS", usage: "Frequently", value: 2 },
//   { name: "JavaScript", usage: "Frequently", value: 2 },
//   { name: "Power BI", usage: "Frequently", value: 2 },
//   { name: "DMN", usage: "Frequently", value: 1 },
//   { name: "DAX", usage: "Frequently", value: 1 },
//   { name: "HTML", usage: "Occasionally", value: 2 },
//   { name: "CSS", usage: "Occasionally", value: 2 },
//   { name: "Figma", usage: "Occasionally", value: 2 },
//   { name: "D3.JS", usage: "Occasionally", value: 1 },
//   { name: "MongoDB", usage: "Occasionally", value: 1 },
//   { name: "AutoCAD", usage: "Rarely", value: 10 },
//   { name: "VBA", usage: "Rarely", value: 3 },
//   { name: "Python", usage: "Rarely", value: 3 },
// ];

// export const resumeDataGabi: ResumeData = {
//   header: {
//     photo: {
//       photoFn: "gabor.jpg",
//       candidateName: "Gabor Hajdu",
//     },
//     scanQr: {
//       qrValue: "https://gasti6-portfolio.herokuapp.com/",
//     },
//   },
//   experience: [
//     {
//       postion: "Business Data Analyst",
//       company: "Morgan Stanley",
//       date: "2022 – Present",
//       description: [
//         "Data management and analysis (SQL, R)",
//         "Data visualization (Power BI, base R, ggplot2)",
//         "Statistical Analysis",
//         "Standardization of business logic (DMN)",
//       ],
//     },
//     {
//       postion: "Senior Design Management Expert",
//       company: "MOL Hungarian Oil and Gas PLC",
//       date: "2019 - 2022",
//       description: [
//         "Automating design process / calculations (R, VBA, AutoCAD)",
//         "OSBL design of green- and brownfield process plants",
//         "ISBL integration to existing infrastructure",
//         "Design reviews",
//       ],
//     },
//     {
//       postion: "Process Engineer",
//       company: "Pannonia Ethanol",
//       date: "2016 – 2019",
//       description: [
//         "Eng. calculations and app development (Python)",
//         "Mechanical and process design (Plant3D, R, Excel-VBA)",
//         "Project management",
//       ],
//     },
//     {
//       postion: "Design Engineer",
//       company: "Wanhua – Borsodchem",
//       date: "2013 – 2016",
//       description: [
//         "Data catalog management (SQL)",
//         "Piping and equipment design (PDMS, AutoCAD)",
//       ],
//     },
//     {
//       postion: "Plant Operator",
//       company: "Tiszai Vegyi Kombinát",
//       date: "2004 – 2013",
//       description: [
//         "Monitoring and optimization of petrochemical process plants",
//       ],
//     },
//   ],
//   education: [
//     {
//       name: "MBA",
//       place: "ELTE Institute of Business Economics",
//       date: "2019 – 2022",
//       spec: "Finance",
//     },
//     {
//       name: "Foundation Certificate in Project Management",
//       place: "Foundation Certificate in Project Management",
//       date: "2017",
//       spec: "Prince2 project management certification",
//     },
//     {
//       name: "Mechanical Engineer (MSc)",
//       place: "University of Miskolc",
//       date: "2014 – 2017",
//       spec: "Chemical Engineering",
//     },
//     {
//       name: "Mechanical Engineer (BSc)",
//       place: "University of Nyiregyhaza",
//       date: "2013 – 2016",
//       spec: "Vehicle technology",
//     },
//     {
//       name: "Quality Management System Improvement",
//       place: "TÜV-Rheinland",
//       date: "2010 – 2011",
//       spec: "Quality Assurance Certificate",
//     },
//   ],
//   techStack: resumeTechStackDataGabi,
//   chart: {
//     chartData: resumeTechStackDataGabi.map((d) => {
//       return {
//         xName: d.name,
//         yValue: d.value,
//         circleBg: techUsageToCircleColor[d.usage],
//       };
//     }),
//     legendData: Object.keys(techUsageToCircleColor).map((d, i) => {
//       return {
//         label: d,
//         color: techUsageToCircleColor[d as ResumeTechStackUsage],
//       };
//     }),
//   },
//   contact: {
//     telephone: "+36-30/490-71-89",
//     location: "Budapest, Hungary",
//     email: "gasti6@gmail.com",
//     web: "https://gasti6-portfolio.herokuapp.com/",
//   },
// };

// export const resumeStylesGabi: ResumeStyleData = {
//   general: {
//     headers: {
//       headerSizeTw: "text-base",
//       paddingBottomTw: "pb-2",
//       marginBottomTw: "mb-5",
//     },
//   },
//   headerPhoto: {
//     photoWidth: 150,
//     photoHeight: 150,
//     textSizeTw: "text-xl",
//     textPaddingTw: "p-4",
//   },
//   scanQr: {
//     qrSize: 64,
//     textSizeTw: "text-base",
//   },
//   education: {
//     headerSizeTw: "text-base",
//     textSizeTw: "text-xs",
//   },
//   experience: {
//     headerSizeTw: "text-base",
//     textSizeTw: "text-xs",
//   },
//   chart: {
//     size: {
//       width: 300,
//       height: 150,
//       margins: {
//         top: 0,
//         left: 40,
//         right: 20,
//         bottom: 40,
//       },
//     },
//     appearance: {
//       xAxis: { ticksSize: 10 },
//       yAxis: { label: "Experience (Years)", labelSize: 10, ticksSize: 10 },
//       mainChart: { lineWidth: 1, circleR: 10 },
//       legend: {
//         headerSizeTw: "text-base",
//         headerBgTw: "bg-[#eef0f0]",
//         legendPadding: "p-3",
//         elementsStyleData: {
//           labelSizeTw: "text-sm",
//           circleSizeTw: "w-3 h-3",
//         },
//       },
//     },
//   },
//   contact: {
//     textSizeTw: "text-sm",
//   },
// };

// ------------------------------------------------------------------ Peti

// ---------------- data ----------------
const resumeTechStackDataPeti: ResumeTechStackData[] = [
  // Frequently
  { name: "SQL", usage: "Frequently", value: 12, svgFn: "sql" },
  { name: "Python", usage: "Frequently", value: 8, svgFn: "python" },
  { name: "MQL5", usage: "Frequently", value: 12, svgFn: "mql5" },
  { name: "Next JS", usage: "Frequently", value: 4, svgFn: "nextjs" },
  { name: "React", usage: "Frequently", value: 4, svgFn: "reactjs" },
  { name: "TypeScript", usage: "Frequently", value: 4, svgFn: "typescript" },
  { name: "JavaScript", usage: "Frequently", value: 6, svgFn: "javascript" },
  { name: "D3.JS", usage: "Frequently", value: 4, svgFn: "d3js" },
  { name: "Tailwind CSS", usage: "Frequently", value: 3, svgFn: "tailwindcss" },
  { name: "CSS", usage: "Frequently", value: 6, svgFn: "css" },
  { name: "HTML", usage: "Frequently", value: 6, svgFn: "html" },

  // Occasionally
  { name: "WebGl", usage: "Occasionally", value: 2, svgFn: "webgl" },
  { name: "Three Js", usage: "Occasionally", value: 2, svgFn: "threejs" },
  { name: "Git", usage: "Occasionally", value: 6, svgFn: "git" },
  { name: "Docker", usage: "Occasionally", value: 2, svgFn: "docker" },

  // Rarely
  { name: "C#", usage: "Rarely", value: 8, svgFn: "csharp" },
  { name: "Node JS", usage: "Rarely", value: 4, svgFn: "nodejs" },
];

export const resumeDataPeti: ResumeData = {
  header: {
    photo: {
      photoFn: "peter.jpg",
      candidateName: "Peter Hajdu",
    },
    scanQr: {
      qrValue: "https://peter-hajdu.vercel.app/",
    },
  },
  experience: [
    {
      postion: "Full stack web developer",
      company: "Joyson Safety Systems",
      date: "2019 – 2022",
      description: [
        {
          main: "Developing in-house web applications", children: ["bonus calculation system for monthly payments", "tooling mainteance tool", "document manager for assemblers", "production line tracking tool for addressing problematic locations in the factory"],
        },
        { main: "Technology stack: Python, Flask, Next JS, React JS, Typescript, HTML, CSS, TailwindCSS, Javascript, C#"},
      ],
    },
    {
      postion: "Full stack software developer",
      company: "Evosoft Hungary Kft.(Siemens AG.)",
      date: "2012 - 2018",
      description: [
        {
          main: "Developing software build systems for Siemens (Evosoft is subsidiary of Siemens)",
        },
        {
          main: "The main focus was on Clearcase, later TFS integration during the build process",
        },
        { main: "The database mainteance was a big part on this project" },
      ],
    },
    {
      postion: "Full stack software developer",
      company: "Quantum Digital Solutions Hungary Kft.",
      date: "2024 - 2024",
      description: [
        {
          main: "Developing student job broker management application",
        }
      ],
    },

  ],
  education: [
    {
      name: "ITIL Service Operation(Credential ID 5967782.20648521)",
      place: "EXIN",
      date: "2017",
      spec: "Customer Service",
    },
    {
      name: "Querying Microsoft SQL Server 2012/2014",
      place: "Microsoft",
      date: "2015",
      spec: "Databases",
    },
    {
      name: "ISTQB Foundation Level(Credential ID H13072303)",
      place: "Hungarian Testing Board",
      date: "2013",
      spec: "Software testing",
    },
    {
      name: "Engineering/Industrial Management (BSc)",
      place: "University of Miskolc",
      date: "2008 – 2011",
      spec: "Industrial Management(Specialization: Mechanical Engineering)",
    },
  ],
  techStack: resumeTechStackDataPeti,
  chart: {
    chartData: resumeTechStackDataPeti.map((d) => {
      return {
        xName: d.name,
        yValue: d.value,
        circleBg: d.svgFn ? "#e2e8f0" : techUsageToCircleColor[d.usage],
        circleBorderColor: techUsageToCircleColor[d.usage],
        svgFn: d.svgFn ? d.svgFn : undefined,
      };
    }),
    legendData: Object.keys(techUsageToCircleColor).map((d, i) => {
      return {
        label: d,
        color: techUsageToCircleColor[d as ResumeTechStackUsage],
      };
    }),
  },
  contact: {
    telephone: "+36-70/624-41-96",
    location: "Miskolc, Hungary",
    email: "hajdupeter24@gmail.com",
    web: "https://peter-hajdu.vercel.app/",
  },
};

// ---------------- style ----------------

// for size adjustment, page fit

// text sizes
const headerNameTextSizeTw = "text-3xl";
const resElementHeaderSizeTw = "text-2xl"; // EXPERIENCE, EDUCATION, etc...
const scanQrTextSizeTw = "text-xl";
const resElementElementHeaderSizeTw = "text-xl";
const resElementElementTextSizeTw = "text-lg";
const resElementElementSubTextSizeTw = "text-base";
const contactTextSizeTw = "text-lg";

// margins, paddings
const resElementHeaderPb = "pb-3";
const resElementHeaderMb = "mb-5";
const headerNameTextP = "p-2";
const resElementElementTextGap = "my-1";
const resElementElementSubTextGap = "my-1";

const photoWidth = 170;
const qrSize = 64;

export const resumeStylesPeti: ResumeStyleData = {
  general: { // Experience, Education,etc...
    headers: {
      headerSizeTw: resElementHeaderSizeTw,
      paddingBottomTw: resElementHeaderPb,
      marginBottomTw: resElementHeaderMb,
    },
  },
  headerPhoto: {
    photoWidth: photoWidth,
    photoHeight: (photoWidth * 4) / 3, // 4/3 aspect ratio
    textSizeTw: headerNameTextSizeTw,
    textPaddingTw: headerNameTextP,
  },
  scanQr: {
    qrSize: qrSize,
    textSizeTw: scanQrTextSizeTw,
  },
  education: {
    headerSizeTw: resElementElementHeaderSizeTw,
    textSizeTw: resElementElementTextSizeTw,
    textGap: resElementElementTextGap,
  },
  experience: {
    headerSizeTw: resElementElementHeaderSizeTw,
    textSizeTw: resElementElementTextSizeTw,
    textGap: resElementElementTextGap,
    subtextSizeTw: resElementElementSubTextSizeTw,
    subTextGap: resElementElementSubTextGap
  },
  contact: {
    textSizeTw: contactTextSizeTw,
  },

  // chart
  chart: {
    size: {
      width: 400,
      height: 200,
      margins: {
        top: 0,
        left: 50,
        right: 0,
        bottom: 80,
      },
    },
    appearance: {
      xAxis: { ticksColor: "#475569", ticksSize: 12, axisColor: "#475569" },
      yAxis: {
        labelText: "Experience (Years)",
        labelColor: "#000000",
        labelSize: 12,
        ticksColor: "#475569",
        ticksSize: 12,
        axisColor: "#475569",
      },
      mainChart: {
        lineWidth: 1,
        lineColor: "#475569",
        circleR: resumeDataPeti.chart.chartData[0].svgFn ? 10 : 10,
        circleBorderWidth: 2,
      },
      legend: {
        headerSizeTw: "text-base sm:text-xl",
        headerBgTw: "bg-white",
        legendPadding: "p-3",
        borderColorTw: "border-slate-600",
        borderWidthTw: "border-2",
        elementsStyleData: {
          labelSizeTw: "text-lg",
          circleSizeTw: "w-3 h-3",
          circleMarginLeftTw: "ml-1 sm:ml-3",
        },
      },
    },
  },
};
