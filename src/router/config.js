import React from 'react'
import Home from '@/home'
import ContBase from '@/contBase'
import Login from '@/login'
import Eschats from '@/eschats/eschats'
// import Gao from '@/eschats/gao'
import LazyComponent from '../tool/lazyComponent'
import {Route,Switch,Redirect} from 'react-router-dom'
console.log(LazyComponent )
let lazyComponentHandle=()=>{
    return <LazyComponent lazy={()=>{return import("../component/eschats/plan")}}/>
  }
let router = {
     routes:[
         {
            path:"/",
            component:()=><Redirect to="/home/eschats"/>,
            exact:true
         },
         {
            path:"/home",
             component:Home,
             children:[
                 {
                     path:'/home/eschats',
                     component:Eschats,
                 },
                 {
                    path:'/home/plan',
                    component:lazyComponentHandle
                },
             ]
         },
         {
            path:"/contbase",
             component:ContBase
         },
         {
            path:"/login",
           component:Login,
           exact:true
        }
     ]
}

let {routes} =  router


export {routes}

export default router