const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const contactSchema = new Schema({
  fullName: {
    type: String,
  },
  phoneNumber: {
    type: String,
  },
  address: {
    type: String,
  },
});

module.exports = Contact = mongoose.model("Contact", contactSchema);
