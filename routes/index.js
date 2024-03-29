const formatDate = require("../public/javascripts/format-date");

const express = require('express');
const router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "LowPal",
    added: formatDate(new Date()),
  },
  {
    text: "I'm using NodeJS!",
    user: "Jeffrey Archer",
    added: formatDate(new Date()),
  },
];

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.post("/new", (req, res) => {
  messages.push(
    {
      text: req.body.message,
      user: req.body.name,
      added: formatDate(new Date()),
    }
  );
  res.redirect("/");
});

module.exports = router;
