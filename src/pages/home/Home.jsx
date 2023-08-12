import React, { useEffect } from 'react'
import Description from '../../components/Description'
import Header from '../../components/Header'
import Card from '../../components/Card'
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';


const Home = () => {
 
  const navigate=useNavigate();
  const [cookie,setCookie,removeCookie]=useCookies([]);
  // const checkToken = async () => {
  //   try {
  //     let { data } = await axios.post("http://localhost:5000/api/checkuser",{},{
  //       headers:{
  //         "Content-Type":"application/json",
  //         "Authorization":"Bearer "+cookie.jwt,
  //         "Allow-Access-Control-Origin":"*"
  //       }
  //     });
  //   } catch (err) {
  //     navigate("/login");
  //   }
  // };
  // useEffect(()=>
  // {
  //   if(!cookie.jwt)
  //   {
  //     navigate("/login")
  //   }
  //   else
  //   {
    
  //   }
  // },[cookie,navigate])
  return (
    <div className='w-full min-h-screen bg-[#d7d7d7c2]  miniMobile:mt-[62px] mobile:mt-[62px] md:mt-[63px]'>
        {/* for blur */}
        <div className='w-[150px] h-[150px] bg-[#1372c5d8] absolute blur-[100px] top-[150px] left-[100px]'></div>
        <div className='w-[150px] h-[150px] bg-[#1372c5d8] absolute blur-[100px] bottom-[100px] right-[100px]'></div>
        
        <Header className=' py-2 md:p-4  bg-[#4f585f] text-xl uppercase text-center text-white font-bold' content="Hello codders"/>
        <Header className=' py-3 md:p-4   bg-transparent text-xl uppercase text-center text-black font-bold' content="Welcome to the crack interviews"/>
      
      <Description/>
      <div className=' gap-2 p-3 bg-[#f5f5f580]  grid md:grid-cols-4 mobile:grid-cols-2 miniMobile:grid-cols-1  '>
        <Card title='React JS' questionCount='10' reference="/reactjs"/>
        <Card title='Javascript' questionCount='10' reference="/reactjs"/>
        <Card title='Dsa' questionCount='10' reference="/reactjs"/>
        <Card title='Nodejs' questionCount='10' reference="/reactjs"/>
      </div>
    </div>
  )
}

export default Home
