const express = require("express");
const morgan = require("./middlewares/morgan.js");
const app = express();
const port = 3000;
app.use(express.json());
const error404 = require("./middlewares/error404");
// Logger
app.use(morgan(":method :host :status :param[id] - :response-time ms :body"));


const entriesRouter = require("./routes/entries.routes.js");
const authorsRouter = require("./routes/authors.routes.js");

//Rutas
app.use("/api/entries", entriesRouter.router);
app.use("/api/authors", authorsRouter.router);


//Para rutas no existentes
app.use("*", error404);
app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});
