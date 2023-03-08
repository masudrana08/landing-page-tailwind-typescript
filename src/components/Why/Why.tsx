import React from 'react'
import GuarantyImg from "../../assets/img/guaranty.png"
import ServiceImg from "../../assets/img/service.png"
import ExperienceImg from "../../assets/img/experience.png"
import Adventure from '../Adventure/Adventure'
import Newsletter from '../Newsletter/Newsletter'
import Footer from '../Footer/Footer'
import Experience from '../Experience/Experience'

export default function Why() {
  return (
    <div className="relative pt-20  before:content[''] before:bg-why before:bg-cover before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:opacity-50 flex flex-col justify-center">
      <h1 className="relative text-3xl xs:text-4xl text-black font-cursive font-bold text-center mb-20">Why Us?</h1>
      <div className='relative flex flex-col sm:flex-row justify-center items-center gap-5 '>
        <div className="gap-y-1.5 bg-slate-100/70 w-60 px-4 py-12 flex flex-col items-center text-center ">
          <img src={GuarantyImg} alt="" />
          <h3 className="font-hero tracking-wider">Guaranty</h3>
          <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus?</p>
        </div>
        <div className="gap-y-1.5 bg-slate-100/70 w-60 px-4 py-12 flex flex-col items-center text-center ">
          <img src={ServiceImg} alt="" />
          <h3 className="font-hero tracking-wider">Service</h3>
          <p className="text-sm">Dicta sequi quisquam minus! Quaerat nobis pariatur nulla quas similique!</p>
        </div>
        <div className="gap-y-1.5 bg-slate-100/70 w-60 px-4 py-12 flex flex-col items-center text-center ">
          <img src={ExperienceImg} alt="" />
          <h3 className="font-hero tracking-wider">Experience</h3>
          <p className="text-sm">Deserunt quam alias aspernatur in necessitatibus maiores est inventore velit?</p>
        </div>
      </div>
      <div className="pt-20 relative">
          <Adventure />
      </div>
      <div className="pt-20 relative">
          <Newsletter />
      </div>
      <div className="pt-20 relative">
          <Experience />
      </div>
      <div className="pt-20 relative">
          <Footer />
      </div>
    </div>
  )
}
