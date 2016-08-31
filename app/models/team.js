var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamSchema = new Schema({
	name: String,
	id: Number,
	leagueName: String,
	leagueId: Number,
	teamType: String
})

module.exports = mongoose.model('Team', TeamSchema);