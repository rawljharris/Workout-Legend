// import dependecies
const jwt = require('jsonwebtoken');
const handle = require('');

const { User } = require("../models/user");
// secret for json web token 
const secret = 'andrewstinks';

// function to create new user when the POST route '/api/user/register' is hit
const register = (req, res) => {
  
  // get information of user out of req.body
  const {
    email,
    password,
    firstName,
    lastName
  } = req.body;

  // create a new user 
  const user = new User({
    email,
    password,
    firstName,
    lastName
  });

  //run setFullName()
  user.setFullName();

  // create/save new user (will trigger password creation we need to set up User model)
  User.create(user)
    .then(userInfo => {

      res.status(200).json({
        success: true,
        message: "Your on Your Way to Success!"
      });

    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        success: false,
        message: "Error registering new user, try again."
      });

    })
}
 
// function for logging in user
// this runs when user POST's to  '/api/user/login'
const login = async (req, res) => {

  // get email and password from req.body
  const {
    email,
    password
  } = req.body;

  // find user based on email
  const [findUserErr, userInfo] = await handle(User.findOne({
    email
  }));

  if (findUserErr) {
    console.log(findUserErr);
    res.status(500).json({
      error: "Internal error, try again"
    });
  } else if (!userInfo) {
    res.status(401).json({
      error: "Incorrect email"
    })
  } else {
    //check to see if password matches user's password
    const [pwErr, same] = await handle
      (userInfo.isCorrectPassword(password));

    if (pwErr) {
      res.status(500).json({
        error: "Internal error please try again!"
      });
    } else if (!same) {
      res.status(401).json({
        error: "Incorrect password!"
      });
    } else {
      // issue our JWT 
      const payload = {
        _id: userInfo._id,
        email: userInfo.email
      }
      //sign jwt
      const token = jwt.sign(payload,
        secret, {
          expiresIn: '1h'
        });

      // respond with web token to the front end
      res.status(200).json(token);
    }
  }
}

//get user profile
//GET '/api/user' (this will be run through auth middleware)
const getUserProfile = async (req, res) => {
  const [userErr, userProfile] = await handle(User.findById(req._id));

  if (userErr) {
    res.status(500).json(userErr);
  } else {
    res.status(200).json(userProfile);
  };
};

// export our methods 
module.exports = {
  getUserProfile,
  login,
  register
};