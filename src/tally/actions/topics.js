import firebase from '../../firebase';

export function createTopic(topicData) {
  return function (dispatch) {
    const { inputs } = topicData;
    const answersOptions = inputs.map((input) => {
      return topicData[input];
    });

    const topics = firebase.database().ref(`topics/${topicData.title}`);
    const topic = {
      answersOptions,
    };
    topics.set(topic);
    topics.on('value', (data) => {
      console.log('created data', data);
    });
  };
}


export default 'topicRelated';
