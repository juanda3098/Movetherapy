export default (state = { user: '', type: '' }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload.user, type: action.payload.isAdmin };
    case "LOGOUT":
      return { user: null, type: null };
    // case "TYPEUSER":
    //   state.type = action.payload.user;
    //   return state;
    default:
      return state;
  }
};