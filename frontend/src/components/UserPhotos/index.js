import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function UserPhotos() {
    const dispatch = useDispatch();

    const sessionUser = useSelector(state => state.session.user);
    const illusionsObj = useSelector(state => state.illusionState);

    const illusions = Object.values(illusionsObj);

    useEffect(() => {
        dispatch()
    },[dispatch])

    return(
        <>
            <h1>testing this</h1>
            <h1>testing this</h1>
            <h1>testing this</h1>
            <h1>testing this</h1>
            <h1>testing this</h1>
            <h1>testing this</h1>
        </>
    )
}

export default UserPhotos
