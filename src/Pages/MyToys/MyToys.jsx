import React, { useContext, useEffect, useState } from "react";
import { authProvider } from "../../AuthProvider/AuthProvider";
import { Link, json, useLoaderData, useNavigate } from "react-router-dom";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Swal from "sweetalert2";
import MyCollectionsToys from "../MyCollectionsToys/MyCollectionsToys";

const MyToys = () => {
  const [myToys, setMyToys] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const { user } = useContext(authProvider);

  const handleSort = (order) => {
    setSortOrder(order);
  };
  // const url = `http://localhost:5000/my-collections?email=${user.email}`;
  // useEffect(() => {
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setMyToys(data));
  // }, [url]);

  useEffect(() => {
    const fetchMyToys = async () => {
      const response = await fetch(
        `http://localhost:5000/my-collections?email=${user.email}&sortOrder=${sortOrder}`
      );
      const data = await response.json();
      setMyToys(data);
    };

    fetchMyToys();
  }, [user.email, sortOrder]);

  //   Delete Toys
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/my-collections/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainingToys = myToys.filter((t) => t._id !== id);
              setMyToys(remainingToys);
            }
          });
      }
    });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="custom-bg">
        <div className="overflow-x-auto container mx-auto w-full">
          <div  className="flex items-center justify-center gap-16 mt-10 pb-5">
          <div>
          <button className="custom-btn btn btn-error" onClick={() => handleSort("asc")}>
             Price (Ascending)
          </button>
          </div>
          <div>
          <button className="btn btn-error custom-btn" onClick={() => handleSort("desc")}>
          Price (Descending)
          </button>
          </div>
          </div>

          <table className="table w-full custom-table">
            <thead>
              <tr>
                <th className="custom-bg text-center">Avatar</th>
                <th className="custom-bg text-center">Car Name</th>
                <th className="custom-bg text-center">User/Seller</th>
                <th className="custom-bg text-center">Avilable Quantity</th>
                <th className="custom-bg text-center">Price</th>
                <th className="custom-bg text-center">Subcategory</th>
                <th className="custom-bg text-center">Details</th>
                <th className="custom-bg text-center"></th>
                <th className="custom-bg text-center"></th>
              </tr>
            </thead>

            <tbody className="custom-bg">
              {myToys.map((singleToysDetail) => (
                <MyCollectionsToys
                  key={singleToysDetail._id}
                  singleToysDetail={singleToysDetail}
                  handleDelete={handleDelete}
                ></MyCollectionsToys>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyToys;
