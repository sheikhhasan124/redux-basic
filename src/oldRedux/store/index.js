import { createStore } from "redux";

const reducreFn = (state={counter:0},action)=>{
    switch(action.type){
        case 'inc':
            return {...state, counter: state.counter + 1}
        case 'dic':
            return {...state, counter:state.counter - 1}  
        case 'add':
            return {...state, counter:state.counter + action.payload}      
            default:
             return state;
    }
}

const store1 = createStore(reducreFn)
export default store1;