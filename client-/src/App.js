import './App.css';
import ViewContact from './Component/Contacts/ViewContact/ViewContact';
import AddContact from './Component/Contacts/AddContact/CreateContact';
import Navbar from './Component/Navbar/Navbar';
import { Route, Routes } from "react-router-dom";
import EditContact from './Component/Contacts/EditContact/EditContact';
import ContactList from './Component/Contacts/ContactList/ContactList';
import Login from './Component/Login/Login';
import Register from './Component/Register/Register';

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/contacts/create" element={<AddContact/>} />
          <Route path="/contacts/view/:contactId" element={<ViewContact />} />
          <Route path="/contacts/edit/:contactId" element={<EditContact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
