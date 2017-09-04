import firebase from '../../firebase';

export function createUser(userData) {
  return function (dispatch) {
    const {
      name,
      email,
      userId,
      imageUrl,
    } = userData;
    const myDB = firebase.database().ref(`users/${userId}`);
    myDB.set({
      name,
      email,
      profilePic: imageUrl,
    });
    myDB.on('value', (data) => {
      const user = data.val();
      dispatch({
        type: 'CREATEUSER',
        payload: {
          email: user.email,
          name: user.name,
          profilePic: user.profilePic,
        },
      });
    });
  };
}

export default 'userThings';
