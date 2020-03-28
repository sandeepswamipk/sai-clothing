import React from 'react';
import { Link } from 'react-router-dom'; 
import { auth } from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../assets/crown.svg'

import './header.styles.scss';

const Header = function(props){
    return(
        <div className='header'>
            <Link to='/'>
                <Logo className='logo' />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">
                    SHOP 
                </Link>
                <Link className="option" to="/shop">
                    CONTACT 
                </Link>
                {
                    props.currentUser ? 
                    <div className="option" onClick={function(){ auth.signOut() }}>SIGN OUT</div> : 
                    <Link className="option" to="/signin">SIGN IN</Link>
                }
            </div>
        </div>
    )
};

export default Header;