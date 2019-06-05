const mongoose = require("mongoose");
// todo: import bcrypt
const bcrypt = require('bcrypt');


//creating sub document forcmodelling workouts
const UserSchema = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\../, "A valid email address must be used!"]
  },
  password: {
    type: String,
    required: true
  },
  workouts: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "workout"
    }
  ]
});

// set up ability to create password (FOR CREATING A USER OR UPDATING A USER'S PASSWORD)
UserSchema.pre('save', function createPassword(next) {

  if (this.isNew || this.isModified('password')) {

    // save reference to what "this" means
    const document = this;

    // run bcrypt's hash method then create password
    bcrypt.hash(this.password, saltRounds, (err, hashedPassword) => {
      
      if (err) {
        next(err);
      }
      else {
        // save new password
        document.password = hashedPassword;
        next();
      }
    });
  }
});


// for logging in, we need to compare the incoming password with the hashed password
UserSchema.methods.isCorrectPassword = function isCorrectPassword(password) {
  // save reference to "this"
  const document = this;
  return new Promise((resolve, reject) => {

    // run bcrypt.compare method to compare incoming password (i.e. 12345) with user's hashed password (i.e. 3rueoiehw4hgoig43)
    bcrypt.compare(password, document.password, function compareCallback(err, same) {

      if (err) {
        console.log(err);
        reject(err);
      }
      else {
        resolve(same);
      }
    });
  });
}


// set fullname method
UserSchema.methods.setFullName = function setFullName() {
  this.fullName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
}

module.exports = mongoose.model("user", UserSchema);