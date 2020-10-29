const express = require("express"),
  app = express(),
  ctrl = require("./controller.js"),
  port = 4040;

app.use(express.json());



app.get("/api/pokemon", ctrl.getPokemon);
app.get("/api/pokemon/:id", ctrl.getOnePokemon);
app.get("/api/team", ctrl.getTeam);
app.post("/api/team/:id", ctrl.addToTeam);
app.put("/api/team/:index", ctrl.editNickname);
app.delete("/api/team/:index", ctrl.removeFromTeam);

app.listen(port, () => console.log(`server listening on port ${port}`));
