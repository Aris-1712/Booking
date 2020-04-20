const initialState={
    locationList:[],
    purposeList:[],
    slotList:[]
}
const Reducer=(state=initialState,Action)=>{

    if(Action.type==="GET_LOCATION"){
        state={...state,locationList:Action.val}
        return state
    }
    if(Action.type==="GET_SLOTS"){
        state={...state,slotList:Action.val}
        return state
    }
    if(Action.type==="GET_PURPOSE"){
        state={...state,purposeList:Action.val}
        return state
    }
    return state
}

export default Reducer