import { createStore, actionCreator } from "./redux";
import { reducer } from "./reducer";
import * as Actions from "./actions";

const store = createStore(reducer);

store.subscribe(function() {
  console.log('subscribe => ', store.getState());
});

store.dispatch(Actions.increase());
console.log('dispatch1 => ', store.getState());
store.dispatch(Actions.increase());
console.log('dispatch2 => ', store.getState());
store.dispatch(Actions.increase());
console.log('dispatch3 => ', store.getState());
store.dispatch(Actions.decrease());
console.log('dispatch4 => ', store.getState());
store.dispatch(Actions.reset());
console.log('dispatch5 => ', store.getState());