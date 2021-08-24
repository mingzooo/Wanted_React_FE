const initialState = false;

export const urlUpdateReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_URL_UPDATE_STATE":
      return action.payload;
    default:
      return state;
  };
}
