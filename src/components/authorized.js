import React,{Component} from 'react'
import {connect} from 'react-redux'

@connect(
    (state)=>{
       return{state:state} 
    },
    (dispatch)=>{
        return{dispatch:dispatch}
    }
)
class AuthorizedRoute extends Component{
    render(){
        console.log("这里是登录组件")
        return(
            <div>
                登录的用户
            </div>
        )
    }
}
export default AuthorizedRoute