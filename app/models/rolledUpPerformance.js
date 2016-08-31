var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RolledUpPerformanceSchema = new Schema({
	totalPointsVersusMedian: Number,
	totalJamPortions: Number,
	totalPenalties: Number,
	totalPenaltyCost: Number,
	totalPlayerValue: Number,
	playerValueVersusTeamAverage: Number
})

module.exports = mongoose.model('RolledUpPerformance', RolledUpPerformanceSchema);
