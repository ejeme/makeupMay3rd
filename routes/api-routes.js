// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================
var Chirp = require("../models/chirp.js");


// Routes
// =============================================================
module.exports = function(app) {

  // Get all chirps
  //.get grabs everything ,does a connection.query and sends back to the front end
  app.get("/api/all", function(req, res) {

    // Finding all Chirps, and then returning them to the user as JSON.
    // Sequelize queries are asynchronous, which helps with perceived speed.
    // If we want something to be guaranteed to happen after the query, we'll use
    // the .then function
    Chirp.findAll({}).then(function(results) {
      // results are available to us inside the .then
      res.json(results);
    });

  });

  // Add a chirp

  app.post("/api/new", function(req, res) {
//the "chirp Data"is good when one is first writing to know if the route works
    console.log("Chirp Data:");
    //this req.body helps to know that the connection from the client to server is functioning correctly
    console.log(req.body);

    Chirp.create({
      author: req.body.author,
      body: req.body.body,
      created_at: req.body.created_at
    }).then(function(results) {
      // `results` here would be the newly created chirp
      //res .end is to help close the connection ,lets the browser kniow it successfully did what it was supposed to do
      res.end();
    });

  });

};