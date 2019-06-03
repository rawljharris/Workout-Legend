// import express router and our controller
const router = require('express').Router();
const{
  getAllWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  removeWorkout,
} = require('../../controllers/workoutController');

//define routes

//Get and Post routes for /api/notes
router 
  .route('/')
  .get(getAllWorkouts)
  .post(createWorkout);

  //GET/PUT/Delete routes for api/notes/ :id
  router  
    .route('/:id')
    .get(getWorkoutById)
    .put(updateWorkout)
    .delete(removeWorkout);
    
    //export routes
    module.exports = router;
