export const actionCreator = type => payload => {{
  type,
  payload,
}}

export function createStore(reducer) {
  let state;
  let handler = [];

  function dispatch(action) {
    state = reducer(state, action);
    handler.forEach(handler => handler());
  }

  function subscribe(handler) {
    handler.push(handler);
  }

  function getState() {
    return state;
  }

  return {
    dispatch,
    getState,
    subscribe,
  };
}