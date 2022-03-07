import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import SignupForm from "../SignupFormModal/SignupForm";

function LoginForm({showLModal, setShowLModal, showSModal, setShowSModal}) {
    const dispatch = useDispatch();
    const [credential, setCredential] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const onClick = () => {
        setShowLModal(false);
        setShowSModal(true);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        return dispatch(sessionActions.login({ credential, password })).catch(
            async (res) => {
                const data = await res.json();
                if (data && data.errors) setErrors(data.errors);
            }
        );
    };

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map((error, idx) => (
                    <li id="error" key={idx}>{error}</li>
                ))}
            </ul>
            <div className="formModal">
                Log in to Trickr
            </div>
            <label className="formModal">
                <input
                    type="text"
                    value={credential}
                    onChange={(e) => setCredential(e.target.value)}
                    placeholder="Email Address"
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
            <div className="modalButton">
                <button className="inModal" type="submit">Log In</button>
            </div>
            <a className="formModal">
                Forgot password?
            </a>
            <div className='reNav formModal'>
                Not a Trickr member?
                <span onClick={onClick}>Sign up here.</span>
            </div>
        </form>
    );
}

export default LoginForm;
