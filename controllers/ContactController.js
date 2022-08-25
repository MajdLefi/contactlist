const Contact = require("../models/Contact");

//CRUD Contact

//GET ALL Contacts

exports.getContacts = async (req, res) => {
  try {
    const findContacts = await Contact.find();
    res.status(200).json(findContacts);
  } catch (error) {
    console.error(error);
  }
};

//add Contact
exports.addContact = async (req, res) => {
  const { fullName, phoneNumber, address } = req.body;
  try {
    const newContact = new Contact({
      fullName,
      phoneNumber,
      address,
    });
    const addedContact = await newContact.save();
    res.status(200).json(addedContact);
  } catch (error) {
    console.error(error);
  }
};

//GET ONE Contact

exports.getOneContact = async (req, res) => {
  Contact.findById(req.params.id)
    .then((contact) => res.json(contact))
    .catch((err) =>
      res.status(404).json({ msg: "No contact found with that ID" })
    );
};

//EDIT Contact

exports.editContact = async (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndUpdate(id, req.body, { new: true })
    .then((contact) => {
      if (!contact) {
        return res.status(404).send({ msg: "Contact Not Found " });
      }
      res.send(contact);
    })
    .catch((err) => res.status(400).send({ msg: "ERROR jjj" }));
};

//DELETE Contact

exports.deleteContact = async (req, res) => {
  const id = req.params.id;
  Contact.findByIdAndDelete(id)
    .then((contact) => {
      if (!contact) {
        return res.status(404).send({ msg: "Contact Not Found " });
      }
      res.send(contact);
    })
    .catch((err) => res.status(400).send({ msg: "Contact deleted .." }));
};
