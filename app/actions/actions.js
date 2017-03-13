



export var nextPage = () => {
  return {
    type: 'NEXT_QUESTION'
  }
}

export var addResult = (letter , value) => {
  return {
    type: 'ADD_RESULT',
    letter,
    value
  }
}
