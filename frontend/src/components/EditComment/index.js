import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateComment } from '../../store/comments';
import { useHistory, useParams } from 'react-router-dom';
import './EditComment.css';

function EditComment() {
    const dispatch = useDispatch();
    const illusion = useSelector(state => state.illusionState);
    const sessionUser = useSelector(state => state.session.user);
    const comment = useSelector(state => state.commentState);
    const [updateThisComment, setUpdateThisComment] = useState(comment.comment);
    const history = useHistory();
    const { illusionId, commentId } = useParams();

    const handleSubmit = e => {
        e.preventDefault();

        const updatedComment = {
            id: commentId,
            userId: sessionUser.id,
            illusionId: illusion[illusionId].id,
            comment: comment ? updateThisComment : null
        }

        let res = dispatch(updateComment(updatedComment));

        if (res) {
            history.push(`/explore/${illusionId}`)
        }
    }

    const onClick = () => {
        history.push(`/explore/${illusionId}`)
    }


    return (
        <div className="postContainer">
            <form className="postInputs" onSubmit={handleSubmit}>
                <textarea
                    value={updateThisComment}
                    onChange={(e) => setUpdateThisComment(e.target.value)}
                    name="body"
                    placeholder="New Comment"
                    rows="5"
                    className="descriptionInput"
                ></textarea>
                <div className="postButtonContainer">
                    <button className="postButton" type="submit">Submit</button>
                    <div onClick={onClick} className="cancelButton">
                        Cancel
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditComment;
