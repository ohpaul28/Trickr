import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIllusion } from '../../store/illusions';
import { useHistory, useParams } from 'react-router-dom';

function EditIllusion() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();
    const { illusionId } = useParams();
    const illusion = useSelector(state => state.illusionState)

    const handleSubmit = e => {
        e.preventDefault();

        const updatedIllusion = {
            id: illusion[illusionId].id,
            userId: sessionUser.id,
            title,
            description
        }

        dispatch(updateIllusion(updatedIllusion))
        history.push(`/explore/${illusionId}`)
    }


    return (
        <div className="postContainer">
            <form className="postInputs" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="New Title"
                    name="title"
                    className="postInput"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="body"
                    placeholder="New Description"
                    rows="5"
                    className="descriptionInput"
                ></textarea>
                <div className="postButtonContainer">
                    <button className="postButton" type="submit">Submit</button>
                </div>
            </form>
        </div>
    );
}

export default EditIllusion
