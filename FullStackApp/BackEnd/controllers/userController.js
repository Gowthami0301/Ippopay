const express = require('express');
var router = express.Router();

var { User } = require('../models/user');

router.post('/', (req, res) => {
    if (req.body._id == '')
        insertRecord(req, res);
        else
        updateRecord(req, res);
});


function insertRecord(req, res) {
    var user = new User();
    user.password = req.body.password;
    user.save((err, doc) => {
        if (!err)
           res.send(doc);
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
            }
            else
                console.log('Error during record insertion : ' + err);
        }
    });
}

function updateRecord(req, res) {
    User.findOneAndUpdate({ _id: req.body._id }, req.body, { new: true }, (err, doc) => {
        if (!err) {  res.send(doc); }
        else {
            if (err.name == 'ValidationError') {
                handleValidationError(err, req.body);
            }
            else
                console.log('Error during record update : ' + err);
        }
    });
}


function handleValidationError(err, body) {
    for (field in err.errors) {
        switch (err.errors[field].path) {
            case 'password':
                body['passwordError'] = err.errors[field].message;
                break;
            default:
                break;
        }
    }
}
module.exports = router;