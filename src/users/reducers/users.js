const defaultState = {
  user: {
    name: null,
    email: null,
    profilePic: null,
  },
};

export default function (state = defaultState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATEUSER': {
      newState.user = {
        name: action.payload.name,
        email: action.payload.email,
        profilePic: action.payload.profilePic,
      };
      break;
    }
    default: {
      // console.log('error');
    }
  }

  return newState;
}
