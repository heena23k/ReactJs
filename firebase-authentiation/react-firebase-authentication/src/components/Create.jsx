// signup the 
import React, { useState } from 'react';
import { auth } from '../firebase-config';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Create = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const createAccount = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log('User created:', userCredentials);
            })
            .catch((error) => {
                console.error('Error creating user:', error);
            });
    };

    return (
        <div>
            <form onSubmit={createAccount}>
                <h1>Create a New Account</h1>
                <input
                    type="email"
                    value={email}
                    placeholder="Enter your email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    value={password}
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Create</button>
            </form>
        </div>
    );
};

export default Create;
