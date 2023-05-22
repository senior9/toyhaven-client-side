import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from   "../../assets/logo.png"

const Navbar = () => {
  return (
    <div className=" navbar custom-navbar">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
         <img src={logo} alt="" />
        </Link>
      </div>
      <div className="flex-none">
        <Link to="/" className="btn btn-ghost text-white normal-case text-sm">
          Home
        </Link>
        <Link to="/all-car" className="btn btn-ghost text-white normal-case text-sm">
          All Car Toys
        </Link>
        <Link to="add-toy" className="btn btn-ghost text-white normal-case text-sm">
          Add A Toy
        </Link>
        <Link to="addCategory" className="btn btn-ghost text-white normal-case text-sm">
         My Toy
        </Link>
        <Link to="/blog" className="btn btn-ghost text-white normal-case text-sm">
          Blogs
        </Link>
        <Link to="/login" className="btn btn-ghost text-white normal-case text-sm">
          Log in
        </Link>
        <Link to="/" className="btn btn-ghost text-white normal-case text-sm">
         <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
