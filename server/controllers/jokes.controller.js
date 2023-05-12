const Joke = require("../models/jokes.model");

// READ ALL
module.exports.getAll = (req, res) => {
  Joke.find()
    .then((allDaJokes) => {
      res.json({ Jokes: allDaJokes });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// READ ONE
module.exports.getOne = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => {
      res.json({ Joke: oneSingleJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// CREATE
module.exports.create = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => {
      res.json({ Joke: newlyCreatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// UPDATE
module.exports.update = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedJoke) => {
      res.json({ Joke: updatedJoke });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};

// DELETE
module.exports.delete = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => {
      res.json({ message: "Something went wrong", error: err });
    });
};
