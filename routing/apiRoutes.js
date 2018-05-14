//Dependencies

var friends = require("../app/data/friends.js");

//Routing

module.exports = function (app) {

    //GET Request

    app.get("/api/friends", function (req, res) {
        res.json(friends)
    });

    //POST Request

    app.post("/api/friends", function (req, res) {

        var friendMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        }

        var userData = req.body;
        var userScores = userData.scores;
        var totalDifference = 0;

        //Total difference loop
        //=========================================

        for (var i = 0; i < friends.length; i++) {

            //console.log(friends[i])

            totatDifference = 0;

            for (var j = 0; j < friends[i].scores[j]; j++) {

              //  console.log(friends[i].scores[2])

                totalDifference += Math.abs(parseInt(userScores[j]) - friends[i].scores[j]);

                //console.log(totalDifference)

                if (totalDifference <= friendMatch.friendDifference) {

                    friendMatch.name = friends[i].name;
                    friendMatch.photo = friends[i].photo;
                    friendMatch.friendDifference = totalDifference;
                }

                //console.log(friendMatch.name)
            }

        }

        friends.push(userData)

        res.json(friendMatch)


    });

    //Empty arrays for testing purposes

    app.post("/api/clear", function (req, res) {
        friends = [];
        console.log(friends)
    })
}