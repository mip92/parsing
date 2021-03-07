import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import Reducer from "./reducers/Reducer";
import thunkMiddleware from "redux-thunk";
import {reducer as formReducer} from 'redux-form';
const rootReducer=combineReducers({
    Reducer,
    form: formReducer,
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware)),
);


//const store=createStore(rootReducer)
//console.log(store.getState())
export default store