import firebase from '../../firebase';

export function signup(formData) {
  return function (dispatch) {
    const { email, password } = formData;
    firebase.auth().createUserWithEmailAndPassword(email, password).then((data) => {
      dispatch({
        type: 'SIGNUP',
        payload: {
          email: data.email,
          accessToken: data.refreshToken,
          uid: data.uid,
          provider: 'email',
        },
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: {
          message: error.message,
        },
      });
    });
  };
}

export function login(formData) {
  return function (dispatch) {
    const { email, password } = formData;
    firebase.auth().signInWithEmailAndPassword(email, password).then((data) => {
      console.log(data);
      dispatch({
        type: 'Login',
        payload: {
          email: data.email,
          accessToken: data.refreshToken,
          uid: data.uid,
          provider: 'email',
        },
      });
    }).catch((error) => {
      dispatch({
        type: 'ERROR',
        payload: {
          message: error.message,
        },
      });
    });
  };
}

export function setUser(user) {
  return function (dispatch) {
    console.log('called');
    const {
      email,
      accessToken,
      provider,
      uid,
    } = user;
    dispatch({
      type: 'SETUSER',
      payload: {
        email,
        accessToken,
        uid,
        provider,
      },
    });
  };
}

export function checkIfAuthenticated() {
  return function (dispatch) {
    console.log('called check');
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SETUSER',
          payload: {
            email: user.email,
            accessToken: user.refreshToken,
            uid: user.uid,
            provider: 'email',
          },
        });
      } else {
        console.log('Not signeIn');
      }
    });
  };
}
