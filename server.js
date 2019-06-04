const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require('passport');

const app = express();
const PORT = process.env.PORT || 3001;

// need these lines for passport Auth
app.use(passport.initialize());
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


app.use(express.json());
app.use(express.urlencoded({extended: true}));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout-legend", { useNewUrlParser: true});

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));