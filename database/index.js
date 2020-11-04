const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/accounts');
mongoose.Promise = global.Promise;


let acountSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  name: String,
  email: String,
  password: String,
});

let Account = mongoose.model('Account', acountSchema);

const creatAccount = (info) => {
  info = JSON.parse(info.body)
  for (var i = 0; i < info.length; i++) {
    var info = {
      name: info[i].name,
      email: info[i].email,
      password: info[i].password,


    }
    var newAccount = new Account(info)
    newAccount.save()
      .then(item => {
        console.log("item saved to database", item);
      })
      .catch(err => {
        console.log("unable to save to database", err);
      });

  }

}

module.exports.creatAccount = creatAccount;
// module.exports.getAccount = getAccount;