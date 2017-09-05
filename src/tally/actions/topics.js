import firebase from '../../firebase';

export function createTopic(topicData) {
  return function (dispatch) {
    console.log(topicData);
    const topics = firebase.database().ref(`topics/${topicData.title}`);
    const topic = {
      answer1: topicData.answer1,
      answer2: topicData.answer2,
    };
    topics.set(topic);
    topics.on('value', (data) => {
      console.log('created data', data);
    });
  };
}


export default 'topicRelated';
