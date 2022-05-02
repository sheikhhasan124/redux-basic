import { createStore } from "redux";

const reducreFn = (state={counter:0},action)=>{
    switch(action.type){
        case 'inc':
            return {...state, counter: state.counter + 1}
        case 'dic':
            return {...state, counter:state.counter - 1}    
            default:
             return state;
    }
}

const store = createStore(reducreFn)
export default store;