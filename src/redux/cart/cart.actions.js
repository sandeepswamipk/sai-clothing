import CartActionTypes from './cart.types';

export const toggleCartHidden = function(){
    return{
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    }
};