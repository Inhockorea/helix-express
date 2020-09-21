/** Simple demo Express app. */

const express = require("express");
const cors = require('cors')
const app = express();

app.use(cors())

// for processing JSON:
app.use(express.json());

// for processing forms:
app.use(express.urlencoded({ extended: true }));

/* Homepage renders simple message. */

app.get("/", function(req, res) {
  return res.send("Hello NBA Playoffs!");
});

/** Show info on player. */

app.get("/nba/:player", function(req, res) {
  return res.json(`The 2019-2020 NBA MVP is ${req.params.player}`);
});

/** Show JSON on player */

app.get("/api/nba/:player", function(req, res) {
  return res.json({ player: req.params.player });
});
// end json

/** Add a new player. */

app.post("/api/nba", function(req, res) {
  // Do some database operation here...
  return res.send({
    player: req.body.player
  });
});
// end post

/** Sample of returning status code */

app.get("/whoops", function(req, res) {
  return res
          .status(404)
          .json("Whoops! Nothing here!");
});

/** Sample of validating / error handling */

app.get("/nba/:player", function(req, res) {
  if (req.params.name !== "Jokic") {
    return res
            .status(403)
            .json("Only Jokic is Allowed.");
  }

  return res.json("Hello Jokic!");
});

/** Start server on port 5000 */

app.listen(5000, function() {
  console.log("Server started on port 5000.");
});
