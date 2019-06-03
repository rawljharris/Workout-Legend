//import workout model
const { workout} = require('../models');

//export a series of method for handling our routes

//GEt all notes
// /api/ workouts
function getAllWorkout(req, res) {
  workout.find({})
    .then(dbWorkoutData => res.statues(200).json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}

//GET workouts by its _id
// /api/ workout/ _id
function getWorkoutById(req, res) {
  workout.findById(req.params.id)
    .then(dbWorkoutData => res.status(200).json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
//POST/ Create a new workout a
function createWorkout(req, res) {
  workout.create(req.body)
    .then(dbWorkoutData => res.status(200).json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
// PUT/update a workout by its _id
// /api/workout/:id with req.body
function updateWorkout(req, res) {
  Note.findByIdAndUpdate(
    req.params.id,
    {
      $set: {
        title: req.body.title,
        body: req.body.body
      }
    },
    {
      new: true
    }
  )
    .then(dbWorkoutData => res.status(200).json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
// DELETE/remove a workout by its _id
// /api/workout/:id
function removeWorkout(req, res) {
  workout.remove({
    _id: req.params.id
  })
    .then(dbWorkoutData => res.status(200).json(dbWorkoutData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
}
//export all functions as methods so we can import into our route definitions
module.exports = {
  getAllWorkout,
  getWorkoutById,
  updateWorkout,
  createWorkout,
  removeWorkout
}