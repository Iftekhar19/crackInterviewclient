import React from "react";

const Filters = () => {
  return (
    <div className="w-full flex md:flex-row gap-3 px-2 h-[100px]  miniMobile:flex-col  items-center mobile:flex-col mobile:pb-3 miniMobile:border-b-[2px] mobile:border-b-[2px]  bordder border-b-[3px] outline-none  border-[#1372c5d8]">
      <div className="flex-1 flex gap-4 items-center w-full">
        <label htmlFor="searchbox" className="shrink-0 mobile:text-[16px] miniMobile:text-[13px] text-end text-m md:font-bold">
          Search By
        </label>
        <input
          type="text"
          placeholder="search by comapny name"
          className="  flex-auto p-2 miniMobile:p-1 miniMobile:border-b-[2px] mobile:border-b-[2px]  bordder border-b-[2px] outline-none  border-[#1372c5d8] "
        />
      </div>
      <div className="flex-1 flex gap-4 items-center w-full">
        <label htmlFor="searchbox" className="shrink-0 mobile:text-[16px] miniMobile:text-[13px] text-end text-m md:font-bold">
          Based on
        </label>
        <select name="" id=""  className="  flex-auto p-2 miniMobile:p-1 miniMobile:border-b-[2px] mobile:border-b-[2px]  bordder border-b-[2px] outline-none  border-[#1372c5d8] ">
          <option value="name">Name</option>
          <option value="title">Title</option>
          
          
        </select>
        
      </div>
    </div>
  );
};

export default Filters;
