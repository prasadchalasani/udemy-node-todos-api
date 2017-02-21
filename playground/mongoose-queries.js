const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User} = require('./../server/models/user');

var id = '68ab1c2c6632133618c9d7ca';

User.findById(id).then((user) => {
  if(!user) {
    return console.log('Id not found');
  }
  console.log('User by Id', user);
}).catch((e) => {
  console.log(e);
});
