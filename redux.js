function createStore() {
  let state;
  let handler = [];

  function send(action) {
    state = worker(state, action);
    handler.forEach(handler => handler());
  }

  function subscribe(handler) {
    handler.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    send,
    getState,
    subscribe,
  };
}

function worker(state = { count: 0 }, action) {
  // do something
  switch(action.type) {
    case 'increase':
      return {...state, count : state.count +1 };
    default :
      return {...state}
  }
}

const store = createStore(worker);

store.subscribe(function() {
  console.log(store.getState());
});

store.send({ type: 'increase' });
store.send({ type: 'increase' });