import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';

import './preview-collection.styles.scss';

const CollectionPreview = function(props){
    return(
        <div className="collection-preview">
            <h1 className="title">{props.title.toUpperCase()}</h1>
            <div className="preview">
                {
                    props.items.filter(function(item, idx){
                        return idx < 4
                    }).map(function(item){
                        return <CollectionItem 
                                    key={item.id} 
                                    name={item.name} 
                                    imageUrl={item.imageUrl} 
                                    price={item.price} 
                                />
                    })
                }
            </div>
        </div>
    );
};

export default CollectionPreview;