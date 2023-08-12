import React,{useState,useEffect} from 'react'
import FormControll from '../../components/FormControll'
import Button from '../../components/Button'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'

const Signup = ({setName1}) => {
  const [localdata,setLocaldata]=useLocalStorage("ciUserDetails");
  const navigate=useNavigate();
  const [data,setData]=useState({
    email:"",
    phone:"",
    name:"",
    password:"",
    confirmPassword:""
  })
  const submitHandler=async (e)=>
  {
    e.preventDefault();
    if(data.password!==data.confirmPassword)
    {
      alert("password doesn't match")
    }
    else
    {
      try{
     const {data:values}=await  axios.post("http://localhost:5000/api/credential/signup",{
      ...data
      },{withCredentials:true});
      localStorage.setItem("ciUserDetails",JSON.stringify({name:values.name}))
      setName1(values.name)
      navigate("/");
      setLocaldata({name:values.name})
    }
    catch(err){
      alert(err.response.data.message)
    }
  }
}
  return (
    <div className='min-h-screen w-full bg-[#dad9d5d1] mobile:p-5 md:p-5 flex  justify-center miniMobile:pt-[65px] mobile:pt-[72px] md:pt-[85px]'>
      <div className='mobile:w-[400px] miniMobile:w-full py-2 flex flex-col items-center md:w-[400px] h-inherit rounded-xl  bg-[#f4f8f8]'>
        <img className='w-[70px] h-[70px] rounded-full' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
        <div className='font-bold text-lg text-[#1372c5d8]'>New User SignUp</div>
        <form className='grid grid-cols-1 w-full gap-2 mobile:px-3 miniMobile:px-3' onSubmit={submitHandler} >
           <FormControll required value={data.email} name="email" type="email" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} placeholder="Enter Email..." label="Email" />
           <FormControll required value={data.phone} name="phone" type="number" min="0" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} placeholder="Phone Number" label='Phone Number' />
           <FormControll required value={data.name} name="name" type="text" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} placeholder="Enter Name" label='Full Name' />
           <FormControll required value={data.password} name="password" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} type="password" placeholder="Enter Password" label='Password' />
           <FormControll required value={data.confirmPassword} name="confirmPassword" onChange={(e)=>setData({...data,[e.target.name]:e.target.value})} type="password" placeholder="Confirm Password" label='Confirm Password' />
            <Button text="Sign Up" type="submit"/>      
        </form>
        <div className='flex gap-5 pb-2 justify-around bg-white mt-1 w-full text-[blue] underline'>
            <a href="#">Already Account Log In</a>
            <a href="#">Forgot Password</a>
        </div>
      </div>
    </div>
  )
}

export default Signup
