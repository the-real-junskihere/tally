export default function reducer(state = {
  user: {
    email: null,
    uid: null,
    accessToken: null,
    provider: null,
  },
  signup: false,
  error: {
    status: false,
    message: null,
  },
}, action) {
  let newUser = { ...state };

  switch (action.type) {
    case 'SIGNUP': {
      newUser = {
        user: {
          email: action.payload.email,
          uid: action.payload.uid,
          accessToken: action.payload.accessToken,
          provider: action.payload.provider,
        },
        signup: true,
      };
      break;
    }
    case 'ERROR': {
      newUser.error.status = true;
      newUser.error.message = action.payload.message;
      break;
    }
    default: {
      console.log('Fell onto default');
    }
  }

  return newUser;
}
