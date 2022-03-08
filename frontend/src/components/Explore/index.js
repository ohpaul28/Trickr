import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
// import { use } from '../../../../backend/routes/api';
import { getAllIllusions, getOneIllusion } from '../../store/illusions';
import './Explore.css';

function Explore() {
    const dispatch = useDispatch();
    const illusionsObj = useSelector(state => state.illusionState.entries)
    const illusions = Object.values(illusionsObj);
    console.log(illusionsObj)

    useEffect(() => {
        dispatch(getAllIllusions())
    },[dispatch])

    // useEffect(() => {
    //     dispatch(getOneIllusion(id))
    // },[dispatch])

    const onClick = () => {
        
    }

    return (
        <div className="illusionsContainer">
            {illusions.map(({id, illusionURL}) =>
            (<img onClick={onClick} className="illusion" key={id} src={illusionURL}/>
            ))}
        </div>
    );
}

export default Explore;
