import React from 'react'
import {BsInstagram,BsYoutube,BsGithub} from "react-icons/bs";
import {AiFillLinkedin} from "react-icons/ai"
import {ImTwitter} from "react-icons/im";
import {SiLeetcode} from "react-icons/si";

const Footer = () => {
  return (
    
    <div className='w-full bg-[#110310]'>
     <div className='text-white text-center'>Developed By Iftekhar Ansari</div>
     <div className='flex justify-center gap-7 py-5 text-xl'>
      <a href='#'><AiFillLinkedin title='linkedin' className='text-white '/></a>
      <a href='#'><BsInstagram title="instagram" className='text-white'/></a>
      <a href='#'><ImTwitter title='twitter' className='text-white'/></a>
      <a href='#'><BsYoutube title='youtube' className='text-white'/></a>
      <a href='#'><BsGithub title='github' className='text-white'/></a>
      <a href='#'> <SiLeetcode title='leetcode' className='text-white'/></a>
      
     </div>
    </div>
    
  )
}

export default Footer
