import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllIllusions } from '../../store/illusions';
import './Explore.css';

function Explore() {
    const dispatch = useDispatch();
    const illusionsObj = useSelector(state => state.illusionState)
    const illusions = Object.values(illusionsObj);

    useEffect(() => {
        dispatch(getAllIllusions())
    },[dispatch])

    return (
        <div className="background">
            <div className="illusionsContainer">
            {illusions?.map(({id, illusionURL}) =>(
                <Link to={`/explore/${id}`}>
                    <img className="illusion" alt='' src={illusionURL}/>
                </Link>
                ))}
            </div>
        </div>
    );
}

export default Explore;
