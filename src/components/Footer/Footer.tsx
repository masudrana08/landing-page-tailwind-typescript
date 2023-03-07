import React from 'react'
import StarImg from "../../assets/img/star.png"
export default function Footer() {
  return (
    <>
    <div  className="flex justify-center items-center">
      <img className="w-10 sm:w-28" src={StarImg} alt="" />
      <h1 className="text-3xl sm:text-7xl font-cursive font-bold text-slate-700">Star Travels</h1>
    </div>
    <p className="text-center mt-10 mb-5 px-5">Copyright 2023 | StarTravels | All Rights Reserved.</p>
    </>
  )
}
