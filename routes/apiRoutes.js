const db = require('../models');
const express = require('express');
const router = express.Router();
const passport = require('../passport')

module.exports = function(app) {


  // Post item into db. Inventory. WORKING**
  app.post("/api/inventory", function(req, res) {
    db.Inventory.create(req.body).then(function(dbInventory) {
      res.json(dbInventory);
    });
  });

  app.post('/signin', function(req, res){
    res.send("respond with a resource")
  })

  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/dashboard',
    session: false
  }))
}

module.exports = router;
