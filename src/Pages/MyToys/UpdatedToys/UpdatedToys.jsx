import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { authProvider } from '../../../AuthProvider/AuthProvider';

const UpdatedToys = () => {
    const updatedData = useLoaderData();
    const {user,loading}= useContext(authProvider)
    console.log(updatedData)
    if(user){
        loading
    }
    const handleUpdateToy=(event)=>{
        event.preventDefault();
        const form = event.target;

        const seller = form.seller.value;
        
        const picture = form.picture.value;
        const toy_name = form.toy_name.value;
        const subcategory = form.subcategory.value;
        const available_quantity = form.available_quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        let email = user?.email;
        const newCarInfo = {seller,picture,toy_name,subcategory,available_quantity,price,rating,description,email};
        console.log(newCarInfo);


    }


    return (
        <div>
            <Navbar></Navbar>

            <form onSubmit={handleUpdateToy} className=" container mx-auto custom-backgtound p-5">
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
                defaultValue={user.email}
                readOnly
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  User/Seller Name
                </span>
              </label>
              <input
                type="text"
                name="seller"
                placeholder="Enter seller name"
                className="input input-bordered custom-bg"
                defaultValue={user.displayName}
                required
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
                name="picture"
                placeholder="car phto url"
                className="input input-bordered custom-bg"
                required
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
                name="toy_name"
                placeholder="Enter car name"
                className="input input-bordered custom-bg"
                required
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
                name="available_quantity"
                placeholder="quantity"
                className="input input-bordered custom-bg"
                required
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
                name="price"
                placeholder="price"
                className="input input-bordered custom-bg"
                required
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
                name="description"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs custom-bg"
              ></textarea>
            </div>
           
          </div>
          <div>
                <button className="btn custom-btn btn-danger w-full mt-3 text-2xl font-semibold" type="submit">Update  Toys</button>
            </div>
        </div>
      </form>
            <Footer></Footer>
        </div>
    );
};

export default UpdatedToys;