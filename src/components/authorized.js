import React,{Component} from 'react'
import {connect} from 'react-redux'

@connect(
    (state)=>{

    },
    (dispatch)=>{
        
    }
)
class AuthorizedRoute extends Component{
    render(){
        return(
            <div>
                登录的用户
            </div>
        )
    }
}
export default AuthorizedRoute