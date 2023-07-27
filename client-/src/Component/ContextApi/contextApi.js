import { createContext, useState, useEffect } from "react";

const ContactContext = createContext();

const ContactProvider = ({ children }) => {
  const [contacts, setContacts] = useState([]);
// data fatch
  useEffect(() => {
    fetch("http://localhost:3000/contacts")
      .then((response) => response.json())
      .then((data) => setContacts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);


  const deleteContact = (id) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts((prevContacts) => prevContacts.filter((contact) => contact._id !== id));
      })
      .catch((error) => console.error("Error deleting contact:", error));
  };

  const updateContact = (id, updatedData) => {
    fetch(`http://localhost:3000/contacts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((data) => {
        setContacts((prevContacts) => prevContacts.map((contact) => contact._id === id ? data.updatedContact : contact));
      })
      .catch((error) => console.error("Error updating contact:", error));
  };

  const contextValue = {
    contacts,
    deleteContact, 
    updateContact
  };

  return (
    <ContactContext.Provider value={contextValue}>
      {children}
    </ContactContext.Provider>
  );
};

export { ContactContext, ContactProvider };
