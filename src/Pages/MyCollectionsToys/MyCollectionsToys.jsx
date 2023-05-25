import React from "react";
import { Link } from "react-router-dom";

const MyCollectionsToys = ({ singleToysDetail, handleDelete }) => {
    console.log(singleToysDetail);
  return (
    
      <tr key={singleToysDetail._id} className="custom-bg">
        <th className="custom-bg">
          <div className="flex items-center space-x-3 custom-bg">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12 custom-bg">
                <img
                  src={singleToysDetail.picture}
                  alt="Avatar Tailwind CSS Component"
                />
              </div>
            </div>
          </div>
        </th>
        <th className="custom-bg">
          <div className="font-bold text-center">
            {singleToysDetail.toy_name}
          </div>
        </th>
        <th className="custom-bg text-center">{singleToysDetail.seller}</th>
        <th className="custom-bg text-center">
          {singleToysDetail.available_quantity}
        </th>
        <th className="custom-bg text-center">
          <button className="btn btn-ghost btn-xs ">
            {singleToysDetail.price}
          </button>
        </th>
        <th className="custom-bg text-center">
          <button className="btn btn-ghost btn-xs">
            {singleToysDetail.subcategory}
          </button>
        </th>
        <th className="custom-bg text-center">
          
            <Link to={`/car-details/${singleToysDetail._id}`}><button  className="btn btn-ghost btn-xs">View Details</button></Link>
         
        </th>
        <th className="custom-bg text-center">
          <Link to={`/update-toys/${singleToysDetail._id}`}>
            <button  className="btn custom-btn btn-info btn-xs">Edit</button>
          </Link>
        </th>
        <th className="custom-bg text-center">
          <button
            onClick={()=>handleDelete(singleToysDetail._id)}
            className="btn btn-square custom-btn btn-danger"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>
      </tr>
  );
};

export default MyCollectionsToys;
