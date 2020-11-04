const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/accounts');
mongoose.Promise = global.Promise;


let acountSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  password: String,
});

let account = mongoose.model('Account', acountSchema);

module.exports.saveacount = saveacount;
module.exports.getAccount = getAccount;