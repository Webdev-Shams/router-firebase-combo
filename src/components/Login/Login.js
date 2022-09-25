import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={signInWithGoogle}>Sign in with Google</button>
            <form>
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" placeholder='Enter a Password'/>
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;