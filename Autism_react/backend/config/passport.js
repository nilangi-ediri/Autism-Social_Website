require('dotenv').config(); 

const JwtStrategy = require('passport-jwt').Strategy,
      ExtractJwt = require('passport-jwt').ExtractJwt;
const opts = {}
const UserModel = require('./database')
const passport = require('passport')

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.JWT_SECRET


passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
  console.log('JWT payload received:', jwt_payload);
  UserModel.findOne({ _id: jwt_payload.id })
      .then(user => {
          console.log('User found:', user);
          if (user) {
              return done(null, user);
          } else {
              return done(null, false); // or you could create a new account
          }
      })
      .catch(err => {
          console.error('Error fetching user:', err);
          return done(err, false);
      });
}));



// passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
//   console.log('JWT payload received:', jwt_payload);

// passport.use(new JwtStrategy(opts, function (jwt_payload, done) {
//     console.log('JWT payload received:', jwt_payload);
//     UserModel.findOne({ _id: jwt_payload.id }, function (err, user) {
//         if (err) {
//           console.error('Error fetching user:', err);
//             return done(err, false);
//         }
//         console.log('User found:', user);
//         if (user) {
//             return done(null, user);
//         } else {
//             return done(null, false);
//             // or you could create a new account
//         }
//     });
// }));


