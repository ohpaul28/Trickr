const express = require('express')
const asyncHandler = require('express-async-handler');

const { Illusion } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const illusions = await Illusion.findAll();
    res.json(illusions);
}))


module.exports = router;
