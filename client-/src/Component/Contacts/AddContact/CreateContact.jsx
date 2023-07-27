import React, { useState } from "react";
import { Link } from "react-router-dom";

const CreateContact = () => {

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [mobile, setMobile] = useState("");
 const [photourl, setPhotourl] = useState("");
 const [company, setCompany] = useState("");
 const [title, setTitle] = useState("");

const handleSubmit = async() => {
   console.warn(name, email, mobile, photourl, company, title)
  let data ={name, email, mobile, photourl, company, title};
      fetch('http://localhost:3000/contacts', {
       method: 'POST',
       headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
       },
       body:JSON.stringify(data)
   }).then((result) => {
    console.log("result", result);
   })
   
}

  return (
    <div className="my-6 mx-16 p-4 h-screen">
      <div className="flex items-center pb-4">
        <h1 className="text-xl font-bold capitalize pr-4">Add Contexts</h1>
      </div>
      <p>
        Welcome to your Contexts! Here you can add new contact. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Magnam nostrum et quos
        voluptates unde consequuntur modi corrupti libero natus suscipit autem,
        assumenda officiis facere optio quaerat saepe tempora dignissimos illum
        quas? Nostrum veritatis deleniti expedita porro eligendi sint,
        cupiditate tempora magnam, magni harum laboriosam earum modi tempore
        numquam maxime!
      </p>

      <form action="method" className="flex  gap-8 py-4">
        <div className="flex flex-col gap-2 py-3 w-1/2">
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Name"
            onChange={(e)=> setName(e.target.value)}
            // value={name}
          />
          <input
            type="email"
            className="p-1 outline-none bg-gray-700"
            placeholder="Email"
            onChange={(e)=> setPhotourl(e.target.value)}
            // value={email}
          />
          <input
            type="number "
            className="p-1 outline-none bg-gray-700"
            placeholder="Mobile"
            onChange={(e)=> setMobile(e.target.value)}
            // value={mobile}
          />
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Photo Url"
            onChange={(e)=> setEmail(e.target.value)}
            // value={photo}
          />
          
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Company"
            onChange={(e)=> setCompany(e.target.value)}
            // value={company}
          />
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Job Title"
            onChange={(e)=> setTitle(e.target.value)}
            // value={title}
          />
          
        </div>
       
      </form>
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <button className="bg-lime-500 px-5 py-1 hover:bg-lime-600"
          onClick={handleSubmit}>
            Create
          </button>
        </Link>
        <Link to={"/"}>
          <button className="bg-blue-500 px-5 py-1 hover:bg-blue-600">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CreateContact;
