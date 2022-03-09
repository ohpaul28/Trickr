import React, { useEffect } from 'react';
import { useParams, NavLink } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {getOneIllusion} from '../../store/illusions'

function SingleIllusion() {
    const { illusionId } = useParams()
    // console.log(illusionId);
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionsObj = useSelector((state) => state.illusionState.entries)
    // const illusionUserId = illusionsObj[illusionId]?.userId
    // console.log("========================",illusionUserId);
    let illusionUserId;
    if (illusionsObj) {
        illusionUserId = illusionsObj[illusionId].userId
    }
    // console.log("________________________", sessionUser);
    console.log("========================",illusionUserId);
    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
    },[dispatch, illusionId])


    return (
        <>
            <h1>Hello from SingleIllusion</h1>
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
