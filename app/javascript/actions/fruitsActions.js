// contains redux action creators and async actions to wait for response from http request

import {fruitsConstants} from "../constants";
import {fruitsServices} from "../services";

const getFruits = () => {
  return dispatch => {
    dispatch(request());

    fruitsServices.getFruits().then(
      fruits => dispatch(success(fruits)),
      error => dispatch(failure(error.toString()))
    );
  };
  function request() {
    return {type: fruitsConstants.REQUEST_FRUITS};
  }
  function success(fruits) {
    return {type: fruitsConstants.REQUEST_SUCCESS, fruits};
  }
  function failure(error) {
    return {type: fruitsConstants.REQUEST_FAILURE, error};
  }
};

const addFruit = (fruit, fruits) => {
  return dispatch => {
    dispatch(add(fruit));

    fruitsServices.addFruit(fruit).then(
      fruits => dispatch(success(fruits)),
      error => dispatch(failure(error.toString()))
    );
  };
  function add(fruit) {
    return {type: fruitsConstants.ADD_FRUIT, fruit};
  }
  function success(fruits) {
    return {type: fruitsConstants.ADD_SUCCESS, fruits};
  }
  function failure(error) {
    return {type: fruitsConstants.ADD_FAILURE, error};
  }
};

const deleteFruit = (id, fruits) => {
  return dispatch => {
    dispatch(_delete(id));

    fruitsServices.deleteFruit(id).then(
      fruits => dispatch(success(fruits)),
      error => dispatch(failure(error.toString()))
    );
  };
  function _delete(id) {
    return {type: fruitsConstants.DELETE_FRUIT, id};
  }
  function success(fruits) {
    return {type: fruitsConstants.DELETE_SUCCESS, fruits};
  }
  function failure(error) {
    return {type: fruitsConstants.DELETE_FAILURE, error};
  }
};

const updateFruit = (fruit, fruits) => {
  return dispatch => {
    dispatch(update(fruit));

    fruitsServices.updateFruit(fruit).then(
      fruits => dispatch(success(fruits)),
      error => dispatch(failure(error.toString()))
    );
  };
  function update(fruit) {
    return {type: fruitsConstants.UPDATE_FRUIT, fruit};
  }
  function success(fruits) {
    return {type: fruitsConstants.UPDATE_SUCCESS, fruits};
  }
  function failure(error) {
    return {type: fruitsConstants.UPDATE_FAILURE, error};
  }
};

const toggleEdit = () => {
  return {type: fruitsConstants.TOGGLE_EDIT};
};

export const fruitsActions = {
  getFruits,
  addFruit,
  deleteFruit,
  updateFruit,
  toggleEdit
};
