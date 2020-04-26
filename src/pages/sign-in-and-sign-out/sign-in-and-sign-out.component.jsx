import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component'; 
import SignUp from '../../components/sign-up/sign-up.components';

import './sign-in-and-sign-out.styles.scss';

const SignInAndSignOutPage = function(){
    return(
        <div className="sign-in-sign-out">
            <SignIn />
            <SignUp />
        </div>
    )
};

export default SignInAndSignOutPage;