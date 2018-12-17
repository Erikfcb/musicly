const mongoose = require("mongoose");
const User = mongoose.model("user");
const path = require("path");

module.exports = app => {
  app.post("/api/games", async (req, res) => {
    const data = {
      games: {}
    };

    console.log(req.body);
    await User.findOne({ _id: req.body.id }, (err, user) => {
      if (user != null) {
        if (user._id == req.body.id) {
          data.games = user.games;
        }
      }
      res.send(data);
    });
  });

  app.post("/api/progress", async (req, res) => {
    let data = { progress: 0, tries: 0, correct: 0 };
    const level = req.body.level.toLowerCase();
    console.log(level);
    await User.findOne({ _id: req.body.id }, (err, user) => {
      console.log(user.games[req.body.game][level]);

      if (user != null) {
        progress =
          (user.games[req.body.game][level].correct * 100) /
          user.games[req.body.game][level].tries;
        data.progress = progress;
        data.tries = user.games[req.body.game][level].tries;
        data.correct = user.games[req.body.game][level].correct;
      }
      if (isNaN(progress)) {
        data.progress = 0;
      }
      res.send(data);
    });
  });

  app.post("/api/updateProgress", async (req, res) => {
    let newGames = {};
    let newTries = 0;
    let newCorrect = 0;
    const level = req.body.level.toLowerCase();

    await User.findOne({ _id: req.body.id }, (err, user) => {
      if (user != null) {
        if (req.body.correct) {
          newGames = user.games;
          newTries = user.games[req.body.game][level].tries + 1;
          newCorrect = user.games[req.body.game][level].correct + 1;
          newGames[req.body.game][level].tries = newTries;
          newGames[req.body.game][level].correct = newCorrect;
          User.update(
            { _id: req.body.id },
            {
              $set: {
                games: newGames
              }
            }
          ).exec();
        }
        if (!req.body.correct) {
          newGames = user.games;

          newTries = user.games[req.body.game][level].tries + 1;

          newGames[req.body.game][level].tries = newTries;

          User.update(
            { _id: req.body.id },
            {
              $set: {
                games: newGames
              }
            }
          ).exec();
        }
      }

      res.send();
    });
  });

  app.post("/api/reset", async (req, res) => {
    let games = {};
    await User.findOne({ _id: req.body.id }, (err, user) => {
      if (user != null) {
        games = user.games;
        games[req.body.name].easy.tries = 0;
        games[req.body.name].easy.correct = 0;
        games[req.body.name].medium.tries = 0;
        games[req.body.name].medium.correct = 0;
        games[req.body.name].hard.tries = 0;
        games[req.body.name].hard.correct = 0;

        User.update(
          { _id: req.body.id },
          {
            $set: {
              games: games
            }
          }
        ).exec();
      }
    });
    res.send();
  });

  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
};
