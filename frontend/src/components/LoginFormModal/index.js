import React from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({showLModal, setShowLModal, showSModal, setShowSModal}) {

    return (
        <>
            <div className="navButton L" onClick={() => setShowLModal(true)}>Log In</div>
            {showLModal && (
                <Modal onClose={() => setShowLModal(false)}>
                    <LoginForm showLModal={showLModal} setShowLModal={setShowLModal} showSModal={showSModal} setShowSModal={setShowSModal}/>
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
