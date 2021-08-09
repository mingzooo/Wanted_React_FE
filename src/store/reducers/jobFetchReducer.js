const initialState = false;

export const jobFetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_JOBFETCH_STATE":
      return action.payload;
    default:
      return state;
  };
}

