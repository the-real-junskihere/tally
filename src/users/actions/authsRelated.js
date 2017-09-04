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

export default 'authsRelated';
