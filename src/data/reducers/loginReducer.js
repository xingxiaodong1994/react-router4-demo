const initialState={
    logged:true,
    pending: false,
}
let loginReducer=(
    state=initialState
    ,action
    )=>{
    switch(action.type){
        case 'GET_LOGGED_USER' :
            return Object.assign({},state,{pending:false})
        case 'SET_LOGGED_USER' :
            return Object.assign({},state,{
                pending:false,
                logged:action.logged
            })
        default:
            return state
    }
}
export default loginReducer