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


router.get('/', asyncHandler(async (req, res) => {
    const comments = await Comment.findAll();
    return res.json(comments);
}))

router.get('/:id', asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id, 10)
    const comments = await Comment.findByPk(commentId);
    return res.json(comments);
}))

router.post('/', asyncHandler(async (req, res) => {
    const comment = await Comment.create(req.body)
    return res.json(comment);
}))

router.put('/:id',
validateCommentPost,
asyncHandler(async (req, res) => {
    const commentId = parseInt(req.params.id)
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
