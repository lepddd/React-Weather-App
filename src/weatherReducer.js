export const INITIAL_STATE = {
  loading: false,
  error: false,
  weather: {},
};

export const weatherReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return {
        loading: true,
        error: false,
        weather: {},
      };
    case "FEATCH_SUCCESS":
      return {
        loading: false,
        error: false,
        weather: action.payload,
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: true,
        weather: {},
      };
    default:
      return state;
  }
};
