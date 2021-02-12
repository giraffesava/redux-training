const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if(action.type === 'INCREMENT'){
    counter: state.counter + 1
  }
  if(action.type === 'DECREMENT'){
    counter: state.counter - 1
  }
  if(action.type === 'ADD'){
    counter: state.counter + action.value
  }
  if(action.type === 'INCREMENT'){
    counter: state.counter - action.value
  }
  return state;
}

export default reducer 