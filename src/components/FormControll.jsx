import React from "react";

const FormControll = (props) => {
  return (
    <div className="grid grid-cols-1 md:p-2 gap-2 w-full bg-[white] items-center justify-center">
      <label className="font-bold " htmlFor="username">{props.label}</label>
      <input
        {...props}
        
       
        className=" miniMobile:border-b-[1px] mobile:border-b-[2px]  bordder border-b-[2.5px] outline-none  border-[#1372c5d8]"
      />
    </div>
  );
};

export default FormControll;
