const express = require('express')
const asyncHandler = require('express-async-handler');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Illusion } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
    const illusions = await Illusion.findAll();
    res.json(illusions);
}))

const validateIllusionPost = [
    check('title')
        .exists({ checkFalsy: true })
        .isLength({ max: 20 })
        .withMessage('Please provide a title.'),
    check('illusionURL')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a URL for your illusion.'),
        handleValidationErrors
]

router.get(
    '/:illusionId',
    validateIllusionPost,
    asyncHandler(async (req, res) => {
        const illusionId = parseInt(req.params.illusionId, 10)
        const illusion = await Illusion.findOne({
            where: {
                id: illusionId
            }
        })
        return res.json(illusion)

        //findByPk
        // const illusionId = req.params.illusionId
        // const illusion = await Illusion.findByPk(illusionId)
        // return res.json(illusion);

    }))

router.post('/', asyncHandler(async (req, res) => {
    const illusion = await Illusion.create(req.body);
    return res.json(illusion)
}))

module.exports = router;
