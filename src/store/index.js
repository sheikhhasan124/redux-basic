import { createStore } from "redux";

const reducreFn = (state={counter:0},action)=>{
return state;
}

const store = createStore(reducreFn)
export default store;