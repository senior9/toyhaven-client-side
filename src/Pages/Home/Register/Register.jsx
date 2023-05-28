import React, { useContext, useState } from "react";
import Navbar from "../../../Shared/Navbar/Navbar";
import Footer from "../../../Shared/Footer/Footer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authProvider } from "../../../AuthProvider/AuthProvider";
import useDynamicTitle from "../../../Hooks/useDynamicTitle/useDynamicTitle";

const Register = () => {
  const { crateUserInfo, updateProfileUser, googleSignInMethod } =
    useContext(authProvider);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  let location = useLocation();
  useDynamicTitle("TOYHAVEN | Register");

  let from = location.state?.from?.pathname || "/";
  console.log(from);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoUrl = form.photo.value;
    console.log(email, password, name, photoUrl);
    if (password.length < 6) {
      setError("Password must be at least 6 characters long");
      return;
    }
    crateUserInfo(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);

        updateProfileUser(name, photoUrl)
          .then(() => {
            console.log(name, photoUrl);
            navigate(from, { replace: true });
          })
          .catch((error) => {
            setError(error.message);
          });

        form.reset();
      })
      .catch((error) => {
        setError(error.message);
        // ..
      });
  };

  // Google
  const googleSignIn = () => {
    googleSignInMethod()
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="custom-login-bg container mx-auto">
        <form onSubmit={handleRegister}>
          <h1 className="text-white font-bold text-5xl text-center border-8">
            Please Create your Accout
          </h1>
          <div className="flex justify-center flex-col items-center gap-4 p-5">
            <input
              type="text"
              name="name"
              placeholder="Your name"
              className="input w-full max-w-xs"
            />
            <input
              type="text"
              name="photo"
              placeholder="Your photo-url"
              className="input w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Your email"
              className="input w-full max-w-xs"
            />
            <input
              type="password"
              name="password"
              placeholder="password"
              className="input w-full max-w-xs"
            />
            <p className="text-white">
              <span>Already have an account ? </span>{" "}
              <Link className="text-orange-600" to="/login">
                Please Log in
              </Link>
            </p>
            <button type="submit" className="btn custom-btn">
              Submit
            </button>
          </div>
        </form>
        <div className="flex items-center justify-center pb-5">
          <button
            onClick={googleSignIn}
            type="submit"
            className="btn custom-btn btn-accent "
          >
            Gooogle Log in
          </button>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Register;
