const express = require('express');
const router = express.Router();
const postschema = require('../Model/postmessages');
const postcontroller = require('../Controller/posts');
router.get('/', (req, res) => {
    postcontroller.getpost(req, res);

})

module.exports = router;