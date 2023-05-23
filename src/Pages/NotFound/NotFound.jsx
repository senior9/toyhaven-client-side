import React from "react";
import error from "../../assets/error.jpg"
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="custom-bg container mx-auto">
      <div className="avatar">
        <div className="w-full mask mask-triangle  justify-center flex items-center">
          <img src={error}/>
          
        </div>
        <Link to="/"><button className="custom-btn btn btn-danger">GO Back Home</button></Link>
      </div>
    </div>
  );
};

export default NotFound;
