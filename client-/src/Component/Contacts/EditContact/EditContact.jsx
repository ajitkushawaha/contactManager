import React, {  useEffect, useState } from "react";
import { Link,  useParams } from "react-router-dom";

const EditContact = () => {
  
  const { contactId } = useParams();
  

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [photo, setPhoto] = useState("");
  const [company, setCompany] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/contacts/${contactId}`);
        const data = await response.json();

        // Update the state with the fetched contact information
        setName(data.name);
        setEmail(data.email);
        setMobile(data.mobile);
        setPhoto(data.photo);
        setCompany(data.company);
        setTitle(data.title);
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
      <form action="">
        <div className="flex flex-col gap-2 py-3 w-1/2">
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            className="p-1 outline-none bg-gray-700"
            placeholder="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
          />
          <input
            type="number"
            className="p-1 outline-none bg-gray-700"
            placeholder="Mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Photo url"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            type="text"
            className="p-1 outline-none bg-gray-700"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        
      </form>
      <div className="flex items-center gap-2">
        <Link to={"/"}>
          <button
            className="bg-lime-500 px-5 py-1 hover:bg-lime-600"
            
          >
            Update
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

export default EditContact;
