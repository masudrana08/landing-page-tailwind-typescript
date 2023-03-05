import React from 'react'
import {AiOutlineInstagram, AiOutlineMail} from 'react-icons/ai'
import {CiTwitter} from 'react-icons/ci'
import {HiOutlinePhone} from 'react-icons/hi'
export default function Navbar() {
  return (
    <>
        <div className="flex justify-between items-center text-white mx-5">
            <div className="flex text-xl gap-x-2">
                <AiOutlineInstagram />
                <CiTwitter/>
            </div>
            <div className="flex gap-x-5">
                <span className='flex items-center gap-x-2'><HiOutlinePhone className="text-xl" /><span className="hidden sm:block">+880 18798 66005</span></span>
                <span className='flex items-center gap-x-2'><AiOutlineMail className="text-xl" /><span className='hidden sm:block'>masud.web.developer@gmail.com</span></span>
            </div>
        </div>
        <ul className='text-white flex gap-x-3 justify-center'>
            <a href="#home" >Home</a>
            <a href="#packages">Packages</a>
            <a href="#tours">Tours</a>
        </ul>
    </>
  )
}
