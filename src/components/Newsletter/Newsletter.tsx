import React from "react";
import Award1 from "../../assets/img/award1.png";
import Award2 from "../../assets/img/award2.png";
import Award3 from "../../assets/img/award3.png";
import Award4 from "../../assets/img/award4.png";
import Award5 from "../../assets/img/award5.png";
import Award6 from "../../assets/img/award6.png";

export default function Newsletter() {
  return (
    <div className="flex justify-center ">
      <div className="lg:flex gap-x-20 justify-center sm:my-20 mx-5 sm:mx-20">
        <div className="bg-white/50 text-center p-10 xs:p-20 basis-2/6 flex items-center">
          <div>
            <h1 className="font-hero tracking-wider ">NEWSLETTER</h1>
            <p className="py-5 text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, qui.
            </p>
            <div className="flex flex-col gap-8">
              <input
                className="placeholder:text-slate-500 placeholder:text-xs placeholder:pl-2 py-2 "
                type="text"
                placeholder="Email"
              />
              <input
                className="placeholder:text-slate-500 placeholder:text-xs placeholder:pl-2 py-2 "
                type="text"
                placeholder="Message"
              />
              <button className="text-slate-600">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="my-20 lg:my-0 mx-5">
          <h1 className="font-cursive text-3xl xs:text-4xl  font-bold text-center sm:text-left">
            Award Winning
          </h1>
          <p className="my-5  text-slate-500 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
            impedit necess
          </p>
          <div className="grid grid-cols-1 xs:grid-cols-2 gap-5  sm:mx-0">
            <div className="flex flex-col sm:flex-row items-center xs:items-start sm:items-center gap-2">
              <img className="w-40" src={Award1} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">
                  Attractions
                </b>
                <p className="font-thin text-sm">Top 10 Attractions</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center xs:items-end sm:items-center gap-2">
              <img className="w-40" src={Award2} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">Hotels</b>
                <p className="font-thin text-sm">Top 5 Hotels</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center xs:items-start  sm:items-center gap-2">
              <img className="w-40" src={Award3} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">Resorts</b>
                <p className="font-thin text-sm">Top Resorts</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  items-center xs:items-end sm:items-center gap-2">
              <img className="w-40" src={Award4} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">Landmarks</b>
                <p className="font-thin text-sm">Top Landmarks</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row items-center xs:items-start sm:items-center gap-2">
              <img className="w-40" src={Award5} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">Beaches</b>
                <p className="font-thin text-sm">Top 7 Beaches</p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row  items-center xs:items-end sm:items-center gap-2">
              <img className="w-40" src={Award6} alt="" />
              <div className="w-40">
                <b className=" font-cursive text-lg">Islands</b>
                <p className="font-thin text-sm">Top Islands</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
