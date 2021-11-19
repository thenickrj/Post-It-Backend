const router = require("express").Router();
const asyncHandler = require("express-async-handler");

let Post = require("../models/post.model");

// Route to get daily view of a particular user
router.route("/post").get((req, res) => {
  Post.find()
    .then((event) => res.json(event))
    .catch((err) => res.json("Error: " + err));
});

// Route to add a new post
router.route("/addPost").post((req, res) => {
  const body = req.body.body;
  const userId = req.body.userId;
  const name = req.body.name;
  const email = req.body.email;
  const likeCount = req.body.likeCount;
  const commentCount = req.body.commentCount;

  const newPost = new Post({
    body,
    userId,
    name,
    email,
    likeCount,
    commentCount,
  });

  newPost
    .save()
    .then((user) => res.json(user))
    .catch((err) => res.json("Account already exist"));
});

// Route to update a post
router.route("/post/update=:id").post((req, res) => {
  Post.findByIdAndUpdate(req.params.id, {
    body: req.body.body,
    createdAt: req.body.createdAt,
  })
    .then(() => res.json("Post updated!"))
    .catch((err) => res.status(400).json("Error: " + err));

  // Post.findByIdAndUpdate(req.params.id)
  //   .then((post) => {
  //     post.body = req.body.body;

  //     post
  //       .save()
  //       .then(() => res.json("Post updated!"))
  //       .catch((err) => res.status(400).json("Error: " + err));
  //   })
  //   .catch((err) => res.status(400).json("Error: " + err));
});

// Route to delete a post
router.route("/post/delete=:id").delete((req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then(() => res.json("Post deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
