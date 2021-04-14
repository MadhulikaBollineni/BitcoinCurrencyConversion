import { Data } from "./Reducers/Constants.js";

export const fetchDataSuccess = data => {
  return {
    type: Data.fetchDataSuccess,
    payload: data
  };
};

export const fetchData = data => {
  return {
    type: Data.fetchData,
    payload: data
  };
};

export const fetchDataError = data => {
  return {
    type: Data.fetchDataError,
    payload: data
  };
};
