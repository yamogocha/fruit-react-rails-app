// reducer manage application state

import {fruitsConstants} from "../constants";

const initialState = {editable: false};
export const fruits = (state = initialState, action) => {
  switch (action.type) {
    case fruitsConstants.REQUEST_FRUITS:
      return {
        requesting: true
      };
    case fruitsConstants.REQUEST_SUCCESS:
      return {
        fruits: action.fruits
      };
    case fruitsConstants.REQUEST_FAILURE:
      return action.error;
    case fruitsConstants.ADD_FRUIT:
      return {
        adding: true,
        fruits: [...state.fruits, action.fruit]
      };
    case fruitsConstants.ADD_SUCCESS:
      return {
        ...state
      };
    case fruitsConstants.ADD_FAILURE:
      return action.error;
    case fruitsConstants.DELETE_FRUIT:
      return {
        deleting: true,
        fruits: [...state.fruits.filter(fruit => fruit.id !== action.id)]
      };
    case fruitsConstants.DELETE_SUCCESS:
      return {
        ...state
      };
    case fruitsConstants.DELETE_FAILURE:
      return action.error;
    case fruitsConstants.UPDATE_FRUIT:
      return {
        updating: true,
        ...state,
        fruits: [
          ...state.fruits.filter(fruit => fruit.id !== action.fruit.id),
          action.fruit
        ]
      };
    case fruitsConstants.UPDATE_SUCCESS:
      return {
        ...state
      };
    case fruitsConstants.UPDATE_FAILURE:
      return action.error;
    case fruitsConstants.TOGGLE_EDIT:
      return {
        ...state,
        editable: !state.editable
      };
    default:
      return state;
  }
};
