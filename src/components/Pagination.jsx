import React from 'react'
import DropDown from './DropDown'
import PaginationButttons from './PaginationButttons'

const Pagination = ({setRowPerPage,pageNumber,setPageNumber}) => {
  return (
    <div className=' py-3  flex  items-center  '>
      <div className='flex  gap-2 mobile:px-2 miniMobile:px-2 miniMobile:flex-col mobile:flex-col'>
        <label className='md:text-end flex-1' >Row per page</label>
        <select name="" id="" className='border-[1.5px] border-[#1372c5d8]' onChange={(e)=>setRowPerPage(e.target.value)}>
          
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
      </div>
      <PaginationButttons pageNumber={pageNumber} setPageNumber={setPageNumber}/>
    </div>
  )
}

export default Pagination
