const initialState = {
    is_loading:false,
    loading_text:"Login",
    response:{}
}

const login = (state = initialState,action) => {
    const response = action.payload;
    switch(action.type){
        case 'LOGIN_USER_LOADING':
            return {...state, is_loading:true,loading_text:"Logging In..."};
        case 'LOGIN_USER_SUCCESS':
            return { ...state, response:response };
        case 'LOGIN_USER_ERROR':
            return { ...state, response: response };
        case 'LOGIN_USER_LOADED':
            return { ...state, is_loading: false, loading_text: "Login" }
        default:
            return state;
    }
};

export default login;