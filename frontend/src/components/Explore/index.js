import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
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
            {illusions.map(({id, illusionURL}) => (<img className="illusion" key={id} src={illusionURL}/>))}
        </div>
    );
}

export default Explore;
