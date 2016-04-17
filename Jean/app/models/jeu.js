// MODEL TODO
var mongoose = require('mongoose');
var jeuSchema = new mongoose.Schema({
  description: String
});
var Jeu = {

    model: mongoose.model('Jeu', jeuSchema),

    create: function(req, res) {
		Jeu.model.create({
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	findAll: function(req, res) {
		Jeu.model.find(function (err, data) {
			res.send(data);
		});
	},
	update: function(req, res){
		Jeu.model.findByIdAndUpdate(req.params.id, {
			description: req.body.description
		}, function(){
			res.sendStatus(200);
		})
	},
	delete: function(req, res){
		Jeu.model.findByIdAndRemove(req.params.id, function(){
			res.sendStatus(200);
		})
	}
}
module.exports = Jeu;
