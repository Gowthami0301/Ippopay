const mongoose = require('mongoose');

var User = new mongoose.Schema({
    name: { type: String },
    password: { type: String,required: 'This field is required.' }
});


User.path('password').validate((val) => {
    passwordRegex = /^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    return passwordRegex.test(val);
}, 'Invalid password.');

mongoose.model('User', User);

module.exports = { User };
