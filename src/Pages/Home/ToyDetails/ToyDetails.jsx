import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const carDetails = useLoaderData();
  const {toy_name,subcategory,seller,rating,price,picture,description,available_quantity}= carDetails
  console.log(carDetails);
  return (
    <div>
      <Navbar></Navbar>
      
      <div className="hero min-h-screen custom-bg">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={picture}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Car-Name: {toy_name}</h1>
            <h4 className="text-2xl font-bold">Seller-Name: {seller}</h4>
            <p className="py-6"><span className="text-2xl font-bold">Description: </span>
              {description}
            </p>
            <div className="space-x-3">
            <button className="btn custom-btn  btn-primary">Rating{rating}</button>
            <button className="btn custom-btn btn-primary">Price: ${price}</button>
            <button className="btn custom-btn btn-primary">Sub category : {subcategory}</button>
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default ToyDetails;
