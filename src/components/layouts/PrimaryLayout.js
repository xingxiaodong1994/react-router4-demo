import React ,{Component}from 'react'
import {Switch,Route,Redirect}from 'react-router-dom'

import PrimaryHeader from '../ui/PrimaryHeader'

import AppHomePage from '../pages/AppHomePage'
import NoteBookLayout from './NoteBookLayout'
import AnotherLayout from './AnotherLayout'

class PrimaryLayout extends Component{
    render(){
        const {match}=this.props
        return(
            <div className="primary-header">
                 <PrimaryHeader />
                 <main>
                    <Switch>
                        <Route path={`${match.path}`}  exact Component={AppHomePage}/>
                        <Route path={`${match.path}/notebook`} Component={NoteBookLayout}/>
                        <Route path={`${match.path}/another`} component={AnotherLayout} />
                        <Redirect to={`${match.url}`} />
                    </Switch>
                 </main>
            </div>
        )
    }
}

export default PrimaryLayout