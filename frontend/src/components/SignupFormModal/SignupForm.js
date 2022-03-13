import React, { useState } from "react";
import { useDispatch} from "react-redux";
import * as sessionActions from "../../store/session";
// import './SignupForm.css';

function SignupForm({showLModal, setShowLModal, showSModal, setShowSModal}) {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onClick = (e) => {
        setShowSModal(false)
        setShowLModal(true)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setErrors([]);
            return dispatch(sessionActions.signup({ email, username, password }))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);
                });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };
    // setShowSModal(false);
    return (
        <form onSubmit={handleSubmit}>
            <div>
                {errors.map((error, idx) =>
                <li id="error" key={idx}>{error}</li>)}
            </div>
            <div>
                Sign up for Trickr
            </div>
            <label className="formModal">
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
            </label>
            <label className="formModal">
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
            </label>
            <label className="formModal">
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
            </label>
            <label className="formModal">
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
            </label>
            <div className="modalButton">
                <button className="inModal" type="submit">Sign Up</button>
            </div>
            <div className='tos formModal'>By signing up, you agree with Trickr's
                <a> Terms of Services </a>
                and
                <a> Privacy Policy.</a>
            </div>
            <div className='reNav formModal'>
                Already a Trickr member?
                <span className="reNavButton" onClick={onClick}> Log in here. </span>
            </div>
        </form>
    );
}

export default SignupForm;
