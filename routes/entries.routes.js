const express = require("express");

const router = express.Router();
const entriesController = require("../controllers/entries.controller");

router.get("/", entriesController.getAllEntries);
router.put("/:title?", entriesController.updateEntry);
router.delete("/:title?", entriesController.deleteEntry);


module.exports = {
    router
}
