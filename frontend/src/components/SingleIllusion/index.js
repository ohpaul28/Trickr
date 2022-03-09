import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import {getOneIllusion} from '../../store/illusions'

function SingleIllusion() {
    const { illusionId } = useParams()
    // console.log(illusionId);
    const dispatch = useDispatch();
    const illusionsObj = useSelector(state => state.illusionState.entries)
    // console.log("========================",illusionsObj[illusionId].illusionURL);
    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
    },[dispatch, illusionId])

    return (
        <>
            <h1>Hello from SingleIllusion</h1>
        </>
    );
}

export default SingleIllusion
