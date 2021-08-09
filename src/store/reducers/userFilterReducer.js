const INITIAL_STATE = {
  tag: [],
  city: [],
  career: []
};

export const userFilterReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET") return action.payload;
  else if (action.type === "ADD")
    return { ...state, tag: [...state.tag, action.payload] };
  else if (action.type === "DELETE") return { ...state, tag: action.payload };
  else return state;
};

