import React from 'react'
import Navbar from '../Navbar/Navbar'

export default function Hero() {
  return (
    <div className="bg-[url('./assets/img/herobg.jpg')] bg-cover bg-no-repeat h-screen">
        <Navbar />
        <div className="mt-40">
            <h1 className="text-center text-4xl text-white font-bold font-hero tracking-widest">Your Dream Vacation Awaits</h1>
            <h1 className="text-center text-4xl text-white font-bold font-cursive mt-4">Explore the World with us.</h1>
        </div>
        <div className="flex justify-center text-white mt-36">
            <button className="bg-pm px-5 py-1 focus:underline underline-offset-4">FLIGHT</button>
            <button className="bg-pm px-5 py-1 focus:underline underline-offset-4">HOTELS</button>
            <button className="bg-pm px-5 py-1 focus:underline underline-offset-4">TOURS</button>
        </div>
    </div>
  )
}
