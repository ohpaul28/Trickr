import React, { useEffect } from 'react';
import { useParams, NavLink, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneIllusion } from '../../store/illusions';
import { deleteIllusion } from '../../store/illusions';
import { getAllTheComments } from '../../store/comments';
import { getUsers } from '../../store/users';
import './SingleIllusion.css';

function SingleIllusion() {
    const { illusionId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionObj = useSelector((state) => state.illusionState[illusionId])
    const commentsObj = useSelector((state) => state.commentState);
    const usersObj = useSelector((state) => state.userState);
    const comments = Object.values(commentsObj);
    // console.log(usersObj)


    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
        dispatch(getAllTheComments(illusionId))
        dispatch(getUsers())
    }, [dispatch, illusionId])



    function onDelete() {

        let res = dispatch(deleteIllusion(illusionId))

        if (res) {
            history.push('/explore')
        }
    }

    return (
        <div className="singleIllusion">
            <div className="singleIllusionContainer">
                {illusionObj ? <img alt="" className="singleIllusionImage" src={illusionObj?.illusionURL} /> : null}
            </div>
            <div className="innerIllusionContainer">
                {<h3 className="illusionTitle">{illusionObj?.title}</h3>}
                {<div className="illusionDescription">{illusionObj?.description}</div>}
                <div className="editDeleteContainer">
                    {sessionUser.id === illusionObj.userId ?
                        <NavLink className="editButton" exact to={`/explore/${illusionId}/edit`}>
                            Edit
                        </NavLink> : null}
                    {sessionUser.id === illusionObj.userId ?
                        <Link to='/explore' className="deleteButton" onClick={onDelete}>Delete</Link> : null}
                </div>
                <div className="commentsContainer">
                    {comments.map((comment) => (
                        <div className="singleComment">
                            {comment.userId} said: {comment.comment}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default SingleIllusion
