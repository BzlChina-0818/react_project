import React, { Component,Fragment } from 'react'


 class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:"",
            password:"",
            yanzheng:"",
            a:1
        }  
      this.changeValue = this.changeValue.bind(this)
    }
    changeValue (e){
        const tar = [e.target.name]
        const val =  e.target.value 
        this.setState({
            [e.target.name] : e.target.value 
        })
        console.log(tar,val)
        // this.setState((prevState)=>({
        //     tar:val  
        // }))
      
       
    }
    render() {
      
        return (
            
            <div>
                {this.state.a}
              <p><input name="username" value={this.state.username} onChange={this.changeValue} /></p> 
              <p><input name="password" value={this.state.password}  onChange={this.changeValue}/></p> 
              <p><input name="yanzheng" value={this.state.yanzheng}  onChange={this.changeValue}/></p> 
               
            </div>
        )
    }
}
export default Login