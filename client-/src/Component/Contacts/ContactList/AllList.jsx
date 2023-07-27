import React, { useContext } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";
import { ContactContext } from "../../ContextApi/contextApi";

const AllList = () => {
  const contactContext = useContext(ContactContext);
  const { contacts, deleteContact } = contactContext;
  
  console.log(contacts)

  const handleDelete = (id) => {
    prompt("are you sure ")
    deleteContact(id);
  };

  if (!contacts) {
    return <div>Loading...</div>;
  }
  return (
    <div className="flex items-center gap-6">
      {contacts.map((contact, index) => (
        <div
          key={index}
          className="flex leading-8 items-center gap-6 p-4 bg-gradient-to-r from-black via-gray-800/50 to-blue-900/30 
        border border-cyan-500 shadow-cyan-500 rounded"
        >
          <ul className="flex items-center gap-1">
            <li>
              <img
                src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
                alt=""
                className="w-32"
              />
            </li>
            <li className="border rounded text-l mx-1">
              <div className="pr-32 rounded px-1">Name: {contact.name}</div>
              <div className="border-t px-1">Email: {contact.email}</div>
              <div className="border-t px-1">Mobile: {contact.mobile}</div>
              <div className="border-t px-1">Company: {contact.company}</div>
            </li>
            <li>
              <Link to={`/contacts/view/${contact._id}`}>
                <p className="bg-yellow-500 px-1 mt-1 ">
                  <VisibilityIcon />
                </p>
              </Link>
              <Link to={`/contacts/edit/${contact._id}`}>
                <p className="bg-blue-500 px-1 mt-1">
                  <EditIcon />
                </p>
              </Link>
              <p
                className="bg-red-500 px-1 mt-1"
                onClick={() => handleDelete(contact._id)}
              >
                <DeleteIcon />
              </p>
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default AllList;
