exports.signup = function(req,res,next){
  const email = req.body.email;
  const password = req.body.password;
  res.send({ test: "blabla" })
}