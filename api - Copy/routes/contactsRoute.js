const express = require("express");
const Contact = require("../model/contactModel");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
    console.log("hello request");
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    res.status(200).json(contact);
  } catch (err) {
    res.status(500).send({ error: "server error" });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, mobile, photourl, company, jobtitle } = req.body;

    const contacts = new Contact({
      name,
      email,
      mobile,
      photourl,
      company,
      jobtitle,
    });

    console.log("hi", contacts);

    const c1 = await contacts.save();
    console.log("Contact saved successfully:", c1);
    res
      .status(201)
      .json({ message: "Contact created successfully", contacts: c1 });
  } catch (err) {
    res.status(500).json({ error: "Failed to create contact." });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }

    if (req.body.name) {
      contact.name = req.body.name;
    }

    if (req.body.email) {
      contact.email = req.body.email;
    }

    if (req.body.mobile) {
      contact.mobile = req.body.mobile;
    }

    if (req.body.photourl) {
      contact.photoUrl = req.body.photourl;
    }

    if (req.body.company) {
      contact.company = req.body.company;
    }

    if (req.body.jobtitle) {
      contact.jobtitle = req.body.jobtitle;
    }

    const updatedContact = await contact.save();

    res.status(200).json(updatedContact);
  } catch (err) {
    res.status(500).send("Error: " + err);
  }
});

router.delete("/:id", async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  try {
    if (!contact) {
      return res.status(404).json({ error: "Contact not found." });
    }
    await Contact.deleteOne({ _id: req.params.id });

    res.status(200).json({ error: "Contact removed" });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
