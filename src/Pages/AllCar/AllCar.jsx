import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import Footer from "../../Shared/Footer/Footer";
import "./AllCar.css";
import useDynamicTitle from "../../Hooks/useDynamicTitle/useDynamicTitle";

const AllCar = () => {
  const addedCar = useLoaderData();
  // console.log(addedCar);
  const [searchQuery, setSearchQuery] = useState("");
  const [limit, setLimit] = useState(20);
  useDynamicTitle("TOYHAVEN | All-car");


  return (
    <div>
      <Navbar />
      <div className="custom-bg">
        <h1 className="text-5xl text-center text-white font-bold">
          New Added Car
        </h1>

        <div className="overflow-x-auto container mx-auto w-full">

        <div className="flex items-center justify-center custom-bg  space-x-4 mt-10 pb-5 ">
            <input
              type="text"
              placeholder="Search by Car name"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered custom-backgtound text-xl"
            />
            <select
              value={limit}
              onChange={(e) => setLimit(Number(e.target.value))}
              className="select select-bordered custom-backgtound text-lg"
            >
              <option className="text-white custom-backgtound" value={10}>10</option>
              <option className="text-white custom-backgtound" value={20}>20</option>
            </select>
          </div>

          <table className="table w-full custom-table " 
           
          >
            <thead>
              <tr>
                <th className="custom-bg text-center">Avatar</th>
                <th className="custom-bg text-center">Car Name</th>
                <th className="custom-bg text-center">User/Seller Name</th>
                <th className="custom-bg text-center">Avilable Quantity</th>
                <th className="custom-bg text-center">Price</th>
                <th className="custom-bg text-center">Subcategory</th>
                <th className="custom-bg text-center">Details</th>
              </tr>
            </thead>

            <tbody className="custom-bg">
        
               {addedCar
                .filter((singleCar) =>
                  singleCar.toy_name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .slice(0, limit)
              
              .map((singleCar) => (
                <tr key={singleCar._id} className="custom-bg">
                  <th className="custom-bg">
                    <div className="flex items-center space-x-3 custom-bg">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12 custom-bg">
                          <img
                            src={singleCar.picture}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      
                    </div>
                  </th>
                  <th className="custom-bg">
                        <div className="font-bold text-center">{singleCar.toy_name}</div>
                      </th>
                  <th className="custom-bg text-center">
                    {singleCar.seller}
                  </th>
                  <th className="custom-bg text-center">{singleCar.available_quantity}</th>
                  <th className="custom-bg text-center">
                    <button className="btn btn-ghost btn-xs ">{singleCar.price}</button>
                  </th>
                  <th className="custom-bg text-center">
                    <button className="btn btn-ghost btn-xs">{singleCar.subcategory}</button>
                  </th>
                  <th className="custom-bg text-center">
                    <Link to={`/car-details/${singleCar._id}`}><button  className="btn btn-ghost btn-xs">View Details</button></Link>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllCar;
