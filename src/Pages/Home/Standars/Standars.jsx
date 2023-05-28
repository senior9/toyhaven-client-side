import React from "react";
import extraOne from "../../../assets/extra/extra-1.png";
import extraTwo from "../../../assets/extra/extra-2.png";
import extraThree from "../../../assets/extra/extra-3.png";
import extraFour from "../../../assets/extra/extra-4.png";

const Standars = () => {
  return (
    <div className="mt-16 mb-16">
      <div className="bg-slate-100 py-16">
        <h1 className="text-center text-5xl font-semibold">
          Made of high quality materials and by highest possible standards
        </h1>
      </div>
      <div className="md:grid md:grid-cols-2 container mx-auto place-items-center justify-items-center space-y-12 gap-28">
        
        <div className='flex flex-col md:flex-row gap-11 items-center justify-center'>
          <div>
            <img src={extraTwo} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold ">Easy assembling </h1>
            <p className="text-xl font-light ">
              we offer a wide selection of dust-resistant toys that are perfect
              for little ones who love to have fun while keeping their living
              spaces tidy.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-11 items-center justify-center'>
          <div>
            <img src={extraThree} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Water Proof</h1>
            <p className="text-xl font-light">
              we offer a wide selection of dust-resistant toys that are perfect
              for little ones who love to have fun while keeping their living
              spaces tidy.
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row gap-11 items-center justify-center'>
          <div>
            <img src={extraFour} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Dust Proof</h1>
            <p className="text-xl font-light">
              we offer a wide selection of dust-resistant toys that are perfect
              for little ones who love to have fun while keeping their living
              spaces tidy.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-11 items-center justify-center">
          <div>
            <img src={extraOne} alt="" />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Eco Friendly</h1>
            <p className="text-xl font-light">
              we offer a wide selection of dust-resistant toys that are perfect
              for little ones who love to have fun while keeping their living
              spaces tidy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Standars;
