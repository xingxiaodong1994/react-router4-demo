import React,{Component} from 'react'
import {Provider} from 'react-redux'
import store from './data/store'
import {HashRouter,Redirect,Switch,Route} from 'react-router-dom'
import AuthorizedRoute from './components/authorized'
import MockBrowser from './components/mock-browser/index'

import UnauthorizedLayout from './components/layouts/UnauthorizedLayout'
import PrimaryLayout from './components/layouts/PrimaryLayout'

export default class App extends Component {
    render(){
       return (
           <Provider store={store}> 
                <HashRouter>   
                    <div>
                        <MockBrowser/>
                        <Switch>
                            <Route path="/auth" component={UnauthorizedLayout}/>
                            <AuthorizedRoute path="/app" component={PrimaryLayout}/>
                            <Redirect to="/auth" />
                        </Switch>
                    </div>
                </HashRouter>  
           </Provider>
      ) 
    }
}



//1.<BrowserRouter></BrowserRouter> 里面只能有一个child！多个组件请用一个div包裹起来。
