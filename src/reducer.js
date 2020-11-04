export const initialState = {
  user: null,
  accessRoomId: "",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_ACCESSROOMID":
      return {
        ...state,
        accessRoomId: action.accessRoomId,
      };

    default:
      return state;
  }
};

export default reducer;
