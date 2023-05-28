import React from "react";
import "./Reviews.css";
import avatar from "../../../assets/extra/avatar.png"

const Reviews = () => {
  return (
    <>
     <div className="bg-slate-100 py-16">
        <h1 className="text-center text-5xl font-semibold">
          Customer Testmonials
        </h1>
        <p className="text-center text-2xl text-info mt-4 font-semibold">
        What Clients Says
        </p>
        
      </div>
      <div className="flex md:flex-row flex-col gap-14 md:space-x-10  container mx-auto mt-24 mb-16">
      <div className="card custom-backgtound flex items-center justify-center  bg-base-100 shadow-xl w-full">
        <div className="avatar relative bottom-10">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} />
          </div>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h2 className="card-title text-center text-white">Halka Mama </h2>
            <h5 className="card-title text-center text-white">halka@gorib group</h5>
          </div>
          <p className="text-white">
            "It is very important for us to keep abreast of the latest
            developments and to navigate freely in the information space, the
            resources of Medialogy allow us to do this. Every day we can conduct
            operational monitoring of the media and analyze data online, this
            saves the time of analysts and journalists "
          </p>
        </div>
      </div>
      <div className="card custom-backgtound flex items-center justify-center  bg-base-100 shadow-xl w-full">
        <div className="avatar relative bottom-10">
          <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={avatar} />
          </div>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h2 className="card-title text-center text-white">Halka Mama </h2>
            <h5 className="card-title text-center text-white">halka@gorib group</h5>
          </div>
          <p className="text-white">
            "It is very important for us to keep abreast of the latest
            developments and to navigate freely in the information space, the
            resources of Medialogy allow us to do this. Every day we can conduct
            operational monitoring of the media and analyze data online, this
            saves the time of analysts and journalists "
          </p>
        </div>
      </div>
      
      </div>
    </>
  );
};

export default Reviews;
