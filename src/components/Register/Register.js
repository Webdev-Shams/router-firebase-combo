import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';

const auth = getAuth(app);

const Register = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h2>Please Register</h2>
            <button onClick={()=>signInWithGoogle()}>Sign up with Google</button>
            <form>
                <input type="text" placeholder='Your Name'/>
                <br />
                <input type="email" placeholder='Your Email'/>
                <br />
                <input type="password" placeholder='Enter a Password'/>
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;