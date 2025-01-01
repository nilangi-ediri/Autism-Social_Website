require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { hashSync, compareSync } = require('bcrypt');
const UserModel = require('./config/database');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const { checkName, checkEmail } = require('./validation');
require('./config/passport')

//Create Express application
const app = express();

// Use middleware to parse the request body in JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());
app.use(passport.initialize());



app.post('/signUp', async (req, res) => {


  const nameExists = await checkName(req.body.name);
  
  if (nameExists) {
    return res.status(400).send({
      success: false,
      message: "Username already exists"
    });
  }

  const emailExists = await checkEmail(req.body.email);

  if (emailExists) {
    return res.status(400).send({
      success: false,
      message: "Email already exists"
    });
  }



  const user = new UserModel({
      name: req.body.name,
      email: req.body.email,
      password: hashSync(req.body.password, 10)
  })

  user.save().then(user => {
      console.log("User created successfully.")
      res.send({
          success: true,
          message: "User created successfully.",
          user: {
              id: user._id,
              name: user.name
          }
      })
  }).catch(err => {
      res.send({
          success: false,
          message: "Something went wrong",
          error: err
      })
  })
})


app.post('/signin', (req, res) => {
  console.log("received")
  console.log(req.body)
  UserModel.findOne({ email: req.body.email }).then(user => {
      //No user found
      if (!user) {
          return res.status(401).send({
              success: false,
              message: "Could not find the user."
          })
      }

      //Incorrect password
      if (!compareSync(req.body.password, user.password)) {
          return res.status(401).send({
              success: false,
              message: "Incorrect password"
          })
      }

      const payload = {
          name: user.name,
          id: user._id,
          email: user.email,
      }

      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1d" })

      return res.status(200).send({
          success: true,
          message: "Logged in successfully!",
          token: "Bearer " + token
      })
  })
})




app.get('/protect', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log('Headers:', req.headers);
  return res.status(200).send({
      success: true,
      user: {
          id: req.user._id,
          name: req.user.name,
      }
  })
})



// // Listening port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

