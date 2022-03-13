import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { addIllusion } from '../../store/illusions';
import './PostIllusion.css';

function PostIllusion() {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [illusionURL, setIllusionURL] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newIllusion = {
            userId: sessionUser.id,
            illusionURL,
            title,
            description
        }

        let res = dispatch(addIllusion(newIllusion))

        if (res) {
            history.push('/explore')
        }

    }


    return (
        <div className="postContainer">
            <form className="postIllusion" onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Please provide a title"
                    name="title"
                    className="postInput"
                    required
                />
                <input
                    type="text"
                    onChange={(e) => setIllusionURL(e.target.value)}
                    value={illusionURL}
                    placeholder="Your Illusion's URL"
                    name="illusionUrl"
                    className="postInput"
                    required
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="body"
                    placeholder="Description(optional)"
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

export default PostIllusion;
