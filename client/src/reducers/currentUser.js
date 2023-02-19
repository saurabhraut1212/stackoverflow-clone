const currentUserReducer=(state=null,action)=>{
    switch (action.type) {
        case "FETCH_CURRENT_USER":
            return action.payload;
        case "LOG_OUT":
            return state;
        case "LOG_IN":
            return state;
        default:
            return state
    }
}

export default currentUserReducer;