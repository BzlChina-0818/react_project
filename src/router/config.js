import React from 'react'
import Home from '@/home'
import ContBase from '@/contBase'
import Login from '@/login'
import Eschats from '@/eschats/eschats'
// import Gao from '@/eschats/gao'
import LazyComponent from '../tool/lazyComponent'
console.log(LazyComponent )
let lazyComponentHandle=()=>{
    return <LazyComponent lazy={()=>{return import("../component/eschats/gao")}}/>
  }
let router = {
     routes:[
         {
            path:"/home",
             component:Home,
             children:[
                 {
                     path:'/home/eschats',
                     component:Eschats,
                 },
                 {
                    path:'/home/gao',
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
        }
     ]
}

let {routes} =  router


export {routes}

export default router