export const SET_PLANT = "SET_PLANT";
export const SET_LOGIN = "SET_LOGIN";
export const SET_EDIT = "SET_EDIT";
export const SET_ACTION = "SET_ACTION";
export const SET_LIST = "SET_LIST";
export const SET_PLANT_FROM_INDEX = "SET_PLANT_FROM_INDEX";

export const updatePlant = plant => ({
  type: SET_PLANT,
  plant: plant
});

export const updatePlantFromIndex = index => ({
  type: SET_PLANT_FROM_INDEX,
  index: index
});

export function getPlant(state) {
  return state.plant;
}

export function getLogin(state) {
  return state.login;
}

export const updateLogin = login => ({
  type: SET_LOGIN,
  login: login
});

export function getEdit(state) {
  return state.edit;
}

export const updateEdit = edit => ({
  type: SET_EDIT,
  edit: edit
});

export function getAction(state) {
  return state.action;
}

export const updateAction = action => ({
  type: SET_ACTION,
  action: action
});

export function getList(state) {
  return state.list;
}

export const updateList = list => ({
  type: SET_LIST,
  list: list
});

