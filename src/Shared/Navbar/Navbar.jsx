import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { authProvider } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, displayName, photoUrl } = useContext(authProvider);
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  // handleSign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };
  const navigate=useNavigate();
  const handleNavigate =()=>{
      navigate('/')
  }

  

  return (
    <div className="navbar custom-navbar flex flex-wrap items-center justify-between py-2 px-4 lg:px-10 w-full lg:w-auto">
  <div className="flex items-center">
    <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
      <img src={logo} alt="" />
    </Link>
  </div>
  <div className="flex items-center mt-2 lg:mt-0">
    <input type="checkbox" id="menu-toggle" className="hidden"
    checked={showMenu}
    onChange={handleMenuToggle}
    />
    <label htmlFor="menu-toggle" className="block lg:hidden">
      <svg
        className="fill-current text-white h-6 w-6 cursor-pointer"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Menu</title>
        <path
          fillRule="evenodd"
          d="M2 5h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
        ></path>
      </svg>
    </label>
    <div className={`lg:flex lg:items-center lg:space-x-6 ${showMenu ? '' : 'hidden'}`}>
      <Link to="/" className="btn btn-ghost text-white normal-case text-sm">
        Home
      </Link>
      <Link
        to="/all-car"
        className="btn btn-ghost text-white normal-case text-sm"
      >
        All Car Toys
      </Link>
      {user ? (
        <>
          <Link
            to="add-toy"
            className="btn btn-ghost text-white normal-case text-sm"
          >
            Add A Toy
          </Link>
          <Link
            to="my-toys"
            onClick={handleNavigate}
            className="btn btn-ghost text-white normal-case text-sm"
          >
            My Toy
          </Link>
          <Link
            onClick={handleSignOut}
            to="/login"
            className="btn btn-ghost text-white normal-case text-sm"
          >
            Log out
          </Link>
        </>
      ) : (
        <Link
          to="/login"
          className="btn btn-ghost text-white normal-case text-sm"
        >
          Log in
        </Link>
      )}
      <Link
        to="/blog"
        className="btn btn-ghost text-white normal-case text-sm"
      >
        Blogs
      </Link>
      {user && displayName && (
        <div
          className="d-flex tooltip tooltip-bottom  align-items-center"
          data-tip={displayName}
        >
          <div className="avatar online">
            <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img className="" src={photoUrl} alt="" />
            </div>
          </div>
        </div>
      )}
      <Link to="/" className="btn btn-ghost text-white normal-case text-sm">
        <img src="" alt="" />
      </Link>
    </div>
  </div>
</div>
  );
};

export default Navbar;
