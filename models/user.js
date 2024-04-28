const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid');


const nid = uuidv4();
const Schema = mongoose.Schema;

//User Schema with NanoID generating auth key for extra authentication

const userSchema = new Schema ({
  username: {type: String, required: true},
  authKey: {type: String, required: true, default: nid}
});

module.exports = mongoose.model('User', userSchema);