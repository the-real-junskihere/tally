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
  showLoading: true,
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
        showLoading: false,
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
        showLoading: false,
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
        showLoading: false,
      };
      break;
    }
    case 'ERROR': {
      newUser.error.status = true;
      newUser.error.message = action.payload.message;
      newUser.showLoading = false;
      break;
    }
    default: {
      console.log('AuthDefault');
    }
  }

  return newUser;
}
