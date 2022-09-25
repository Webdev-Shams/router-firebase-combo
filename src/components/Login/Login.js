import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth' 
import { getAuth } from 'firebase/auth';
import app from '../../firebase.init';
import { useLocation, useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location?.state?.from?.pathname || '/';

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(()=>{
            navigate(from,{replace:true})
        })
    }

    return (
        <div>
            <h2>Please Login</h2>
            <button onClick={handleGoogleSignIn}>Sign in with Google</button>
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