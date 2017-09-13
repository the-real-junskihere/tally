import firebase from '../../firebase';

export function createTopic(topicData) {
  return function (dispatch) {
    const { inputs } = topicData;
    const answersOptions = inputs.map((input) => {
      if (input !== 'deleted') {
        return topicData[input];
      }
      return null;
    });
    const answersResult = answersOptions.map((input) => {
      if (input) {
        return 0;
      }
      return null;
    });

    const topic_id = topicData.title.split(' ').join('_'); // change all spaces with '_' for routes
    const topics = firebase.database().ref(`topics/${topic_id}`);
    const topic = {
      title: topicData.title,
      imageUrl: topicData.imageUrl,
      answersOptions,
      answersResult,
    };
    topics.set(topic);
    topics.on('value', (data) => {
      console.log('created data', data);
    });
    console.log('create topic', dispatch);
  };
}

export function getTopic(topicId) {
  return function (dispatch) {
    const topic = firebase.database().ref(`topics/${topicId}`);
    topic.once('value').then((snapshot) => {
      const data = snapshot.val();
      if (data) {
        dispatch({
          type: 'GETTOPIC',
          payload: snapshot.val(),
        });
      } else {
        dispatch({
          type: 'TOPICNOTFOUND',
        });
      }
    });
    console.log('get topic', dispatch);
    console.log('get topic', topicId);
  };
}


export default 'topicRelated';
