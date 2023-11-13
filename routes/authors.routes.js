const express = require("express");

const router = express.Router();
const authorsController = require("../controllers/authors.controllers");

router.get("/", authorsController.getAuthors);
router.post("/", authorsController.createAuthor);
router.put("/", authorsController.updateAuthor);
router.delete("/:email?", authorsController.deleteAuthor);

// router.put("/:title?", entriesController.updateEntry);
// router.delete("/:title?", entriesController.deleteEntry);


module.exports = {
    router
}