import {Route,Switch,Redirect} from 'react-router-dom'
import React,{Component,Fragment} from 'react'

import {getCookie} from '../until/decode'
class RouteCom extends Component{
    
    render(){
        console.log(this.props.childRoutes)
        return (
            <Fragment>
                
             <Switch>
               {this.props.childRoutes.map((item,index)=>{
              
                   return <Route path={item.path} exact={item.exact || false} render={(location)=>{
                        if(item.children){
                         return <item.component {...location} childRoutes={item.children} />
                         }else{
                            if(getCookie('token')||item.path =='/login'){
                                return <item.component {...location} />
                            }else{
                                return  <Redirect to="/login"/>
                            }
                        
                        }   
                    }} key={index}></Route>
               })}
                    {/* <Redirect to="/home/eschats"/> */}
                
               </Switch>
            </Fragment>
          
        )
    }
}
export default RouteCom 