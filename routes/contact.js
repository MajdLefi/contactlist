const express = require("express");
const router = express.Router();
const { getContacts, addContact, getOneContact, editContact, deleteContact } = require("../controllers/ContactController");

router.get("/contacts", getContacts);
router.post("/contact/", addContact);
router.get("/contact/:id", getOneContact);
router.put("/contact/:id", editContact);
router.delete("/contact/:id", deleteContact);

module.exports = router;