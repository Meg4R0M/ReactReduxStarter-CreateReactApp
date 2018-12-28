const authentificationController = require("./controllers/authentification");
require("./services/passport");
const passport = require("passport");

const requireToken = passport.authenticate("jwt", {session: false});
const requireValidCredentials = passport.authenticate("local", {session: false});

module.exports = function (expressServer) {
  expressServer.get("/", function (req, res, next) {
    res.send({ serverData: ["Stratocaster", "Gibson", "Ibanez"] })
  });
  expressServer.post("/signup", authentificationController.signup);
  expressServer.post("/signin", requireValidCredentials, authentificationController.signin);
  expressServer.get("/specialResource", requireToken, function (req,res){
    res.send({ result: "Ceci est du contenu sécurisé" })
  });
};