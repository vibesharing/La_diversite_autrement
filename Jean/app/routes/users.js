/* ------------------------------------------------------------------------- *\
	 						   ROUTES USERS
\* ------------------------------------------------------------------------- */

var User = require('../models/user.js');
var Auth = require('../middlewares/authorization.js');

module.exports = function(app) {

  app.get('/api/users/me', User.me);

  app.get('/api/users', Auth.user.isAdministrator, User.findAll);

  app.get('/api/users/:id', Auth.user.isAdministrator, User.findById);

  app.post('/api/users', User.create);

  app.put('/api/users/:id', Auth.user.isAdministrator, User.update);

  app.delete('/api/users/:id', Auth.user.isAdministrator, User.delete);

  var x = [{
    question: "question1",
    answer: ["answer1", "answer2", "answer3", "answer4"],
    photo: "Lenses.png",
    reponse: 0
  }];

  app.get('/test/:id', function(req, res) {


    res.send(x[req.params.id]);
  });
app.post('/checkReponse', function(req, res){
  if(!x[req.body.id]){
    res.send(false);
    return;
  }
  if(x[req.body.id].reponse == req.body.reponse){
    User.addpoint();
    res.send(true);
  }
  else {
    res.send(false);
  }




});

};
