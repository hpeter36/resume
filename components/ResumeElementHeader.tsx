const ResumeElementHeader = ({ header }: { header: string }) => {
	return (
	  <h3 className="text-xl font-bold text-slate-600 pb-2 border-b-slate-600 border-b-4 w-4/5 mb-5">
		{header.toUpperCase()}
	  </h3>
	);
  };

  export default ResumeElementHeader