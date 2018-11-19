import React,{Component} from 'react'
import {Provider} from 'react-redux'
import store from './data/store'
import {BrowserRouter,Redirect,Switch,Route} from 'react-router-dom'
import AuthorizedRoute from './components/authorized'

export default class App extends Component {
    render(){
       return (
           <Provider store={store}> 
                <BrowserRouter>
                     <div>
                        <div>xx</div>
                        <Switch>
                            <Route path="/auth" Component={AuthorizedRoute}/>
                            <Redirect to="/auth" />
                        </Switch>
                     </div>
                </BrowserRouter>  
           </Provider>
      ) 
    }
}
