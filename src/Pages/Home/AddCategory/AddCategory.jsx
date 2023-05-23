import React, { useContext } from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import "./AddCategory.css";
import Swal from 'sweetalert2'
import { authProvider } from "../../../AuthProvider/AuthProvider";

const AddCategory = () => {
  const {user} =useContext(authProvider);
  console.log(user)
  
    const handleAddToy=(event)=>{
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

        fetch('http://localhost:5000/new-collections',{
            method:'POST',
                        headers:{
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(newCarInfo)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Add Toy Successfully',
                    icon: 'success',
                    confirmButtonText: 'Come Down'
                  })
            }
        })

    }
  return (
    <div>
      <Navbar></Navbar>
      <form onSubmit={handleAddToy} className=" container mx-auto custom-backgtound p-5">
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
                  Seller Name
                </span>
              </label>
              <input
                type="text"
                name="seller"
                placeholder="Enter seller name"
                className="input input-bordered custom-bg"
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
                  Sub Category
                </span>
              </label>
              <input
                type="text"
                name="subcategory"
                placeholder="subcategory"
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
            <div className="form-control">
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Rating
                </span>
              </label>
              <input
                type="text"
                name="rating"
                placeholder="rating"
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
                <button className="btn custom-btn btn-danger w-full mt-3 text-2xl font-semibold" type="submit">Add  Toys</button>
            </div>
        </div>
      </form>
      <Footer></Footer>
    </div>
  );
};

export default AddCategory;
