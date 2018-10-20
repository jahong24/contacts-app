import { FETCH_CONTACTS, FETCH_CONTACT } from "../actions";
import _ from "lodash";

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_CONTACTS:
      //console.log(action.payload.data);
      return _.mapKeys(action.payload.data, "id");

    case FETCH_CONTACT:
      //console.log(action.payload.data);
      return { ...state, [action.payload.data.id]: action.payload.data };

    default:
      return state;
  }
}
