import {Route,Switch,Redirect} from 'react-router-dom'
import React,{Component,Fragment} from 'react'

class RouteCom extends Component{
    
    render(){
        console.log(this.props.childRoutes)
        return (
            <div>
                
             <Switch>
               {this.props.childRoutes.map((item,index)=>{
                   return <Route path={item.path}  render={(location)=>{
                        if(item.children){
                            return <item.component {...location} childRoutes={item.children} />
                        }else{
                            return <item.component {...location} />
                        }
                    }} key={index}></Route>
                  
               })}
                <Redirect to="home/eschats"/>
               </Switch>
            </div>
          
        )
    }
}
export default RouteCom 