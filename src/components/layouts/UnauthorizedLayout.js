import React,{Component} from 'react'
import {Switch,Route,Redirect}from 'react-router-dom'
import LoginPage from '../pages/LoginPage'

class UnauthorizedLayout extends Component{
    render(){
        return(
            <div className="unauthorized-layout">
                <div>UnauthorizedLayout组件（登录页面）</div>
                {/* <Switch>
                 <Route path="/auth/login" component={LoginPage} />
                 <Redirect to="/auth/login" />
                </Switch> */}
            </div>
        )
    }
}

export default UnauthorizedLayout