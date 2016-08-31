// require models here
var Team = require('./models/team');
//var teamRating = require('./models/teamRating');
var TeamPlayerPointPerformance = require('./models/teamPlayerPointPerformance');
var express = require('express');
var fs = require("fs");
var router = express.Router();

function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}

router.use(function(req, res, next) {
	console.log("request received");
	next();
});

// GET /test/
// returns:
//
router.route('/test').get(function(req, res) {
	res.json({ message: 'routing appears to be working' });
});

// GET /api/teams
// returns:
//
router.route('/teams').get(function(req, res) {
	// right now, populate with a dummy; we'll do a Mongo implementation later
	var team1 = new Team({ name: 'Team 1', id: 1, leagueName: 'League A', leagueId: 10, teamType: 'A' });
	var team2 = new Team({ name: 'Team 2', id: 2, leagueName: 'League B', leagueId: 11, teamType: 'A' });
	res.json([team1, team2]);
});

// GET /api/teams/:team_id
// returns:
//
router.route('/teams/:team_id').get(function(req, res) {
	if(req.params.team_id == 1) {
		res.json(new Team({ name: 'Team 1', id: 1, leagueName: 'League A', leagueId: 10, teamType: 'A' }));
	}
	else if(req.params.team_id == 2) {
		res.json(new Team({ name: 'Team 2', id: 2, leagueName: 'League B', leagueId: 11, teamType: 'A' }));
	}
	else {
		res.json({ message: 'No team exists with that id' });
	}
});

// GET /api/teamRatings
// returns:
//
router.get('/teamRatings', function(req, res) {
});

// GET /api/teamPlayerPerformance/points/
// returns:
//
router.get('/teamPlayerPerformance/points/team/:team_id', function(req, res) {
	if(req.params.team_id == 1) {
		// the payload is pretty large, so for readability, in this mocked case, I'm storing the json in a file
		var content = fs.readFileSync('./app/team_1_data.json');
		var jsonContent = JSON.parse(content);
		res.json(jsonContent);
	}
	else if(req.params.team_id == 2) {
		res.json(new Team({ name: 'Team 2', id: 2, leagueName: 'League B', leagueId: 11, teamType: 'A' }));
	}
	else {
		res.json({ message: 'No team exists with that id' });
	}
});

// GET /api/teamPlayerPerformance/value/
// returns:
// NOTE: SHOULD BE DEPRICATED IN NEXT RELEASE
router.get('/teamPlayerPerformance/value/', function(req, res) {
});

	
module.exports = router;