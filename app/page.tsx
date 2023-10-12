"use client";

import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

import Resume, {
  ResumeData,
  ResumeStyleData,
  ResumeTechStackData,
} from "@/components/Resume";

import { techUsageToCircleColor } from "@/constants";
import { ResumeTechStackUsage } from "@/types";

const ResumePage = () => {
  const resumeTechStackData: ResumeTechStackData[] = [
    { name: "R", usage: "Frequently", value: 7 },
    { name: "SQL", usage: "Frequently", value: 6 },
    { name: "Node JS", usage: "Frequently", value: 2 },
    { name: "JavaScript", usage: "Frequently", value: 2 },
    { name: "Power BI", usage: "Frequently", value: 2 },
    { name: "DMN", usage: "Frequently", value: 1 },
    { name: "DAX", usage: "Frequently", value: 1 },
    { name: "HTML", usage: "Occasionally", value: 2 },
    { name: "CSS", usage: "Occasionally", value: 2 },
    { name: "Figma", usage: "Occasionally", value: 2 },
    { name: "D3.JS", usage: "Occasionally", value: 1 },
    { name: "MongoDB", usage: "Occasionally", value: 1 },
    { name: "AutoCAD", usage: "Rarely", value: 10 },
    { name: "VBA", usage: "Rarely", value: 3 },
    { name: "Python", usage: "Rarely", value: 3 },
  ];

  const resumeData: ResumeData = {
    header: {
      photo: {
        photoFn: "gabor.jpg",
        candidateName: "Gabor Hajdu",
      },
      scanQr: {
        qrValue: "https://gasti6-portfolio.herokuapp.com/",
      },
    },
    experience: [
      {
        postion: "Business Data Analyst",
        company: "Morgan Stanley",
        date: "2022 – Present",
        description: [
          "Data management and analysis (SQL, R)",
          "Data visualization (Power BI, base R, ggplot2)",
          "Statistical Analysis",
          "Standardization of business logic (DMN)",
        ],
      },
      {
        postion: "Senior Design Management Expert",
        company: "MOL Hungarian Oil and Gas PLC",
        date: "2019 - 2022",
        description: [
          "Automating design process / calculations (R, VBA, AutoCAD)",
          "OSBL design of green- and brownfield process plants",
          "ISBL integration to existing infrastructure",
          "Design reviews",
        ],
      },
      {
        postion: "Process Engineer",
        company: "Pannonia Ethanol",
        date: "2016 – 2019",
        description: [
          "Eng. calculations and app development (Python)",
          "Mechanical and process design (Plant3D, R, Excel-VBA)",
          "Project management",
        ],
      },
      {
        postion: "Design Engineer",
        company: "Wanhua – Borsodchem",
        date: "2013 – 2016",
        description: [
          "Data catalog management (SQL)",
          "Piping and equipment design (PDMS, AutoCAD)",
        ],
      },
      {
        postion: "Plant Operator",
        company: "Tiszai Vegyi Kombinát",
        date: "2004 – 2013",
        description: [
          "Monitoring and optimization of petrochemical process plants",
        ],
      },
    ],
    education: [
      {
        name: "MBA",
        place: "ELTE Institute of Business Economics",
        date: "2019 – 2022",
        spec: "Finance",
      },
      {
        name: "Foundation Certificate in Project Management",
        place: "Foundation Certificate in Project Management",
        date: "2017",
        spec: "Prince2 project management certification",
      },
      {
        name: "Mechanical Engineer (MSc)",
        place: "University of Miskolc",
        date: "2014 – 2017",
        spec: "Chemical Engineering",
      },
      {
        name: "Mechanical Engineer (BSc)",
        place: "University of Nyiregyhaza",
        date: "2013 – 2016",
        spec: "Vehicle technology",
      },
      {
        name: "Quality Management System Improvement",
        place: "TÜV-Rheinland",
        date: "2010 – 2011",
        spec: "Quality Assurance Certificate",
      },
    ],
    techStack: resumeTechStackData,
    chart: {
      chartData: resumeTechStackData.map((d) => {
        return {
          xName: d.name,
          yValue: d.value,
          circleBg: techUsageToCircleColor[d.usage],
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
      telephone: "+36-30/490-71-89",
      location: "Budapest, Hungary",
      email: "gasti6@gmail.com",
      web: "https://gasti6-portfolio.herokuapp.com/",
    },
  };

  const resumeStyles: ResumeStyleData = {
    headerPhoto: {
      photoWidth: 200,
      photoHeight: 200,
      textSizeTw: "text-xl",
    },
    scanQr: {
      qrSize: 96,
      textSizeTw: "text-md",
    },
    education: {
      headerSizeTw: "text-lg",
      textSizeTw: "text-xs",
    },
    experience: {
      headerSizeTw: "text-lg",
      textSizeTw: "text-xs",
    },
    chart: {
      size: {
        width: 1000,
        height: 500,
        margins: {
          top: 50,
          left: 100,
          right: 100,
          bottom: 100,
        },
      },
      appearance: {
        xAxis: { ticksSize: 20 },
        yAxis: { label: "Experience (Years)", labelSize: 20, ticksSize: 20 },
        mainChart: { lineWidth: 2, circleR: 20 },
        legend: {
          headerSizeTw: "text-md",
          elementsStyleData: {
            labelSizeTw: "text-lg",
            circleSizeTw: "w-5 h-5",
          },
        },
      },
    },
    contact: {
      textSizeTw: "text-sm",
    },
  };

  const generatePdf2 = (e: React.MouseEvent<HTMLButtonElement>) => {
    const resumeNode = document.querySelector("#resume-container");
    if (!resumeNode)
      throw Error(
        "Error when generating PDF, the resume node cannot be found!"
      );

    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "pt",
      format: "a4",
    });
    pdf.html(resumeNode as HTMLElement, {
      callback: (doc) => pdf.save("download.pdf"),
      x: 0,
      y: 0,
      margin: [10, 10, 10, 10],
      autoPaging: "text",
      width: 170, //target width in the PDF document
      windowWidth: 650, //window width in CSS pixels
    });
    //.then(() => { });
  };

  const generatePdf = (e: React.MouseEvent<HTMLButtonElement>) => {
    const resumeNode = document.querySelector("#resume-container");
    if (!resumeNode)
      throw Error(
        "Error when generating PDF, the resume node cannot be found!"
      );

    html2canvas(resumeNode as HTMLElement).then((canvas) => {
      // get image content
      const imgData = canvas.toDataURL("image/png");

      //saveAs(imgData, "image.png")

      // // init jsPDF
      const pdf = new jsPDF({
        orientation: "portrait",
        format: "a4",
        unit: "px",
      });

      // // add image to jsPDF
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);

      // // save image as pdf
      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      {/* control panel - edit, save resume */}
      <div className="fixed z-10 bottom-5 w-full bg-slate-500 flex items-center justify-end">
        <button className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-md m-5">
          Edit
        </button>
        <button
          className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-md m-5"
          onClick={generatePdf}
        >
          Save PDF
        </button>
      </div>
      {/* resume */}
      <Resume
        data={resumeData}
        styleComp={resumeStyles}
        className=" max-w-7xl mx-auto"
      />
    </div>
  );
};

export default ResumePage;
