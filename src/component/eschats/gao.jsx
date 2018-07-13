import React, { Component } from 'react'
import http from '../../until/http'
export default class componentName extends Component {
  render() {
    return (
      <div>
           gao
      </div>
    )
  }
  componentDidMount(){
    http.post('/dsp-creative/daata').then(( res)=>{
         console.log(res)
   })
  }
}
