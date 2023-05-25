import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from '../../../Shared/Navbar/Navbar';
import Footer from '../../../Shared/Footer/Footer';
import { authProvider } from '../../../AuthProvider/AuthProvider';
import Swal from 'sweetalert2';

const UpdatedToys = () => {
    const carData = useLoaderData();
    const {user,loading}= useContext(authProvider)
    console.log(carData)
    // if(user){
    //     loading
    // }
    const handleUpdateToy=(event)=>{
        event.preventDefault();
        const form = event.target;

        const available_quantity = form.available_quantity.value;
        const price = form.price.value;
        const description = form.description.value;
        const updateCarInfo = {available_quantity,price,description};
        console.log(updateCarInfo);
        fetch(`http://localhost:5000/my-collections/${carData._id}`,{
          method:'PUT',
                      headers:{
                          'Content-Type':'application/json'
                      },
                      body:JSON.stringify(updateCarInfo)
      })
      .then((res)=>res.json())
      .then((data) =>
        {
          console.log(data)
          if(data.modifiedCount>0){
              Swal.fire({
                  title: 'Success!',
                  text: 'Car upDate Successfully',
                  icon: 'success',
                  confirmButtonText: 'Come Down'
                })
          }
      }
      )

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
                  Avialable Quantity
                </span>
              </label>
              <input
                type="text"
                name="available_quantity"
                placeholder="quantity"
                defaultValue={carData?.available_quantity}
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
                defaultValue={carData?.price}
              />
            </div>
            
            <div>
              <label className="label">
                <span className="label-text text-yellow-50 text-2xl font-bold">
                  Description
                </span>
              </label>
              <textarea
              defaultValue={carData?.description}
                placeholder="Bio"
                name="description"
                className="textarea textarea-bordered textarea-xs w-full max-w-xs custom-bg"
              ></textarea>
            </div>
           
          </div>
       
                
            
        </div>
        <input type="submit" value="Update Toy" className='btn custom-btn btn-danger' />
      </form>
            <Footer></Footer>
        </div>
    );
};

export default UpdatedToys;