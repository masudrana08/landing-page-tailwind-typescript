import React from 'react'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {HiOutlinePhone} from 'react-icons/hi'
export default function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center text-white mx-5 pt-5">
            <div className="flex text-xl gap-x-2">
                <AiOutlineInstagram className="hover:cursor-pointer" onClick={()=>window.open("https://instagram.com", "_blank")} />
                <CiTwitter className="hover:cursor-pointer" onClick={()=>window.open("https://twitter.com", "_blank")}  />
            </div>
            <div className="flex gap-x-5">
                <span  className="hover:cursor-pointer flex items-center gap-x-2" onClick={()=>window.open("tel:+8801879866005", "_blank")}><HiOutlinePhone className="text-xl" /><span className="hidden sm:block">+880 18798 66005</span></span>
                <span className="hover:cursor-pointer flex items-center gap-x-2" onClick={()=>window.open("mailto:masud.web.developer@gmail.com", "_blank")}><AiOutlineMail className="text-xl" /><span className='hidden sm:block'>masud.web.developer@gmail.com</span></span>
            </div>
        </div>
        <ul className='text-white flex gap-x-5 justify-center pt-5 sticky top-0 '>
            <a href="#home" >Home</a>
            <a href="#packages">Packages</a>
            <a href="#tours">Tours</a>
        </ul>
    </>
  )
}
