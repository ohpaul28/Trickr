import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import { getAllIllusions } from '../../store/illusions';
import './Explore.css';

function Explore() {
    const dispatch = useDispatch();
    const illusionsObj = useSelector(state => state.illusionState.entries)
    const illusions = Object.values(illusionsObj);

    useEffect(() => {
        dispatch(getAllIllusions())
    },[dispatch])

    return (
        <div className="illusionsContainer">
            <ul>
            {illusions.map(({id, illusionURL}) =>(
                <Link key={id} to={`/explore/${id}`}>
                    <img className="illusion" key={id} alt='' src={illusionURL}/>
                </Link>
                ))}
            </ul>
        </div>
    );
}

export default Explore;
