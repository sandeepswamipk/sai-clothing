import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = function(props){
    return (
        <div 
            className={`${props.size} menu-item`} 
            onClick={function(){
                props.history.push(`${props.match.url}${props.linkUrl}`);
            }}
        >
            <div className="background-image" style={{
                backgroundImage: `url(${props.imageUrl})`
            }}></div>
            <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
            </div>
        </div>
    );
};

export default withRouter(MenuItem);