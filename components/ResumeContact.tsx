import React from 'react'
import {
	IoCallOutline,
	IoLocationOutline,
	IoMailOutline,
	IoGlobeOutline,
  } from "react-icons/io5";

import ResumeElementHeader from './ResumeElementHeader'

export type ResumeContactData = {
	telephone: string;
	location: string;
	email: string;
	web: string;
  };

export type ResumeContactStyleData = {
	textSizeTw: string;
 }

export interface ResumeContactInputs extends React.HTMLAttributes<HTMLDivElement> {
	data: ResumeContactData,
	styleComp: ResumeContactStyleData
}

const ResumeContact = (inputs: ResumeContactInputs) => {

	// add to classname if we specified some TW style
	const baseContTw = "";
	const contTw = inputs.className
	  ? `${baseContTw} ${inputs.className}`
	  : baseContTw;
  
	// get component main inputs
	// exclude 'className' from div props
	const {
		data, styleComp,
	  ["className"]: deletedKey,
	  ...propsWithoutCompInputsAndClassName
	} = inputs;

  return (
	<div className={contTw} {...propsWithoutCompInputsAndClassName}>
	<div>
	  <div className="flex items-center gap-1 my-2">
		<IoCallOutline className="w-6 h-6" />
		<span className={`${styleComp.textSizeTw}`}>{data.telephone}</span>
	  </div>
	  <div className="flex items-center gap-1 my-2">
		<IoLocationOutline className="w-6 h-6" />
		<span className={`${styleComp.textSizeTw}`}>{data.location}</span>
	  </div>
	  <div className="flex items-center gap-1 my-2">
		<IoMailOutline className="w-6 h-6" />
		<span className={`${styleComp.textSizeTw}`}>{data.email}</span>
	  </div>
	  <div className="flex items-center gap-1 my-2">
		<IoGlobeOutline className="w-6 h-6" />
		<span className={`${styleComp.textSizeTw}`}>{data.web}</span>
	  </div>
	</div>
  </div>
  )
}

export default ResumeContact