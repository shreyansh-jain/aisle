// store.js
import { createStore, combineReducers } from "redux";
import page_type_reducer from "@Redux/reducers/page_type_reducer";

let reducers = combineReducers({
    page_type_reducer
})

const store = createStore(
    reducers
);

export { store };