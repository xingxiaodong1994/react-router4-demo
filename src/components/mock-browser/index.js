import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import "./index.css"

class MockBrowser extends Component{
    constructor(){
        super()
        this.state={
            path:"",
        }
    }
    componentWillMount(){
        this.setState({
            path:this.props.location.pathname
        })
    }
    componentWillReceiveProps(newProps){
        console.log(1)
        console.log(newProps)
        this.setState({
            path:newProps.location.pathname
        })
       
    }
    onChange=(e)=>{
        this.setState({
            path:e.target.value
        })
    }
    onKeyPress=(e)=>{
       // console.log("e.key:")
       // console.log(e.key)
        if(e.key==="Enter"){
           // console.log(this.state.path)
            this.props.history.push(this.state.path)
        }
    }
    render(){
        console.log("MockBrowser组件render")
        console.log(this.props.location)
        let{history}=this.props
        const {goForward,goBacck}=history
        return (
            <div className="MockBrowser">
                <nav>
                    <button className="outline" onClick={goBacck}>后退</button>
                    <button className="outline" onClick={goForward}>前进</button>
                </nav>
                <div className="path">
                    <div className="example">http://example.com</div>
                    <div className="inputWrapper">
                        <input 
                        type="text" 
                        value={this.state.path} 
                        onChange={this.onChange}
                        onKeyPress={this.onKeyPress}
                        />
                    </div>
                </div>
               
            </div>
        )
    }
}
export default withRouter(MockBrowser)
/**
 * react-router 提供了一个withRouter组件 
 * withRouter可以包装任何自定义组件，将react-router 的 history,location,match 三个对象传入。 
 * 无需一级级传递react-router 的属性，当需要用的router 属性的时候，将组件包一层withRouter，
 * 就可以拿到需要的路由信息
 * 
 * 正常情况下 只有Router 的component组件能够自动带有三个属性. 
 *  */