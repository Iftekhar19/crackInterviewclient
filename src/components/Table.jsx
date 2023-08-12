import React from "react";


const Table = (props) => {
  return (
    <div className="w-full overflow-x-auto ">
      <table className="w-full px-5 border-collapse border border-[#1372c5d8]">
        <thead className="text-white bg-[#1372c5d8]">
          <tr className="text-xs md:text-[14px]">
            <th className="py-2 ">Sr No</th>
            <th>Title</th>
            <th>Category</th>
            <th>Asked in</th>
            <th>Posted By</th>
          </tr>
        </thead>
        <tbody className="text-center   [&>*:nth-child(even)]:bg-[lightgray] mobile:text-[15px] miniMobile:text-[12px]">
            {
                props.data.map((e,i)=>
                {
                  return <tr key={i} className=" ">
                    <td className="p-2 ">{i+1}</td>
                    <td className="p-2 ">{e.title}</td>
                    <td className="p-2 ">{e.category}</td>
                    <td className="p-2 ">{e.comapny}</td>
                    <td className="p-2 ">{e.providerName.split(" ")[0]}</td>
                  </tr>  
                })
            }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
