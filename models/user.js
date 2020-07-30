const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    password: {
        type: String,
        trim: true,
        required: "Password is Required",
        validate: [({ length }) => length >= 6, "Password should be longer."]
    },
    email: {
        type: String,
        unique: true,
        match: [/.+@.+\..+/, "Please enter a valid e-mail address"]
    },
    
    location: { type: String, required: true },
    zipcode: { type: Number, required: true },
    date: { type: Date, default: Date.now }
});
  
const User = mongoose.model("User", userSchema);
  
module.exports = User;
  