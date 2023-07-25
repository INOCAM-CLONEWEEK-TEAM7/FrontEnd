//-----------------------------------------
//생성함수
//-----------------------------------------
const Position = "post/Position";

export const PostPosition = payload => {
  return {
    type: Position,
    payload: payload,
  };
};

//-----------------------------------------
//-----------------------------------------

//-----------------------------------------
// 리듀서
//-----------------------------------------

const postData = (state = [], action) => {
  switch (action.type) {
    case Position:
      state.position = action.payload;
      return [...state];
    default:
      return state;
  }
};

export default postData;
