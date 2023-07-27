import React, {  useState,useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const ViewContact = () => {
  const { contactId } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photourl, setPhoto] = useState("");
  const [company, setCompany] = useState("");
  const [jobtitle, setTitle] = useState("");

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/contacts/${contactId}`);
        const data = await response.json();

        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setPhoto(data.photourl);
        setCompany(data.company);
        setTitle(data.jobtitle);
      } catch (error) {
        console.error("Error fetching contact data:", error);
      }
    };

    fetchContactData();
  }, [contactId]);

  return (
    <div className="my-6 mx-16 p-4 h-screen">
      <div className="flex items-center pb-4">
        <h1 className="text-xl font-bold capitalize pr-4">Update Context</h1>
      </div>
      <p>
        Welcome to your Create Context! Here you can keep edit of your contact.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nostrum
        et quos voluptates unde consequuntur modi corrupti libero natus suscipit
        autem, assumenda officiis facere optio quaerat saepe tempora dignissimos
        illum quas? Nostrum veritatis deleniti expedita porro eligendi sint,
        cupiditate tempora magnam, magni harum laboriosam earum modi tempore
        numquam maxime fugit!
      </p>
      
      <form action="" className="flex">
        <div className="flex flex-col gap-2 py-3 w-1/2">
          <p className="p-1 outline-none bg-gray-700">
            {name}</p>
          <p className="p-1 outline-none bg-gray-700">
            {email}</p>
          <p className="p-1 outline-none bg-gray-700">
            {mobile}</p>
          <p className="p-1 outline-none bg-gray-700">
            {company}</p>
          <p className="p-1 outline-none bg-gray-700">
            {jobtitle}</p>
        </div>
        <div className="">
          <img
            src={photourl}
            alt="logo of create section"
            className="w-64"
          />
        </div>
      </form>
      <div className="flex items-center gap-2">
        
        <Link to={"/"}>
          <button className="bg-blue-500 px-5 py-1 hover:bg-blue-600">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ViewContact;
