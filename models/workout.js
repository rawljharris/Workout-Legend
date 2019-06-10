// import mongoose
const mongoose = require('mongoose');


//get schema constructor out if mongoose
const workoutSchema = new mongoose.Schema({
  workoutId: {
    type: String,
  },
  name: {
    type:String,
    required: true
  },
  description: {
    type: String
  },
  image: {
    type: String
  },
  muscles: {
    type: Array
  },
  musclesSecondary: {
    type: Array
  },
  equipment: {
    type: Array
  },
  link: {
    type: String
  }


});
//create our model
const workout = mongoose.model('workout', workoutSchema);
//export our workout models
module.exports = workout;
