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

import { resumeDataPeti, resumeStylesPeti } from "@/constants";

const ResumePage = () => {

  const resumeData = resumeDataPeti
  const resumeStyles = resumeStylesPeti

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
      {false && <div className="fixed z-10 bottom-5 w-full bg-slate-500 flex items-center justify-end">
        <button className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-md m-5">
          Edit
        </button>
        <button
          className="bg-red-700 hover:bg-red-900 text-white p-2 rounded-md m-5"
          onClick={generatePdf}
        >
          Save PDF
        </button>
      </div>}
      {/* resume */}
      <Resume
        data={resumeData}
        styleComp={resumeStyles}
        className="" //m-5 max-w-7xl 
      />
    </div>
  );
};

export default ResumePage;
