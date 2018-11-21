import React,{Component} from 'react'
import {connect} from 'react-redux'
import{getLoggedUser}from '../utils/xhr'
import {Redirect,Route} from 'react-router-dom'

@connect(
    (state)=>{
       return{
           logged:state.login.logged,
           pending:state.login.pending
        } 
    },
    (dispatch)=>{
        return{dispatch:dispatch}
    }
)
class AuthorizedRoute extends Component{
    componentWillMount() {
        getLoggedUser()
    }
    render(){
         const{component: Component,pending,logged, ...rest}=this.props
         return (
            <Route {...rest} render={props => {
              if (pending) return <div>Loading...</div>
              return logged
                ? <Component {...props} />
                : <Redirect to="/auth/login" />
            }} />
          )
        // //console.log(this.props)
        // if(pending){return(<div>Loading...</div>)}
        // return(
        //     logged
        //     ?  <Component {...this.props}/>
        //     :  <Redirect to="/auth/login" />
        // )
    }
}
export default AuthorizedRoute