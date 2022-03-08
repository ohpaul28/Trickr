const express = require('express')
const asyncHandler = require('express-async-handler');

const { Illusion } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const illusions = await Illusion.findAll();
    res.json(illusions);
}))

router.get('/:illusionId', asyncHandler( async (req, res) => {
    const illusionId = req.params.illusionId
    const illusion = await Illusion.findByPk(illusionId);
    return res.json(illusion)
}))


module.exports = router;
