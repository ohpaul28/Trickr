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
                    <Link className="logoImg" to={sessionUser ? '/explore': null}>
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
                <a href='https://expressjs.com/'>Express</a>
                <a href='https://www.heroku.com/what'>Heroku</a>
                <a href='https://html.com/html5/'>HTML5</a>
                <a href='https://www.javascript.com/about'>Javascript</a>
                <a href='https://nodejs.org/en/about/'>Nodejs</a>
                <a href='https://www.postgresql.org/about/'>PostgreSQL</a>
                <a href='https://reactjs.org/'>React</a>
                <a href='https://redux.js.org/'>Redux</a>
                <a href='https://sequelize.org/v7/'>Sequelize</a>
            </div>
        </>
    );
}

export default Navigation;
