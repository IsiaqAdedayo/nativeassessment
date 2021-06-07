import { MAIN_USER, USER_TOKEN, ISLOADING } from './userActions';

const initialState =  {
    mainUser: [],
    userToken: [],
    isLoading: true,
}

const userReducer = (state = initialState, action) => {
    switch(action.type){
        case MAIN_USER:
            return {
                ...state,
                isLoading: false,
                mainUser: action.payload
            }
        case USER_TOKEN:
            return {
                ...state,
                isLoading: false,
                userToken: action.payload
            }
        case ISLOADING:
            return {
                ...state,
                isLoading: true
            }
        default:
            return state;
    }
}

export default userReducer;