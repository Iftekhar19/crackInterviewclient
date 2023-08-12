import React, { useEffect, useState } from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import useLocalStorage from "use-local-storage"

const Navbar = ({name1,setName1}) => {
  const [username,setUsername]=useLocalStorage("ciUserDetails");
  const [cookie,setCookie,renoveCookie]=useCookies([])
  
  //  let name1;
    useEffect(()=>
    {
    console.log(username)
     setName1(username.name)
    },[name1,username,cookie])
    
 
    
 
  const [toggle,setToggle]=useState(false)
  const navlinkdata=[
    {title:"Dsa",
  link:"/alldata/dsa"},
    {title:"Javascript",
  link:"alldata/javascript"},
    {title:"ReactJS",
  link:"alldata/reactjs"},
    {title:"NodeJS",
  link:"/alldata/nodejs"}
  
  ]
  return (
    <div className="bg-[#1372c5] p-4 fixed top-0 left-0 w-full">
      <div className="max-w-full  flex justify-between items-center  mx-auto">
        <div className="text-white md:text-2xl font-bold text-xl"><span className="">Crack </span> <span>Interview</span></div>
         {/* menu bar */}
         {
          toggle ?  <AiOutlineClose onClick={()=>setToggle(!toggle)} className=' text-white text-3xl  md:hidden block'/> 
         : <AiOutlineMenu onClick={()=>setToggle(!toggle)} className=' text-white text-3xl  md:hidden block'/>
        }
        
        {/* for Desktop */}
        <ul className="hidden md:flex gap-7 text-white items-center text-m">
          {navlinkdata.map((e)=>
          {
            return <li className="px-[5px] hover:bg-[#69666694] rounded-md" key={e.title}><Link to={e.link}>{e.title}</Link></li>
          })}
          
          {username?<li className="px-[5px]"><button className=' bg-[#6e9db5f9] px-1.5 py-1 text-white  rounded' onClick={()=>{renoveCookie("jwt");  setUsername("")}}>log out</button></li>:
           <li className="px-[5px]"><Link to="/login">log in</Link></li>
          }
          {username.name &&<li className="px-[5px]"><img className="h-[30px] w-[30px] rounded-full " src="https://www.w3schools.com/w3images/avatar6.png" alt="avatar" /></li>}
        </ul>
        {/* for mobile and tablet */}
        <ul className={`md:hidden fixed w-[300px] h-screen bg-[#041829] top-[62px] ${toggle?"left-0":"left-[-300px]"} text-white  text-m z-10`}>
        <li className="p-5 flex gap-3 items-center "><img className="h-[40px] w-[40px] rounded-full " src="https://www.w3schools.com/w3images/avatar6.png" alt="avatar" /><span className=' md:block'>{username.name||"Guest!"}</span></li>
          {navlinkdata.map((e)=>
          {
            return <li className="p-5 hover:bg-[#69666694] rounded-md" key={e.title}><Link to={e.link} onClick={()=>setToggle(false)}>{e.title}</Link></li>
          })}
         {username?<li className="px-5"><button className='bg-[#6e9db5f9] px-1.5 py-1 text-white mt-1 rounded' onClick={()=>{renoveCookie("jwt");  setUsername("")}}>log out</button></li>:
           <li className="p-5 hover:bg-[#69666694]"><Link className='block text-white mt-1 'to="/login">log in</Link></li>
          }
         
        </ul>
      </div>
    </div>
  )
}

export default Navbar
