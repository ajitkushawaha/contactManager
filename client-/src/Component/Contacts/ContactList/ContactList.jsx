// import React, { useEffect, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import AllList from "./AllList";
const ContactList = () => {

  
  
  return (
    <div className="my-6 mx-16 p-4 h-screen ">
      <div className="flex items-center pb-4">
        <h1 className="text-xl font-bold capitalize pr-4">phone Directory</h1>
        <div className="flex bg-blue-400  rounded hover:bg-blue-600 py-1 px-3">
          <Link to={"/contacts/create"}>
            <button className=" flex items-center">
              <AddIcon />
              <span>New</span>
            </button>
          </Link>
        </div>
      </div>
      <p>
        Welcome to your phone directory! Here you can keep track of all your contacts. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum et quos voluptates unde consequuntur modi corrupti libero natus suscipit autem, assumenda officiis facere optio quaerat saepe tempora dignissimos illum quas? Nostrum veritatis deleniti expedita porro eligendi sint, cupiditate tempora magnam, magni harum laboriosam earum modi tempore numquam maxime fugit!
      </p>
      <div className=" my-8 w-full flex items-center">
        <div className=" w-1/2 bg-gray-900/30 flex items-center border border-cyan-500 padding-2 rounded">
          <input
            type="text "
            className="bg-gray-900/30 p-1 text-gray-200  outline-none w-full "
            placeholder="Search Name"
          />
          <SearchIcon />
        </div>
        <button className="bg-blue-400 ml-4 px-4 py-1 rounded hover:bg-blue-600">Search</button>
      </div>
      <div className=" w-full  flex items-center flex-wrap ">
        <AllList />
       
        
      </div>
    </div>
  );
};

export default ContactList;
