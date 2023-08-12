import React, { useState } from 'react'
import FormControll from '../../components/FormControll'
import Button from '../../components/Button'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import useLocalStorage from 'use-local-storage'

const Login = ({setName1}) => {
  const [localdata,setLocaldata]=useLocalStorage("ciUserDetails");
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:"",
    password:""
  })
  const logInHandler=async (e)=>
  {
    e.preventDefault();
    try{

    
    let {data:values}=await axios.post('http://localhost:5000/api/credential/login',{
      ...data
    },{
      withCredentials:true
    });
    setLocaldata({name:values.name})
    console.log(values.name)
    setName1(()=>values.name)
    alert(values.message)
    navigate("/")
  }
  catch(err)
  {
    // console.log(err)
    
    alert(err?.response?.data?.message)
  }

  }
  return (
    <div className='min-h-screen w-full bg-[#dad9d5d1] mobile:p-5 md:p-5 flex  justify-center miniMobile:pt-[65px] mobile:pt-[72px] md:pt-[85px]'>
      <div className='mobile:w-[400px] miniMobile:w-full py-5 flex flex-col items-center md:w-[400px] h-inherit rounded-xl  bg-[#f4f8f8]'>
        <img className='w-[70px] h-[70px] rounded-full' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
        <div className='font-bold text-lg text-[#1372c5d8]'>User Log in</div>
        <form className='grid grid-cols-1 w-full gap-4 mt-3 mobile:px-3 miniMobile:px-3' onSubmit={logInHandler}>
           <FormControll required value={data.email.trim()} name="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} type="email" placeholder="Enter Email..." label="Username" />
           <FormControll required  value={data.password.trim()} name="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} type="password" placeholder="Enter Password..." label='Password' />
            <Button text="Log in" type="submit"/>      
        </form>
        <div className='flex gap-5 justify-around bg-white mt-3 w-full text-[blue] underline'>
            <a href="#">Not account Sign Up</a>
            <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  )
}

export default Login
