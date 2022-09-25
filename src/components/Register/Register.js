import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register</h2>
            <button>Sign up with Google</button>
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