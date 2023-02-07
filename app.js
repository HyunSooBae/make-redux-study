import { createStore, actionCreator } from "./redux";
import { reducer } from "./reducer";
import * as Actions from "./actions";

const store = createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.increase());
store.dispatch(Actions.decrease());
store.dispatch(Actions.reset());