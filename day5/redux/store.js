import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { CHANGE_NAME } from "./action/types";
const initialState = {
  name:'Josh',
  email: ''
}
const reducer = (state = initialState, action)=>{
  console.log('Action',action);
  if(action.type == CHANGE_NAME){
    return {
      ...state,
      name:action.payload
    } 
  }
  // switch (action.type) {
  //   case CHANGE_NAME:
      
  //     break;
  
  //   default:
  //     break;
  // }
  return state;
}


const middleware = [thunk]
const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
