const express = require('express');
const {generateUrlShortner} = require("../controllers/Url")

const router = express.Router();

router.post("/",generateUrlShortner);


module.exports = router;