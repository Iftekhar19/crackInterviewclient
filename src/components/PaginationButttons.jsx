import React, { useState } from 'react'

import {GrCaretPrevious,GrCaretNext} from "react-icons/gr"

const PaginationButttons = ({pageNumber,setPageNumber}) => {
  const [buttonText,setButtontext]=useState([1,2,3,4,5])
  return (
    <div className=' flex justify-center bg-[red] mx-2 items-center miniMobile:gap-2 md:gap-3'>
      <GrCaretPrevious className='cursor-pointer ' onClick={()=>console.log("helllo")}/>
      {buttonText.map((btn,index)=>
      {
        return <button key={index+"ifp" } style={{backgroundColor:(pageNumber===btn)?"lightgray":""}} className='px-2' onClick={()=>setPageNumber(btn)}>{btn}</button>
      })}
      <GrCaretNext/>
    </div>
  )
}

export default PaginationButttons
