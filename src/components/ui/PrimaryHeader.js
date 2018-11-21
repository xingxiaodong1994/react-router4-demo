import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'
class PrimaryHeader extends Component{
    render(){
        return(
            <header className="primary-header">
              <h1>欢迎来到我的小demo!</h1>
              <nav>
                <NavLink to="/app" exact activeClassName="active">Home</NavLink>
                <NavLink to="/app//notebook" activeClassName="active">notebook</NavLink>
                <NavLink to="/app/another" activeClassName="active">another</NavLink>
              </nav>
            </header>
        )
    }
}
export default PrimaryHeader