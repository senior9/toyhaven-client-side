import React from "react";
import "./SingleToy.css"
import { Link } from "react-router-dom";

const SingleToy = ({ SingleToy }) => {
  console.log(SingleToy.picture);
  const {toy_name,available_quantity,picture,price,rating,_id} =SingleToy
  return (
    <div className="">
      
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="custom-image"
            src={picture}
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-black">Car Name : {toy_name}</h2>
          <p className="text-black"> Price: {price}</p>
          <p className="text-black"> Rating: {rating}</p>
          <div className="card-actions justify-end">
            <Link to={`/category/${_id}`}>
            <button className="btn custom-btn btn-outline">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleToy;
