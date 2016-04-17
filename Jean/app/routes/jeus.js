// ROUTES TODOS
var Jeu = require('../models/jeu.js');
module.exports 	= function(app) {
	app.get('/jeus', Jeu.findAll);
	app.post('/jeus', Jeu.create);
	app.put('/jeus/:id', Jeu.update);
	app.delete('/jeus/:id', Jeu.delete);

}
