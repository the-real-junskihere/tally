const defaultState = {
  topic: {
    title: null,
    imageUrl: null,
    answersOptions: null,
    answersResult: null,
  },
};

export default function reducer(state = defaultState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATEDTOPIC': {
      newState.topic = {
        title: action.payload.title,
        imageUrl: action.payload.imageUrl,
        answersOptions: action.payload.answer1,
        answanswersResulter2: action.payload.answer2,
      };
      break;
    }
    case 'GETTOPIC': {
      newState.topic = action.payload;
      break;
    }
    case 'TOPICNOTFOUND': {
      console.log('%c TOPIC DOES NOT EXISTS', 'font-size: 50px; color: red');
      newState.topic = {
        title: '',
        imageUrl: '',
        answersOptions: '',
        answersResult: '',
      };
      break;
    }
    default: {
      // do nothing
      // console.log('%c TOPICS DEFAULT', 'font-size: 50px');
    }
  }

  return newState;
}
