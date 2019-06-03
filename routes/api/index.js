const router = require('express').router();
const workoutRoutes = require('./workout-routes');

router.use("/workouts", workoutRoutes);

module.exports = router;