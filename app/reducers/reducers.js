




export var questionIndexReducer = (state = 15 , action) => {
  switch (action.type) {
    case 'NEXT_QUESTION':
      return state + 1;

    default:
      return state;
  };
};

var resultState = {
  w: 30,
  x: 49,
  y: 38,
  z: 33
};

export var resultsReducer = (state = resultState, action) => {
  switch (action.type) {
      case 'ADD_RESULT':
      let letter = action.letter;
      let value = Number(action.value);
      let previousValue = state[letter];
      if (letter === 'w'){
        return {
          ...state,
          w: previousValue + value
        }
      } else if (letter === 'x'){
        return {
          ...state,
          x: previousValue + value
        }
      } else if (letter === 'y'){
        return {
          ...state,
          y: previousValue + value
        }
      } else if (letter === 'z'){
        return {
          ...state,
          z: previousValue + value
        }
      }

    default:
      return state;
  }
}
