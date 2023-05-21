import React from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import "./AddCategory.css"

const AddCategory = () => {
  return (
    <div>
      <Navbar></Navbar>
      <form className=" container mx-auto custom-backgtound p-5">
        <div className="">
          <div className="flex justify-center">
            <h1 className="text-5xl text-white font-extrabold">
              Add Car Information
            </h1>
          </div>
          <div className="grid grid-col-1 md:grid-cols-2 items-center gap-5">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Seller Email
                </span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Seller email"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                name="sellerName"
                placeholder="Enter seller name"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Car Photo URl
                </span>
              </label>
              <input
                type="text"
                name="url"
                placeholder="car phto url"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Car Name
                </span>
              </label>
              <input
                type="text"
                name="carName"
                placeholder="Enter car name"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Sub Category
                </span>
              </label>
              <input
                type="text"
                name="subcategory"
                placeholder="sub-category"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Avialable Quantity
                </span>
              </label>
              <input
                type="text"
                name="quantity"
                placeholder="quantity"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Price
                </span>
              </label>
              <input
                type="text"
                placeholder="price"
                className="input input-bordered custom-bg"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Rating
                </span>
              </label>
              <input
                type="text"
                placeholder="rating"
                className="input input-bordered custom-bg"
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Description
                </span>
              </label>
              <textarea
                placeholder="Bio"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs custom-bg"
              ></textarea>
            </div>
           
          </div>
          <div>
                <button className="btn custom-btn btn-danger w-full mt-3 text-2xl font-semibold" type="submit">Update info</button>
            </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddCategory;
