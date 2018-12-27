const passport = require('passport');
const User = require("../models/user")
const config = require("../../config")
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const LocalStrategy = require("passport-local");

//Option pour la stratégie de JWT
const jwtOptions = {
    // Il faut dire a jwt ou chercher dans le header pour trouver le token
    // Des qu'une requete arrive regarde la variable authorization dans le header pour trouver le token
    jwtFromRequest: ExtractJwt.fromHeader("authorization"),
    // Il faut décoder le tokendonc on lui donne la clé d'encryption
    secretOrKey: config.secret
};

// Création de la stratégie JWT
// Va vérifier si l'id passé en payload existe dans la db
// Si c'est le cas ,appeler done

const jwtLogin = new JwtStrategy(jwtOptions, function (payload, done) {
    User.findById(payload.sub, function (err, user) {
        if (err) {
            // Erreur
            return done(err, false);
        }
        if (user) {
            // Pas d'erreur et user trouvé
            return done(null, user);
        } else {
            //Pas d'erreur mais user non trouvé
            return done(null, false);
        }
    })
})
const localOptions = { usernameField : "email" }
const localLoginStrategy = new LocalStrategy(function(email, password, done){
    User.findOne({email}, function(err,user){
        if (err){
            return done(err)
        }
        if (!user){
            return done(null, false)
        }
        user.isPasswordEqualTo(password, function (err, isMatch){
            if (err){
                return done(err)
            }
            if (!isMatch){
                return done(null, false)
            }
            return done(null, user)
        })
    })
})

passport.use(jwtLogin);
passport.use(localLoginStrategy);