import firebase from '../../firebase';
import { createUser } from './users';

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
          singedIn: true,
        },
      });
      formData.userId = data.uid;
      dispatch(createUser(formData));
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
      dispatch({
        type: 'LOGIN',
        payload: {
          email: data.email,
          accessToken: data.refreshToken,
          uid: data.uid,
          provider: 'email',
          singedIn: true,
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
        signedIn: true,
      },
    });
  };
}

export function checkIfAuthenticated() {
  return function (dispatch) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch({
          type: 'SETUSER',
          payload: {
            email: user.email,
            accessToken: user.refreshToken,
            uid: user.uid,
            provider: 'email',
            signedIn: true,
          },
        });
      } else {
        console.log('Not signeIn');
      }
    });
  };
}

export function logout() {
  return function (dispatch) {
    firebase.auth().signOut().then(() => {
      dispatch({
        type: 'SETUSER',
        payload: {
          email: null,
          accessToken: null,
          uid: null,
          provider: null,
          signedIn: false,
        },
      });
    }, (error) => {
      dispatch({
        type: 'ERROR',
        payload: {
          message: error.message,
        },
      });
    });
  };
}

export function loginWithOAUTH(provider) {
  return function (dispatch) {
    let setProvider;
    if (provider === 'google') {
      setProvider = new firebase.auth.GoogleAuthProvider();
    } else if (provider === 'facebook') {
      setProvider = new firebase.auth.FacebookAuthProvider();
    }
    firebase.auth().signInWithPopup(setProvider).then((result) => {
      dispatch({
        type: 'SIGNUP',
        payload: {
          email: result.user.email,
          accessToken: result.user.refreshToken,
          uid: result.user.uid,
          provider,
          singedIn: true,
        },
      });
      const formData = {
        userId: result.user.uid,
        email: result.user.email,
        imageUrl: result.user.photoURL,
        name: result.user.displayName,
      };
      dispatch(createUser(formData));
    }).catch((error) => {
      console.log(error);
    });
  };
}
