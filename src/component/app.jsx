import React,{Component,Fragment} from 'react'
import {routes} from '../router/config'
import RouterView from '../router/router'

class App extends Component{
    render(){
        return ( 
         <Fragment>  
             <RouterView childRoutes={routes}/>
         </Fragment>
     

        )
    }
}
export default App