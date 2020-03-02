import React, { Component } from 'react';

import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render(){
        const collections = this.state.collections;
        return (
            <div className='shop-page'>
                {
                    collections.map(function(collection){
                        return <CollectionPreview key={collection.id} title={collection.title} items={collection.items} />
                    })
                }
            </div>
        )
    }
};

export default ShopPage;