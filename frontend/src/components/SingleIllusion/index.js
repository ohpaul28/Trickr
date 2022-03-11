import React, { useEffect } from 'react';
import { useParams, NavLink, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneIllusion } from '../../store/illusions';
import { deleteIllusion } from '../../store/illusions';
import { deleteComment, getAllTheComments } from '../../store/comments';
import { getUsers } from '../../store/users';
import PostComment from '../PostComment';
import './SingleIllusion.css';

function SingleIllusion() {
    const { illusionId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionObj = useSelector((state) => state.illusionState[illusionId])
    const commentsObj = useSelector((state) => state.commentState);
    const usersObj = useSelector((state) => state.usersState);
    const comments = Object.values(commentsObj);
    const users = Object.values(usersObj);


    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
        dispatch(getAllTheComments(illusionId))
        dispatch(getUsers())
    }, [dispatch, illusionId])



    const getUsername = (userId) => {
        const username = users.find(user => user.id === userId)
        // console.log("========================",username)
        return username?.username
    }


    function onDeleteIllusion() {
        let res = dispatch(deleteIllusion(illusionId))
        if (res) {
            history.push('/explore')
        }
    }

    async function onDeleteComment(commentId) {
        let res = await dispatch(deleteComment(commentId))
        if (res) {
            history.push(`/explore/${illusionId}`)
        }
    }
    // onClick={onDeleteComment(comment.id)}

    return (
        <div className="singleIllusion">
            <div className="singleIllusionContainer">
                {illusionObj ? <img alt="" className="singleIllusionImage" src={illusionObj?.illusionURL} /> : null}
            </div>
            <div className="innerIllusionContainer">
                {<h3 className="illusionTitle">{illusionObj?.title}</h3>}
                {<div className="illusionDescription">{illusionObj?.description}</div>}
                <div className="editDeleteContainer">
                    {sessionUser.id === illusionObj?.userId ?
                        <NavLink className="editButton" exact to={`/explore/${illusionId}/edit`}>
                            Edit
                        </NavLink> : null}
                    {sessionUser.id === illusionObj?.userId ?
                        <Link to='/explore' className="deleteButton" onClick={onDeleteIllusion}>Delete</Link> : null}
                </div>
                <div className="commentsContainer">
                    <div>
                        <PostComment />
                    </div>
                    {comments.map((comment) => (
                        <div className="singleComment">
                            <div>
                                {getUsername(comment?.userId)} said: {comment.comment}
                            </div>
                            {sessionUser.id === comment?.userId ?
                            <NavLink className="commentEdit" exact to={`/explore/${illusionId}/${comment.id}/edit`}>
                                Edit
                            </NavLink> : null}
                            {sessionUser.id === comment?.userId ?
                            <Link to={`/explore/${illusionId}`} className="commentDelete" onClick={() => onDeleteComment(comment.id)}>
                                Delete
                            </Link> : null}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleIllusion
