import React from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';

function SignupFormModal({showSModal, setShowSModal, showLModal, setShowLModal}) {

    const onClick = () => {
        setShowLModal(false);
        setShowSModal(true);
    }

    return (
        <>
            <button className="navButton S" onClick={onClick}>Sign Up</button>
            {showSModal && (
                <Modal onClose={() => setShowSModal(false)}>
                    <SignupForm showSModal={showSModal} setShowSModal={setShowSModal} showLModal={showLModal} setShowLModal={setShowLModal}/>
                </Modal>
            )}
        </>
    );
}

export default SignupFormModal;
