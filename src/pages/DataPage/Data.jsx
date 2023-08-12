import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Filters from '../../components/Filters'
import Table from '../../components/Table'
import data from "../../components/dummyData"
import Pagination from '../../components/Pagination';
import {useNavigate,useParams} from "react-router-dom";
import {useCookies} from "react-cookie"
import axios from "axios"


const Data = () => {
  const {category}=useParams();
  const [rowPerPage,setRowPerPage]=useState(20)
  const [allData,setAllData]=useState([])
  const [pageNumber,setPageNumber]=useState(1)
  const [cookie,setCookie,removeCookie]=useCookies([]);
  // const []
  const navigate = useNavigate();
  

  useEffect(()=>
  {
   (async function(){
    try{
      let {data}=await axios.get(`http://localhost:5000/api/alldata/${category}?page=${pageNumber}&limit=${rowPerPage}`,{
        headers:{
          "Content-Type":"application/json",
          // Authorization:"Bearer "+cookie.jwt,
          "Allow-Access-Control-Origin":"*"
        }
      });
      console.log(data)
    }
    catch(err)
    {
      
    alert(err.response.data?.message)
    navigate("/login")
    }
    

   })();
    
  },[category,pageNumber,rowPerPage])
  return (
    <div className='w-full min-h-screen bg-[#ede7e7] flex justify-center items-center miniMobile:pt-[62px] mobile:pt-[62px] md:pt-[63px]'>
        <div className='w-[1100px] min-h-screen bg-[#ffffff] '>
         <Header className=" text-center border border-bottom-[2px]  font-uppercase py-4 text-black  font-bold text-xl " content={`Interview question of ${category}`}  />
           
        {/* Filter bar */}
 <Filters/>
        {/* data table */}
        <Table data={data}/>
        
        {/* Pagination */}
        <Pagination setRowPerPage={setRowPerPage} pageNumber={pageNumber}  setPageNumber={setPageNumber}/>
        </div>
      
    </div>
  )
}

export default Data
