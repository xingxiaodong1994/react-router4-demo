import React,{Component} from 'react'
import { Link } from 'react-router-dom'
import {login} from '../../utils/xhr'

class LoginPage extends Component{
    login=()=>{
        login().then(
            ()=>{
                this.props.history.push('/app')
            }
        )
    }
    render(){
        return(
            <div>
            <h1>Login Page</h1>
            <p>
                我们无法直接进入<Link to="/app">/app</Link>页面，我们必须先登录
            </p>
            <button onClick={this.login}>
                登录
            </button>
        </div>
        )
    }
}



export default LoginPage