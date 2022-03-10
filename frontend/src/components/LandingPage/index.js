import React from 'react';
import './LandingPage.css';
import { Modal } from '../../context/Modal';
import SignupForm from '../SignupFormModal/SignupForm';

function LandingPage() {

        const onClick = () => {
            
        }

    return (
        <div className="backgroundImage">
            <div className="landingPageContainer">
                <h1>Seeing is not believing.</h1>
                <div className="landingMessage">Join the Trickr community, home to tens of billions of hours of my time.</div>
                <div onClick={onClick} className="altSignup">Start for $716,128</div>
            </div>
        </div>
    );
}

export default LandingPage
