const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());


const routes= require("./routes/entries.routes")


//Rutas
app.use("/api/entries", routes.entriesRouter);





















app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
  });
  