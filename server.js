const express = require('express');
const mongoose = require('mongoose');
//turn on routes
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3001;




app.use(express.json());
app.use(express.urlencoded({extended: true}));

// if app is in production, then serve up client/build as static in express
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static("client/build"));
// }

app.use(routes);

// tell mongoose to use the build in JavaScript Promise object to handle their promises
mongoose.Promise = Promise;

//set up mongoose connection
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout-legend", { useNewUrlParser: true});

//turn on our server
app.listen(PORT, () => console.log(`Now listening on ${PORT}`));