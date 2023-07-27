import React from "react";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" bg-gray-800 text-gray-400 h-12 flex items-center  font-bold text-xl sticky top-0 shadow-cyan-500">
      <nav className="flex items-center justify-between w-full mx-16">
        <div className="flex">
          <ContactPageIcon />
        <Link to={"/"}><h2>Manage Contact</h2></Link>
          
        </div>
        <div >
          <Link to={"/login"} className="flex items-center gap-3">
            <img src="https://pic.onlinewebfonts.com/thumbnails/icons_24787.svg" alt="navbar login logo" className="w-10 bg-rgray-500" />
            <button className="bg-blue-500 px-5 py-1 hover:bg-blue-600">
              Login
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
