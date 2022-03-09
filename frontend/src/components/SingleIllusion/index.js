import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {getOneIllusion} from '../../store/illusions'

function SingleIllusion() {
    const { illusionId } = useParams()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionObj = useSelector((state) => state.illusionState[illusionId])
    console.log("========================",illusionObj);

    useEffect(() => {
        dispatch(getOneIllusion(illusionId)) 
    },[dispatch, illusionId])

    return (
        <>
            <h1>Hello from SingleIllusion</h1>
            <div>{illusionObj?.description}</div>
            {/* {sessionUser.id === illusionsObj[illusionId].userId ?
            <NavLink className="navButton" exact to={`/explore/${illusionId}/edit`}>
                Edit
            </NavLink> : null} */}
            {/* {sessionUser.id === userId ?
                <div onClick={}>Delete</div> : null} */}
        </>
    );
}

export default SingleIllusion
