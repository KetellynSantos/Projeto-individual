var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.send("Está rodando e acessivel");
});

module.exports = router;