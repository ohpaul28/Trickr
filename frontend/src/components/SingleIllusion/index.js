import React, { useEffect } from 'react';
import { useParams, NavLink, useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneIllusion } from '../../store/illusions';
import { deleteIllusion } from '../../store/illusions';
import './SingleIllusion.css';

function SingleIllusion() {
    const { illusionId } = useParams()
    const history = useHistory()
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const illusionObj = useSelector((state) => state.illusionState[illusionId])

    useEffect(() => {
        dispatch(getOneIllusion(illusionId))
    }, [dispatch, illusionId])



    function onDelete() {

        let res = dispatch(deleteIllusion(illusionId))

        if (res) {
            history.push('/explore')
        }
    }

    return (
        <div className="singleIllusion">
            <div className="singleIllusionContainer">
                {illusionObj ? <img alt="" className="singleIllusionImage" src={illusionObj?.illusionURL} /> : null}
            </div>
            <div className="innerIllusionContainer">
                {<div className="illusionTitle">{illusionObj?.title}</div>}
                {<div className="illusionDescription">{illusionObj?.description}</div>}
                <div className="editDeleteContainer">
                    {sessionUser.id === illusionObj.userId ?
                        <NavLink className="editButton" exact to={`/explore/${illusionId}/edit`}>
                            Edit
                        </NavLink> : null}
                    {sessionUser.id === illusionObj.userId ?
                        <Link to='/explore' className="deleteButton" onClick={onDelete}>Delete</Link> : null}
                </div>
                <div className="comments">
                    Comments will go here
                </div>
            </div>
        </div>
    );
}

export default SingleIllusion
