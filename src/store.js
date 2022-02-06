import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import CakeReducer from "./Reducer/CakeReducer";
import IceCreamReducer from "./Reducer/IceCreamReducer";
import { UserReducer } from "./Reducer/UserReducer";

const rootReducer = combineReducers({
    cake: CakeReducer,
    iceCream: IceCreamReducer,
    user: UserReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store