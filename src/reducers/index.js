import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import ContactsReducer from "./reducer_contacts";

const rootReducer = combineReducers({
  contacts: ContactsReducer,
  form: formReducer
});

export default rootReducer;
