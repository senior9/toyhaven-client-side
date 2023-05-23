import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { authProvider } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logOut, displayName, photoUrl } = useContext(authProvider);
  console.log(photoUrl);

  // handleSign out
  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((err) => console.log(err.message));
  };
  // const renderTooltip = () => <Tooltip id="tooltip">{displayName}</Tooltip>;
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
              to="addCategory"
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
          <div className="d-flex tooltip tooltip-bottom  align-items-center" data-tip={displayName}>
            <div className="avatar online">
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img className="" src={photoUrl} />
              </div>
            </div>
          </div>
        )}
       
        <Link to="/" className="btn btn-ghost text-white normal-case text-sm">
          <img src="" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
