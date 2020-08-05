
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");
const emailValidator = require("email-validator");
const SALT_ROUNDS = 12;

const UserSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 3,
    },
    password: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        minlength: 6,
    },
    email: {
        type: String,
        unique: true,
        trim: true,
        lowercase: true,
        validate: {
            validator: emailValidator.validate,
            message: props => `${props.value} is not a valid email address`
        }
    },

    location: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }
}, {
    timestamps: true

});
UserSchema.methods.comparePassword = function comparePassword(candidate) {
    return bcrypt.compare(candidate, this.password);
}

UserSchema.pre('save', async function presSave(next) {
    
    const user = this;
    try {   
        const hash = await bcrypt.hash(user.password, SALT_ROUNDS);
        user.password = hash;
        return next();
    }catch(err) {
        return (res.send(err))

    }
    
     
    
   
})
module.exports = mongoose.model("User", UserSchema);



