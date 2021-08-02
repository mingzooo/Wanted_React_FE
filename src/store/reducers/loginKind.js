const initialState = "default";

export const loginKind = (state = initialState, action) => {
    switch (action.type) {
        case "login_kind":
            return action.payload
        default:
            return state;
    }
}
