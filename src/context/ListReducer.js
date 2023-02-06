export const ListReducer = (state, action) => {
  switch (action.type) {
    case "DELETE_COMMENT":
      return {
        ...state,
        comments: state.comments.filter((comment) => comment !== action.payload)
      };
    case "ADD_COMMENT":
      return {
        ...state,
        comments: [...state.comments, action.payload]
      };
    default:
      return state;
  }
};
