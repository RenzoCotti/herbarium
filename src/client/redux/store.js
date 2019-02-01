import { createStore } from "redux";
import { SET_PLANT, SET_LIST, SET_PLANT_FROM_INDEX } from "./actions";

const INITIAL_STATE = {
  plant: null,
  list: null
};

//reducers must not modify the original state
function reducer(state = INITIAL_STATE, action) {
  let newState = { ...state };

  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case SET_PLANT:
      newState.plant = action.plant;
      return newState;

    case SET_LIST:
      newState.list = action.list;
      return newState;

    case SET_PLANT_FROM_INDEX:
      newState.plant = [state.list[action.index]];
      return newState;

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
