const initialState = false;

export const profileUpdown = (state = initialState, action) => {
  switch (action.type) {
    case "profile_updown":
      return action.payload
    default:
      return state;
  }
}