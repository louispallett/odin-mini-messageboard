const formatDate = require("../public/javascripts/format-date");

const express = require('express');
const router = express.Router();

router.get("/new", (req, res, next) => {
    res.render("form", { title: "New Message" })
});

module.exports = router;