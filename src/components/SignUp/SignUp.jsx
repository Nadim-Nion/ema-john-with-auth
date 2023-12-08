import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    const [error, setError] = useState('');

    const handleSignUp = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirm.value;
        console.log(email, password, confirmPassword);

        if (password !== confirmPassword) {
            setError("Your password didn't match");
            return;
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters or longer");
            return;
        }
    }

    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" placeholder='Your Email' required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="" placeholder='Your Password' required />
                </div>
                <div className="form-control">
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="password" name="confirm" id="" placeholder='Confirm Your Password' required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <div className='signup-footnote'>
                <p><small>Already have an account? <Link to="/login">Login</Link></small></p>
            </div>
            <p className='text-error'>{error}</p>
        </div>
    );
};

export default SignUp;