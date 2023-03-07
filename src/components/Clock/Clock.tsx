import React from 'react'
import ClockImg from "../../assets/img/clock.png"
export default function Clock() {
  return (
    <div className="md:h-screen py-20 bg-clock bg-cover flex items-center justify-center">
        <img src={ClockImg} alt="" />
    </div>
  )
}
