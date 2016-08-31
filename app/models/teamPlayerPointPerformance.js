var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeamPlayerPointPerformanceSchema = new Schema({
	player: {
		id: Number,
		teamId: Number,
		name: String,
		number: String
	},
	bouts: [{
		boutId: Number,
		homeTeamName: String,
		awayTeamName: String,
		boutDate: Date,
		jams: [{
			jamId: Number,
			isFirstHalf: Boolean,
			jamNumber: Number,
			pointDelta: Number,
			medianDelta: Number,
			deltaPercentile: Number,
			blockerJamPercentage: Number,
			jammerJamPercentage: Number,
			jamPenalties: Number,
			penaltyCost: Number,
			deltaPortionVersusMedian: Number,
			playerValue: Number
		}],
		blockerPerformance: {
			totalPointsVersusMedian: Number,
			totalJamPortions: Number,
			totalPenalties: Number,
			totalPenaltyCost: Number,
			totalPlayerValue: Number,
			playerValueVersusTeamAverage: Number
		},
		jammerPerformance: 
		{
			totalPointsVersusMedian: Number,
			totalJamPortions: Number,
			totalPenalties: Number,
			totalPenaltyCost: Number,
			totalPlayerValue: Number,
			playerValueVersusTeamAverage: Number
		}
	}],
	blockerPerformance: {
		totalPointsVersusMedian: Number,
		totalJamPortions: Number,
		totalPenalties: Number,
		totalPenaltyCost: Number,
		totalPlayerValue: Number,
		playerValueVersusTeamAverage: Number
	},
	jammerPerformance: {
		totalPointsVersusMedian: Number,
		totalJamPortions: Number,
		totalPenalties: Number,
		totalPenaltyCost: Number,
		totalPlayerValue: Number,
		playerValueVersusTeamAverage: Number
	}
})

module.exports = mongoose.model('TeamPlayerPointPerformance', TeamPlayerPointPerformanceSchema);

