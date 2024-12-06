"use client"

import React, { useRef, ChangeEvent, useState, useEffect } from "react";

const DayThreePage = () => {
	const [height, setHeight] = useState('100px')
	const textAreaRef = useRef<HTMLTextAreaElement>(null)



	const handleChanges = (value: string, e: ChangeEvent<HTMLTextAreaElement>) => {
		
	useEffect(() =>{
		if(textAreaRef.current){
			if(textAreaRef.current.scrollHeight > parseInt(height)){
			setHeight(textAreaRef.current.scrollHeight + 'px')
		}
	}
	},[textAreaRef.current?.style.height])
		
	}
	return (
		<div className="aspect-video w-1/2 mx-auto bg-emerald-700 rounded-md border-red-600 border-4 ">
			<textarea
				className={`bg-white mx-auto h-${height} items-center p-2`}
				ref={textAreaRef}
				onChange={(e) => handleChanges(e.target.value, e)}

			>

			</textarea>
		</div>
	)
}


export default DayThreePage