const defaultState = {
  topic: {
    title: null,
    answer1: null,
    answer2: null,
  },
};

export default function reducer(state = defaultState, action) {
  const newState = { ...state };
  switch (action.type) {
    case 'CREATEDTOPIC': {
      newState.topic = {
        title: action.payload.title,
        answer1: action.payload.answer1,
        answer2: action.payload.answer2,
      };
      break;
    }
    default: {
      console.log('TOPICS DEFAULT');
    }
  }

  return newState;
}
