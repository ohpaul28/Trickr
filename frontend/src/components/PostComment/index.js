import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { addComment } from '../../store/comments';


function PostComment() {
    const { illusionId } = useParams();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [newComment, setNewComment] = useState("");
    const history = useHistory();

    const handleSubmit = e => {
        e.preventDefault();

        const newComments = {
            userId: sessionUser.id,
            illusionId: illusionId,
            comment: newComment
        }

        let res = dispatch(addComment(newComments))

        if (res) {
            history.push(`/explore/${illusionId}`)
        }
    }


    return (
        <div className="postContainer">
            <form className="postInputs" onSubmit={handleSubmit}>
                <textarea
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    name="body"
                    placeholder="Enter a comment here"
                    rows="5"
                    className="commentInput"
                    required
                ></textarea>
                <div className="postButtonContainer">
                    <button className="postButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );

}

export default PostComment;
