import {createStore} from 'redux';

//types (events) | CHANGE_COLOR
const CHANGE_COLOR = "CHANGE_COLOR";
//actions
export const changeColor = (col) => ({
    type: CHANGE_COLOR,
    payload: {
        value: col
    }
})
//initial state
const initialState = {
    color: "#FFFFFF"
}
//reducer
const reducer = (state=initialState, action) => {
    switch(action.type){
        case CHANGE_COLOR:
        return {
            color: action.payload.value
        };
    default: return state;
    }
}
//create store
const store = createStore(reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//export store
export default store;