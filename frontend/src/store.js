import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducers from "./redux/reducers/userReducers";
import imageReducer from "./redux/reducers/generatedImageReducer";

const rootReduct = combineReducers({
    user: userReducers,
    generatedImage: imageReducer,
    images: imageReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduct, composeEnhancer(applyMiddleware(thunk)));

export default store;