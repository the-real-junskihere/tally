import firebase from '../../firebase';

export function createTopic(topicData) {
  return function (dispatch) {
    const { inputs } = topicData;
    const answersOptions = inputs.map((input) => {
      return topicData[input];
    });
    const topic_id = topicData.title.split(' ').join('_'); // change all spaces with '_' for routes
    const topics = firebase.database().ref(`topics/${topic_id}`);
    const topic = {
      title: topicData.title,
      answersOptions,
    };
    topics.set(topic);
    topics.on('value', (data) => {
      console.log('created data', data);
    });
  };
}


export default 'topicRelated';
