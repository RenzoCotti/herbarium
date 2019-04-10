import { createStore } from "redux";
import {
  SET_PLANT,
  SET_PLANT_FROM_INDEX,
  SET_LOGIN,
  SET_EDIT,
  SET_LIST,
  SET_ACTION
} from "./actions";

const INITIAL_STATE = {
  plant: null,
  list: null
};

//reducers must not modify the original state
function reducer(state = INITIAL_STATE, action) {
  let newState = { ...state };

  switch (action.type) {
    case SET_PLANT:
      newState.plant = action.plant;
      return newState;

    case SET_PLANT_FROM_INDEX:
      newState.plant = state.list[action.index];
      // console.log(newState);
      return newState;

    case SET_LOGIN:
      newState.login = action.login;
      return newState;

    case SET_EDIT:
      newState.edit = action.edit;
      return newState;

    case SET_LIST:
      newState.list = action.list;
      return newState;

    case SET_ACTION:
      newState.action = action.action;
      return newState;

    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;
