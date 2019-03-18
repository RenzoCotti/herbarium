export const SET_PLANT = "SET_PLANT";
export const SET_LOGIN = "SET_LOGIN";
export const SET_IMAGES = "SET_IMAGES";
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

export const updateImages = images => ({
  type: SET_IMAGES,
  images: images
});

export function getImages(state) {
  return state.images;
}
