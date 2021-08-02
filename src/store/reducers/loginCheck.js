const initialState = false;

export const loginCheck = (state = initialState, action) => {
    switch (action.type) {
        case "login_check":
            return action.payload
        default:
            return state;
    }
}