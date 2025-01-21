import { rootReducer } from "./reducer/index";
import { createStore } from "react-redux";
 
export const store = createStore(rootReducer);

