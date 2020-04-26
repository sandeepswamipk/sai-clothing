
export const setCurrentUser = function(user){
    return{
        type: 'SET_CURRENT_USER',
        payload: user
    }
}