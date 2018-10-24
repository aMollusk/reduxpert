

export function increment(val) {
  if(val) return {
    type: 'SET_VALUE',
    payload: {
      value: val
    }
  }
  return {
    type: 'INCREMENT'
  }
}

// export function asyncIncrement() {
//   return (dispatch, getState) => {
//     const {counter} = getState(); 

    
//     dispatch(increment());
//     dispatch(increment());
//     dispatch(increment());
//     dispatch(increment());
//     dispatch(increment());
//   }
// }
