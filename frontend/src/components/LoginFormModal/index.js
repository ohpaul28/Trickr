import React from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';

function LoginFormModal({showLModal, setShowLModal, showSModal, setShowSModal}) {

    const onClick = () => {
        setShowSModal(false);
        setShowLModal(true);
    }

    return (
        <>
            <div className="navButton L" onClick={onClick}>Log In</div>
            {showLModal && (
                <Modal onClose={() => setShowLModal(false)}>
                    <LoginForm showLModal={showLModal} setShowLModal={setShowLModal} showSModal={showSModal} setShowSModal={setShowSModal}/>
                </Modal>
            )}
        </>
    );
}

export default LoginFormModal;
