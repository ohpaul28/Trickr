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
    const [errors, setErrors] = useState([]);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();

        const newIllusion = {
            userId: sessionUser.id,
            illusionURL,
            title,
            description
        }

        if (!newIllusion.illusionURL) setErrors(['Please provide a URL for your illusion.'])
        if (!newIllusion.title) setErrors(['Please provide a Title for your illusion.']);
        if (newIllusion.title && newIllusion.illusionURL) {
            let res = dispatch(addIllusion(newIllusion))

            if (res) {
                history.push('/explore')
            }
        }

    }


    return (
        <div className="backgroundPost">
            <div className="postContainer">
                <ul className="errorValidations">
                    {errors.map((error, idx) =>
                        <li className="postErrors" id="error" key={idx}>{error}</li>)}
                </ul>
                <form className="postIllusion"onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        placeholder="Please provide a title"
                        name="title"
                        className="postIllusionInput"
                    />
                    <input
                        type="text"
                        onChange={(e) => setIllusionURL(e.target.value)}
                        value={illusionURL}
                        placeholder="Your Illusion's URL"
                        name="illusionUrl"
                        className="postIllusionInput"
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
        </div>
    );
}

export default PostIllusion;
