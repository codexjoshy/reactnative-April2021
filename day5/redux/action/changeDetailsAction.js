// Actions are pure object that holds payloads and type
//type are strings that tells the kind of action taing place
//payload is the data used to update the state or carryout actions on the state.

import { CHANGE_NAME } from "./types"


const anAction = {
  type: '',
  payload:''
}

//Action creators 
//which are functions that return an action (pure object)


export const changeNameAction = (data)=>{
  return {
    type: CHANGE_NAME,
    payload: data
  }
}

