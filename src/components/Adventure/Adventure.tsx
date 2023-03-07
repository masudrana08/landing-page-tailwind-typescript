import React from "react";
import AdventureImg1 from "../../assets/img/adventure1.png";
import AdventureImg2 from "../../assets/img/adventure2.jpg";
import AdventureImg3 from "../../assets/img/adventure3.png";
import AdventureImg4 from "../../assets/img/adventure4.png";
import AdventureImg5 from "../../assets/img/adventure5.png";

export default function Adventure() {
  return (
    <div>
      <h1 className="font-cursive text-4xl text-center font-bold my-20">
        Have an Adventure Today
      </h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-3 max-w-screen-lg gap-8">
          <div className="row-span-2 relative">
            <img className="h-full" src={AdventureImg1} alt="" />
            <div className="absolute bottom-0 bg-slate-50/70 rounded-tr-sm px-3 w-4/5">
              <b className="font-cursive text-sm">Canal Cruise</b>
              <p className="text-sm pb-1 font-thin text-slate-800">Lorem ipsum dolor sit amet conse  elit.</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-full w-full" src={AdventureImg2} alt="" />
            <div className="absolute bottom-0 bg-slate-50/70 rounded-tr-sm px-3 w-4/5">
              <b className="font-cursive text-sm">Sailing</b>
              <p className="text-sm pb-1 font-thin text-slate-800">Lorem ipsum dolor sit amet con  elit.</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-full w-full" src={AdventureImg3} alt="" />
            <div className="absolute bottom-0 bg-slate-50/70 rounded-tr-sm px-3 w-4/5">
              <b className="font-cursive text-sm">Camping</b>
              <p className="text-sm pb-1 font-thin text-slate-800">Lorem ipsum dolor sit amet  asicing elit.</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-full w-full" src={AdventureImg4} alt="" />
            <div className="absolute bottom-0 bg-slate-50/70 rounded-tr-sm px-3 w-4/5">
              <b className="font-cursive text-sm">Hiking </b>
              <p className="text-sm pb-1 font-thin text-slate-800">Lorem ipsum dolor sit amet etur  elit.</p>
            </div>
          </div>
          <div className="relative">
            <img className="h-full w-full" src={AdventureImg5} alt="" />
            <div className="absolute bottom-0 bg-slate-50/70 rounded-tr-sm px-3 w-4/5">
              <b className="font-cursive text-sm">Scuba Diving</b>
              <p className="text-sm pb-1 font-thin text-slate-800">Lorem ipsum dolor sit amet etur  elit.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
