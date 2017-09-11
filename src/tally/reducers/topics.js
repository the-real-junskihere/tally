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
    default: {
      console.log('%c TOPICS DEFAULT', 'font-size: 50px');
    }
  }

  return newState;
}
