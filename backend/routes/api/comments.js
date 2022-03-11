const express = require('express')
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { Comment } = require('../../db/models');

const router = express.Router();

const validateCommentPost = [
    check('comment')
        .exists({checkFalsy: true}),
    handleValidationErrors
]

// router.get('/:illusionId/:commentId', asyncHandler(async (req, res) => {
//     const commentId = parseInt(req.params, 10)
//     console.log("==========", commentId)
//     const comments = await Comment.findByPk(commentId);
//     return res.json(comments);
// }))

router.get('/:illusionId', asyncHandler(async (req, res) => {
    const illusionId = parseInt(req.params.illusionId, 10)
    const comments = await Comment.findAll({
        where: {
            illusionId: illusionId
        }
    })
    res.json(comments)
}))


router.post('/', asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body)
    return res.json(comment);
}))

router.put('/:illusionId/:commentId',
validateCommentPost,
asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.commentId)
    const { comment } = req.body
    const newComment = await Comment.findByPk(commentId)
    if (newComment) {
        await newComment.update({
            comment: comment
        })
    }
    return res.json(comment);
}))

router.delete('/:id',
asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10)

    const comment = await Comment.findByPk(commentId);
    if (comment) {
        await comment.destroy()
        return res.json(comment.id)
    }
}))


module.exports = router;
