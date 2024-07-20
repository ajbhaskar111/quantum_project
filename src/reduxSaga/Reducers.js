import { combineReducers } from "redux";
import dashboard from "./dashboardAPI/Reducer";


const rootReducer = combineReducers({
  dashboard,
});
export default rootReducer;
