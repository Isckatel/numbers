import {createStore, combineReducers } from "redux";
import level1Reducer from "./level1-reducer";
import controllerReducer from "./controller-reducer";

let reducers = combineReducers( {
   controller: controllerReducer,
    level1: level1Reducer
})

let store = createStore(reducers);

export type StateType = ReturnType<typeof store.getState>;
export type DispatchType = typeof store.dispatch;

//@ts-ignore
window.store  = store; //для отладки

export default store;