import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addIllusion } from '../../store/illusions';


function PostIllusion() {
    const dispatch = useDispatch();
    const illusionsObj = useSelector(state => state.illusionState.entries)

    useEffect(() => {
        dispatch(addIllusion())
    }, [dispatch])

    const handleSubmit = (e) => {
        e.preventDefault();

        const newIllusion = {
            
        }
    }


    return (
        <div className="postContainer">
            <h1>Post Illusion</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="Title"
                    name="title"
                />
                <input
                    type="text"
                    onChange={(e) => setImageUrl(e.target.value)}
                    value={imageUrl}
                    placeholder="Image URL"
                    name="imageUrl"
                />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    name="body"
                    placeholder="Add your entry"
                    rows="10"
                ></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default PostIllusion;
