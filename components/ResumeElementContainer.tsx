import { PropsWithChildren } from "react";

interface ResumeElementContainerInputs {
	lastElement: boolean;
  }
  
  const ResumeElementContainer = ({
	lastElement,
	children,
  }: PropsWithChildren<ResumeElementContainerInputs>) => {
	return (
	  <li className="flex">
		{/* left side, circles  */}
		<div className="flex flex-col items-center pr-3">
		  <div className="w-5 h-5 rounded-full border-[1px] border-slate-600"></div>
		  {!lastElement && (
			<div className="flex-grow border-l-[1px] border-slate-600"></div>
		  )}
		</div>
		{/* content */}
		<div className="pb-3">{children}</div>
	  </li>
	);
  };

  export default ResumeElementContainer