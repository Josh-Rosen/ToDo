import { SET_VISIBILITY_FILTER, SHOW_ALL } from '../actionTypes';

export default function visibilityFilter(state = SHOW_ALL, action) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}
