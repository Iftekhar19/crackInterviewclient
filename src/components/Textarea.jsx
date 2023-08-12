import React from 'react'

const Textarea = ({placeholder,label,name,value,onChange,required}) => {
  return (
    <div className="grid grid-cols-1 md:p-2 gap-2 w-full bg-[white] items-center justify-center">
    <label className="font-bold " htmlFor="username">{label}</label>
    <textarea required name={name} value={value} onChange={onChange} placeholder={placeholder} rows="8" className='resize-none border border-b p-3 border-[#1372c5d8] outline-none'></textarea>
  </div>
  )
}

export default Textarea
