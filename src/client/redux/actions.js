export const SET_PLANT = "SET_PLANT";
export const SET_LIST = "SET_LIST";
export const SET_PLANT_FROM_INDEX = "SET_PLANT_FROM_INDEX";
export const GET_PLANT = "GET_PLANT";
export const GET_LIST = "GET_LIST";

export const updatePlantAction = plant => ({
  type: SET_PLANT,
  plant: plant
});

export const updateListAction = list => ({
  type: SET_LIST,
  list: list
});

export const updatePlantFromIndexAction = index => ({
  type: SET_PLANT_FROM_INDEX,
  index: index
});

export function getPlant(state) {
  return state.plant;
}

export function getList(state) {
  return state.list;
}
