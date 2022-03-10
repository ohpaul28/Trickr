import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateIllusion } from '../../store/illusions';
import { useHistory, useParams } from 'react-router-dom';
import './EditIllusion.css'

function EditIllusion() {
    const dispatch = useDispatch();
    const illusion = useSelector(state => state.illusionState)
    const sessionUser = useSelector((state) => state.session.user);
    const [title, setTitle] = useState(illusion.title);
    const [description, setDescription] = useState(illusion.description);
    const history = useHistory();
    const { illusionId } = useParams();


    // console.log("___________________________________________", title)
    // console.log("___________________________________________", description)


    const handleSubmit = e => {
        e.preventDefault();

        // console.log("============", title)
        // console.log("============", description)

        const updatedIllusion = {
            id: illusion[illusionId].id,
            userId: sessionUser.id,
            title: title? title : illusion.title,
            description: description? description : illusion.description
        }

        // if (!title) setTitle(illusion.title)
        // if (!description) setDescription(illusion.description)
        dispatch(updateIllusion(updatedIllusion))
        history.push(`/explore/${illusionId}`)
    }

    const onClick = () => {
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
                    <div onClick={onClick} className="cancelButton">
                        Cancel
                    </div>
                </div>
            </form>
        </div>
    );
}

export default EditIllusion
