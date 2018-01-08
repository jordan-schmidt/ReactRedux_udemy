import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // avoid state mutation (ex. state.push)
      // instead of return state.concat([action.payload.data]);
      // can use ES6 spread syntax which expands iterables
      return [ action.payload.data, ...state ];
    default:
      return state;
  }
}
