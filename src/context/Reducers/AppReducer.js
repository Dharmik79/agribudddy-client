export default function appReducer(state, action) {
  switch (action.type) {
    case "STORE_EMPLOYEE":
      return {
        ...state,
        user: action.payload
      };

    case "IMAGE_EMPLOYEE":
      return {
        ...state,
        image: action.payload
      };

    case "LOGIN_EMPLOYEE":
      return {
        ...state,
        login: action.payload
      };

    case "RESET_EMPLOYEE":
      return {
        ...state,
        login: {},
        user: {},
        image: undefined
      };

    default:
      return state;
  }
}
