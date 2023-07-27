const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique:true,
    required: true,
  },

  mobile: {
    type: String,
    required: true,
  },

  photourl: {
    type: String,
    required: true,
  },

  company: {
    type: String,
    required: true,
  },

  jobtitle: {
    type: String,
    required: true,
  },
});

// Create the "Contact" model using the schema
const Contact = mongoose.model("Contact", contactSchema);

module.exports = Contact;
