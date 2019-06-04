const mongoose = require("mongoose");
// todo: import bcrypt

const {Schema} = mongoose;

const UserSchema = new Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    required: true
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

// todo: create pre-save hook to hash password


// todo: create method to checkpassword
UserSchema.methods.setFullName = function setFullName() {
  this.firstName = `${this.firstName} ${this.lastName}`;
  return this.fullName;
}

module.exports = mongoose.model("user", UserSchema);