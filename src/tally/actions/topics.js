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
    console.log(answersResult);
    const topic_id = topicData.title.split(' ').join('_'); // change all spaces with '_' for routes
    const topics = firebase.database().ref(`topics/${topic_id}`);
    const topic = {
      title: topicData.title,
      answersOptions,
      answersResult,
    };
    topics.set(topic);
    topics.on('value', (data) => {
      console.log('created data', data);
    });
  };
}


export default 'topicRelated';
