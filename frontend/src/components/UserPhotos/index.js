import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUserIllusions} from '../../store/illusions';
import { Link } from 'react-router-dom';

function UserPhotos() {
    const dispatch = useDispatch();

    const illusionsObj = useSelector(state => state.illusionState);
    let illusions;
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
    if(illusionsObj) illusions = Object.values(illusionsObj);

    useEffect(() => {
        dispatch(getAllUserIllusions(userId))
    },[dispatch, userId])


    console.log(illusions);

    return(
        <div className="background">
            <div className ="IllusionsContainer">
            <h1>testing this</h1>
            {/* {illusions.map(({id, illusionURL}) => (
                <Link to={`/explore/${id}`}>
                    <img className="illusion" alt='' src={illusionURL}/>
                </Link>
            ))} */}
            </div>
        </div>
    )
}

export default UserPhotos
