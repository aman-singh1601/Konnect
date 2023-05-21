const passport=require('passport');
const passportJWT=require('passport-jwt').Strategy;
const ExtractJWT=require('passport-jwt').ExtractJwt;


const User=require('../models/user');

let ops={
    jwtFromRequest:ExtractJWT.fromAuthHeaderAsBearerToken,
    secretOrKey:'konnect'
}

passport.use(new JWTstrategy(ops,function(jwtPlayLoad,done){

    User.findById(jwtPlayLoad._id,function(err,user){

        if(err){console.log("error in finding the user from jwt"); return ;}

        if(user){
            return done(null,user);
        }else return done(null,false);
    })
}));

module.exports=passport;
