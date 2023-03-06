import React from 'react'
import BgImg from "../../assets/img/popularbg.jpg"
import Popular1 from "../../assets/img/popular1.png"
import Popular2 from "../../assets/img/popular2.png"
import Popular3 from "../../assets/img/popular3.png"
import Popular4 from "../../assets/img/popular4.png"
export default function Popular() {
  return (
    <div style={{backgroundImage: `url(${BgImg})`}} className="sm:h-screen bg-cover flex items-center justify-center">
      <div>
      <h1 className='text-4xl text-slate-800 font-cursive font-bold  text-center mb-10'>Popular Destination</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className='w-64 bg-white'>
            <img className="min-w-full" src={Popular1} alt="" />
            <div className="px-4 py-2">
              <b className='font-cursive'>Venice</b>
              <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.</p>
            </div>
          </div>
          <div className='w-64 bg-white'>
            <img className="min-w-full" src={Popular2} alt="" />
            <div className="px-4 py-2">
              <b className='font-cursive'>San Paolo</b>
              <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.</p>
            </div>
          </div>
          <div className='w-64 bg-white'>
            <img className="min-w-full" src={Popular3} alt="" />
            <div className="px-4 py-2">
              <b className='font-cursive'>Barbados</b>
              <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.</p>
            </div>
          </div>
          <div className='w-64 bg-white'>
            <img className="min-w-full" src={Popular4} alt="" />
            <div className="px-4 py-2">
              <b className='font-cursive'>Cyprus</b>
              <p className="text-sm text-slate-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, laboriosam.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
