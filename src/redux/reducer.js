const initialState = {
    user: {}
}

const LOGOUT = 'LOGOUT'
const GET_USER = 'GET_USER'

export function logout(){
    return{
        type: LOGOUT,
        payload: null
    }
}

export function getUser(userObj){
    return{
        type: GET_USER,
        payload: userObj
    }
}

export default function reducer (state = initialState,action){
    const {type,payload} = action;
    switch(type){
        case LOGOUT:
            return {...state,user:{}}
        case GET_USER:
            return {...state,user:payload}
        default:
            return state;
    }
}