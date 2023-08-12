import React from 'react'

const DropDown = ({data,label,name,value,onChange}) => {
  return (
    <div className="grid grid-cols-1 md:p-2 gap-2 w-full bg-[white] items-center justify-center">
    <label className="font-bold " htmlFor="username">{label}</label>
    <select required name={name} value={value} onChange={onChange} className=" border border-b-[3px] p-2 border-[#1372c5d8] outline-none " >
      
        <option value="">Choose Category</option>
        {data.map((e)=><option key={e} value={e}>{e}</option>)}
    </select>
  </div>
  )
}

export default DropDown
