export default function reducer(state = {
  auth: {
    email: null,
    uid: null,
    accessToken: null,
    provider: null,
  },
  signedIn: false,
  error: {
    status: false,
    message: null,
  },
}, action) {
  let newUser = { ...state };

  switch (action.type) {
    case 'SIGNUP': {
      newUser = {
        auth: {
          email: action.payload.email,
          uid: action.payload.uid,
          accessToken: action.payload.accessToken,
          provider: action.payload.provider,
        },
        signedIn: action.payload.signedIn,
        error: {
          status: false,
          message: null,
        },
      };
      break;
    }
    case 'LOGIN': {
      newUser = {
        auth: {
          email: action.payload.email,
          uid: action.payload.uid,
          accessToken: action.payload.accessToken,
          provider: action.payload.provider,
        },
        signedIn: action.payload.signedIn,
        error: {
          status: false,
          message: null,
        },
      };
      break;
    }
    case 'SETUSER': {
      newUser = {
        auth: {
          email: action.payload.email,
          uid: action.payload.uid,
          accessToken: action.payload.accessToken,
          provider: action.payload.provider,
        },
        signedIn: action.payload.signedIn,
        error: {
          status: false,
          message: null,
        },
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
