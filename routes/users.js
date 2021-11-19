const router = require("express").Router();
const asyncHandler = require("express-async-handler");

let SignUp = require("../models/signup.model");

// Route to get likes for a particular post
router.route("/users").get((req, res) => {
  SignUp.find()
    .then((data) => res.json(data))
    .catch((err) => res.json("Error: " + err));
});

// Route to get daily view of a particular user
router.route("/likes/email=:email/post=:id").get((req, res) => {
  Likes.find({ email: req.params.email, postId: req.params.id })
    .then((event) => res.json(event))
    .catch((err) => res.json("Error: " + err));
});

module.exports = router;
