import React from 'react';

import './custom-button.styles.scss';

const CustonButton = function(props){
    return(
        <button className={`${ props.isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} onClick={props.onClick}>
            {props.children}
        </button>
    )
};

export default CustonButton;

