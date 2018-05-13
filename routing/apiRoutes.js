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
       friends.push(req.body)
    });
}