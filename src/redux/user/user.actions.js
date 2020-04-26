
import { UserActionTypes } from './user.types';

export const setCurrentUser = function(user){
    return{
        type: UserActionTypes.SET_CURRENT_USER,
        payload: user
    }
}