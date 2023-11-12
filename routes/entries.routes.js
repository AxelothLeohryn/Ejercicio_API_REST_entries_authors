const express = require("express");

const entriesRouter = express.Router();
const entriesController = require("../controllers/entries.controller");

entriesRouter.get("/", entriesController.getAllEntries);
entriesRouter.put("/:title?", entriesController.modifyEntry);


module.exports = {
    entriesRouter
}
