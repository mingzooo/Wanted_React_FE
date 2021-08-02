const initialState = false;

export const modalOnoff = (state = initialState, action) => {
    switch (action.type) {
        case "modal_onoff":
            return action.payload
        default:
            return state;
    }
}