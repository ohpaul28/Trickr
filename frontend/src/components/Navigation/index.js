import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';
import logo from '../../images/removebgh.png'


function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);
    const [showLModal, setShowLModal] = useState(false);
    const [showSModal, setShowSModal] = useState(false);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />

        );
    } else {
        sessionLinks = (
            <div className="intro">
                <LoginFormModal showLModal={showLModal} setShowLModal={setShowLModal} showSModal={showSModal} setShowSModal={setShowSModal} />
                <SignupFormModal showSModal={showSModal} setShowSModal={setShowSModal} showLModal={showLModal} setShowLModal={setShowLModal} />
            </div>
        );
    }

    const onClick = () => {
        setShowLModal(true);
    }

    return (
        <>
            <div className="navlinkTop">
                <div className="naviLinks">
                    <Link className="logoImg" to='/'>
                        <img href="" alt="" className="logo" src={logo} />
                    </Link>
                    {sessionUser ?
                        <Link className="exploreLink" to='/explore'>
                            <div>Explore</div>
                        </Link> :
                        <div className="exploreLink" onClick={onClick}>Explore</div>}
                    {sessionUser ?
                        <Link className="postLink" to='/post'>
                            <div>Post</div>
                        </Link> :
                        <div className="postLink" onClick={onClick}>Post</div>}
                </div>
                {isLoaded && sessionLinks}
            </div>
            <div className="navLinkBot">
                Bottom Nav
            </div>
        </>
    );
}

export default Navigation;
