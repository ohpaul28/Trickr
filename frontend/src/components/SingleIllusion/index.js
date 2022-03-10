import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {getOneIllusion} from '../../store/illusions'

function SingleIllusion() {
    const { illusionId } = useParams()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionObj = useSelector((state) => state.illusionState[illusionId])
    // console.log("illusion obj========================",illusionObj);
    // console.log("user obj ________________________", sessionUser);

    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
    },[dispatch, illusionId])


    const handleSubmit = () => {

    }
//{spot ? <img className="image-spot" src={`${spot?.mainImageURL}`} alt="movie set idea"></img> : null}


    return (
        <>
            <h1>Hello from SingleIllusion</h1>
            {illusionObj ? <img src={illusionObj?.illusionURL} /> : null}
            {<div>{illusionObj?.title}</div>}
            {<div>{illusionObj?.description}</div>}
            {sessionUser.id === illusionObj.userId ?
            <NavLink className="navButton" exact to={`/explore/${illusionId}/edit`}>
                Edit
            </NavLink> : null}
            {/* {sessionUser.id === illusionObj.userId ?
                <div onClick={}>Delete</div> : null} */}
        </>
    );
}

export default SingleIllusion
