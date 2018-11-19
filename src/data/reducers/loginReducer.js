let loginReducer=(previousState={status:undefined},action)=>{
    switch(action.type){
        case "LOG_IN" :
            return Object.assign({},previousState,action.payload)
        default:
            return previousState
    }
}
export default loginReducer