export const SET_PLANT = "SET_PLANT";
export const SET_LOGIN = "SET_LOGIN";
export const SET_PLANT_FROM_INDEX = "SET_PLANT_FROM_INDEX";

export const updatePlantAction = plant => ({
  type: SET_PLANT,
  plant: plant
});

export const updatePlantFromIndexAction = index => ({
  type: SET_PLANT_FROM_INDEX,
  index: index
});

export const updateLogin = login => ({
  type: SET_LOGIN,
  login: login
});

export function getPlant(state) {
  return state.plant;
}

export function getLogin(state) {
  return state.login;
}
