import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import userReducers from "./redux/reducers/userReducers";
import imageReducer from "./redux/reducers/generatedImageReducer";
import imageReducers from "./redux/reducers/imagesReducers";


const rootReduct = combineReducers({
    user: userReducers,
    generatedImage: imageReducer,
    images: imageReducers,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReduct, composeEnhancer(applyMiddleware(thunk)));

export default store;