import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addIllusion } from '../../store/illusions';
import {csrfFetch} from '../../store/csrf';


// async function getUser() {
//     const response = await csrfFetch('/api/session')
//     const data = await response.json();
//     return data.user.id
// }

function PostIllusion() {
    const dispatch = useDispatch();
    const [illusionURL, setIllusionURL] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const reset = () => {
        setTitle("")
        setIllusionURL("")
        setDescription("")
    }


    const handleSubmit = (e) => {
        e.preventDefault();

        // const userId = getUser();

        const newIllusion = {
            // userId,
            illusionURL,
            title,
            description
        }

        dispatch(addIllusion(newIllusion))
        reset();
    }


    return (
        <div className="postContainer">
            <h1>Post Illusion</h1>
            <form onSubmit={handleSubmit}>
                {/* <input
                    type="text"
                    onChange={(e) => setUserId(e.target.value)}
                    value={userId}
                    placeholder="userid"
                    name="userId"
                /> */}
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="text"
                    onChange={(e) => setIllusionURL(e.target.value)}
                    value={illusionURL}
                    placeholder="Your Illusion's URL"
                    name="illusionUrl"
                />
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    name="body"
                    placeholder="Please add a description."
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostIllusion;
