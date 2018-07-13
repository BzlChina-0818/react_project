import React, { Component,Fragment } from 'react'
import http from '../until/http'
import style from '../css/home'
import {setCookie} from '../until/decode'
 class Login extends Component {
    constructor(props){
        super(props)
        this.state ={
            username:"",
            password:"",
            yanzheng:"",
            info:"",
            imgUrl : "https://e.zuoyebang.com/dsp-admin/captcha.jpg?1531360882278"
        }  
      this.changeValue = this.changeValue.bind(this)
      this.clickLogin  = this.clickLogin.bind(this)
    }
    changeValue (e){
        const tar = [e.target.name]
        const val =  e.target.value 
        this.setState({
            [e.target.name] : e.target.value 
        })
    }
    clickLogin(e){
          let {username,password,yanzheng} = this.state
          if(!username.trim()){
               this.setState({
                   info:"请输入账号"
               })
               return 
          }
          if(!password.trim()){
              this.setState({
                  info:"请输入密码"
              })
              return
          }
          if(!yanzheng.trim()){
            this.setState({
                info:"请输入验证码"
            })
            return
        }
        http.post('/dsp-admin/user/login',{username,password}).then((res)=>{
             if(res.success =="0"){
                 console.log(res)
                setCookie('token','bzl')
                localStorage.setItem('user',res.user.name)
                 this.props.history.replace('/home/eschats')
                 
             }
        })
        
    }
    render() {
        let {imgUrl,info} = this.state
        return (
            
            <div className={style.login}>
              <p style={{color:'#fff'}}>{info}</p>
              <p><input name="username" value={this.state.username} onChange={this.changeValue} /></p> 
              <p><input name="password" value={this.state.password}  onChange={this.changeValue}/></p> 
              <p>
                  <input name="yanzheng" value={this.state.yanzheng}  onChange={this.changeValue}/>
                  <img src={imgUrl} onClick={()=>{this.setState({imgUrl:imgUrl+1}) } }/>    
              </p> 
              <button onClick={this.clickLogin}>登录</button>
               
            </div>
        )
    }
}
export default Login